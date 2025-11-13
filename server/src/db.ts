// src/db.ts
import Database from "better-sqlite3"
import path from "path"
import { fileURLToPath } from "url"

/** ---------- DB init ---------- */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// DB file at project root so it's easy to inspect
const db = new Database(path.join(process.cwd(), "calendar.db"))

db.pragma("journal_mode = WAL")
db.pragma("foreign_keys = ON")

/** ---------- Schema ---------- */
db.exec(`
CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  start TEXT,
  end TEXT,
  summary TEXT,
  updated TEXT,
  htmlLink TEXT
);

CREATE TABLE IF NOT EXISTS attendees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  eventId TEXT NOT NULL,
  email TEXT,
  name TEXT,
  responseStatus TEXT,
  UNIQUE(eventId, email),
  FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT
);
`)

/** ---------- Types ---------- */
export type AttendeeDTO = {
  email?: string | null
  name?: string | null
  responseStatus?: string | null
}

export type UpsertEventDTO = {
  id: string
  start?: string | null
  end?: string | null
  summary?: string | null
  updated?: string | null
  htmlLink?: string | null
  attendees?: AttendeeDTO[]
}

export type EventRow = {
  id: string
  start: string | null
  end: string | null
  summary: string | null
  updated: string | null
  htmlLink: string | null
}

export type MetaRow = { value: string }

/** ---------- Meta helpers ---------- */
export function getMeta(key: string): string | null {
  const stmt = db.prepare<[string], MetaRow>("SELECT value FROM meta WHERE key = ?")
  const row = stmt.get(key)
  return row?.value ?? null
}

export function setMeta(key: string, value: string) {
  db.prepare("INSERT INTO meta(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value")
    .run(key, value)
}

/** ---------- Event write helpers ---------- */
const insertOrUpdateEvent = db.prepare<UpsertEventDTO>(`
  INSERT INTO events (id, start, end, summary, updated, htmlLink)
  VALUES (@id, @start, @end, @summary, @updated, @htmlLink)
  ON CONFLICT(id) DO UPDATE SET
    start=excluded.start,
    end=excluded.end,
    summary=excluded.summary,
    updated=excluded.updated,
    htmlLink=excluded.htmlLink
`)

const deleteAttendeesByEvent = db.prepare<[string]>(`DELETE FROM attendees WHERE eventId = ?`)

const upsertAttendee = db.prepare<{
  eventId: string
  email: string | null
  name: string | null
  responseStatus: string | null
}>(`
  INSERT INTO attendees (eventId, email, name, responseStatus)
  VALUES (@eventId, @email, @name, @responseStatus)
  ON CONFLICT(eventId, email) DO UPDATE SET
    name=excluded.name,
    responseStatus=excluded.responseStatus
`)

/**
 * Upsert an event and replace its attendees set.
 * Use inside sync loop for each returned Google Calendar event.
 */
export function upsertEvent(ev: UpsertEventDTO) {
  const tx = db.transaction((payload: UpsertEventDTO) => {
    insertOrUpdateEvent.run({
      id: payload.id,
      start: payload.start ?? null,
      end: payload.end ?? null,
      summary: payload.summary ?? null,
      updated: payload.updated ?? null,
      htmlLink: payload.htmlLink ?? null,
    })

    // Refresh attendees for this event (simplest for correctness)
    deleteAttendeesByEvent.run(payload.id)
    for (const a of payload.attendees ?? []) {
      upsertAttendee.run({
        eventId: payload.id,
        email: a.email ?? null,
        name: a.name ?? null,
        responseStatus: a.responseStatus ?? null,
      })
    }
  })

  tx(ev)
}

/** Optional: mark/delete an event when Google returns status=cancelled */
export function removeEvent(eventId: string) {
  db.prepare<[string]>("DELETE FROM events WHERE id = ?").run(eventId)
}

/** ---------- Read helpers ---------- */
export function listEvents(limit = 50): EventRow[] {
  const stmt = db.prepare<[number], EventRow>("SELECT * FROM events ORDER BY datetime(start) ASC LIMIT ?")
  return stmt.all(limit)
}

export function getEventById(eventId: string): EventRow | undefined {
  const stmt = db.prepare<[string], EventRow>("SELECT * FROM events WHERE id = ?")
  return stmt.get(eventId)
}

export function listEventsWithAttendees(limit = 100) {
  // Simple join for convenience; for large datasets prefer separate queries
  const rows = db
    .prepare(
      `
      SELECT
        e.id               AS eventId,
        e.start            AS start,
        e.end              AS end,
        e.summary          AS summary,
        e.updated          AS updated,
        e.htmlLink         AS htmlLink,
        a.email            AS attendeeEmail,
        a.name             AS attendeeName,
        a.responseStatus   AS attendeeStatus
      FROM events e
      LEFT JOIN attendees a ON a.eventId = e.id
      ORDER BY datetime(e.start) ASC
      LIMIT ?
    `
    )
    .all(limit) as Array<{
      eventId: string
      start: string | null
      end: string | null
      summary: string | null
      updated: string | null
      htmlLink: string | null
      attendeeEmail: string | null
      attendeeName: string | null
      attendeeStatus: string | null
    }>

  // Group attendees under each event
  const map = new Map<
    string,
    {
      id: string
      start: string | null
      end: string | null
      summary: string | null
      updated: string | null
      htmlLink: string | null
      attendees: { email: string | null; name: string | null; responseStatus: string | null }[]
    }
  >()

  for (const r of rows) {
    if (!map.has(r.eventId)) {
      map.set(r.eventId, {
        id: r.eventId,
        start: r.start,
        end: r.end,
        summary: r.summary,
        updated: r.updated,
        htmlLink: r.htmlLink,
        attendees: [],
      })
    }
    if (r.attendeeEmail || r.attendeeName || r.attendeeStatus) {
      map.get(r.eventId)!.attendees.push({
        email: r.attendeeEmail,
        name: r.attendeeName,
        responseStatus: r.attendeeStatus,
      })
    }
  }

  return Array.from(map.values())
}

export default db
