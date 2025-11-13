// src/index.ts
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { google } from "googleapis"
import { getOAuth2Client, getAuthUrl, exchangeCodeForTokens } from "./google.js"
import { initialSync, incrementalSync } from "./sync.js"
import { listEvents, listEventsWithAttendees } from "./db.js"
// If you already added cron in Step 6, keep that import & block; otherwise you can ignore.
import cron from "node-cron"

dotenv.config()

const app = express()
app.use(express.json())

// Optional: restrict CORS to your frontend origin during dev
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173"
app.use(cors({ origin: FRONTEND_ORIGIN, credentials: false }))

const PORT = Number(process.env.PORT || 3000)
const CALENDAR_ID = process.env.CALENDAR_ID
if (!CALENDAR_ID) {
  throw new Error("Missing CALENDAR_ID in .env")
}

// --------- helpers ----------
function logErr(e: any) {
  const status = e?.response?.status
  const data = e?.response?.data
  console.error("Google API error:", status || "", data || e)
}

// --------- OAuth flow ----------
app.get("/api/google/auth", (_req, res) => {
  res.redirect(getAuthUrl())
})

app.get("/api/google/callback", async (req, res) => {
  const code = req.query.code as string
  if (!code) return res.status(400).send("Missing ?code")
  try {
    await exchangeCodeForTokens(code)
    res.redirect("/api/google/status")
  } catch (e) {
    logErr(e)
    res.status(500).send("Token exchange failed")
  }
})

app.get("/api/google/status", async (_req, res) => {
  try {
    const oauth2 = getOAuth2Client()
    const tokenInfo = await oauth2.getAccessToken()
    res.json({ ok: !!tokenInfo.token })
  } catch (e) {
    logErr(e)
    res.json({ ok: false })
  }
})

// --------- Diagnostics: list all calendars this account can see ----------
app.get("/api/google/calendars", async (_req, res) => {
  try {
    const oauth2 = getOAuth2Client()
    const calendar = google.calendar({ version: "v3", auth: oauth2 })
    const cl = await calendar.calendarList.list({ maxResults: 250 })
    const items = (cl.data.items || []).map(c => ({
      id: c.id,            // e.g. sales@roitechai.com or ...@group.calendar.google.com
      summary: c.summary,  // display name
      primary: !!c.primary,
      accessRole: c.accessRole, // owner / writer / reader
    }))
    res.json({ calendars: items })
  } catch (e) {
    logErr(e)
    res.status(500).json({ error: "Failed to list calendars" })
  }
})

// --------- Read upcoming events (with lookback option) ----------
app.get("/api/google/events/upcoming", async (req, res) => {
  try {
    const oauth2 = getOAuth2Client()
    const calendar = google.calendar({ version: "v3", auth: oauth2 })

    // ?lookbackDays=30 (optional) — by default we look forward from "now"
    const lookbackDays = Number(req.query.lookbackDays ?? 0)
    const timeMin = lookbackDays > 0
      ? new Date(Date.now() - lookbackDays * 24 * 60 * 60 * 1000).toISOString()
      : new Date().toISOString()

    const list = await calendar.events.list({
      calendarId: CALENDAR_ID!,
      timeMin,
      singleEvents: true,
      maxResults: 50,
      orderBy: "startTime",
    })

    const events = (list.data.items || []).map(ev => ({
      id: ev.id,
      start: ev.start?.dateTime || ev.start?.date,
      end: ev.end?.dateTime || ev.end?.date,
      summary: ev.summary,
      attendees: (ev.attendees || []).map(a => ({
        email: a.email,
        name: a.displayName || null,
        responseStatus: a.responseStatus || null,
      })),
      updated: ev.updated,
      htmlLink: ev.htmlLink,
    }))

    res.json({ events })
  } catch (e) {
    logErr(e)
    res.status(500).json({ error: "Failed to list events" })
  }
})

// --------- Sync endpoints ----------
app.post("/api/google/sync/init", async (_req, res) => {
  try {
    const token = await initialSync()
    res.json({ ok: true, token })
  } catch (e) {
    logErr(e)
    res.status(500).json({ ok: false, error: "initialSync failed" })
  }
})

app.post("/api/google/sync/pull", async (_req, res) => {
  try {
    const token = await incrementalSync()
    res.json({ ok: true, token })
  } catch (e) {
    logErr(e)
    res.status(500).json({ ok: false, error: "incrementalSync failed" })
  }
})

// --------- Inspect DB (simple list) ----------
app.get("/api/events/db", (_req, res) => {
  res.json({ events: listEvents(200) })
})

// ============ STEP 7: Events + attendees (joined) ============
app.get("/api/events/db/full", (_req, res) => {
  try {
    const data = listEventsWithAttendees(500)
    res.json({ events: data })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Failed to list full events" })
  }
})

// ============ STEP 8: Leads view (one row per external attendee) ============
app.get("/api/leads", (_req, res) => {
  try {
    const rows = listEventsWithAttendees(1000)
    const leads = rows.flatMap(ev =>
      (ev.attendees || [])
        .filter(a => a.email && a.email.toLowerCase() !== String(CALENDAR_ID).toLowerCase())
        .map(a => ({
          eventId: ev.id,
          when: ev.start,
          name: a.name ?? null,
          email: a.email,
          status: a.responseStatus ?? null,
          title: ev.summary ?? null,
          link: ev.htmlLink ?? null,
        }))
    )
    res.json({ leads })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Failed to list leads" })
  }
})

import { renderTableView } from "./views.ts"

app.get("/admin/bookings", (_req, res) => {
  res.send(renderTableView())
})


// --------- Optional: incremental sync scheduler (every 5 minutes) ---------
cron.schedule("*/5 * * * *", async () => {
  try {
    const t = await incrementalSync()
    console.log("[sync] incremental ok, token:", t.slice(0, 12) + "…")
  } catch (e: any) {
    console.error("[sync] incremental failed", e?.response?.data || e)
  }
})

import { renderLeadsTable } from "./views.ts"

app.get("/admin/leads", (_req, res) => res.send(renderLeadsTable()))


// --------- start ----------
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
  console.log(`Authorize: http://localhost:${PORT}/api/google/auth`)
})
