// src/sync.ts
import { google } from "googleapis";
import { getOAuth2Client } from "./google.js";
// 1. IMPORT 'removeEvent'
import { setMeta, getMeta, upsertEvent, removeEvent } from "./db.js";

const CALENDAR_ID = process.env.CALENDAR_ID!;

export async function initialSync(): Promise<string> {
  const auth = getOAuth2Client();
  const calendar = google.calendar({ version: "v3", auth });

  let pageToken: string | undefined;
  let nextSyncToken: string | undefined;

  do {
    const res = await calendar.events.list({
      calendarId: CALENDAR_ID,
      singleEvents: true,
      showDeleted: true, // recommended for sync
      maxResults: 2500,
      pageToken,
    });

    for (const ev of res.data.items || []) {
      upsertEvent({
        id: ev.id!,
        start: ev.start?.dateTime || ev.start?.date,
        end: ev.end?.dateTime || ev.end?.date,
        summary: ev.summary || "",
        updated: ev.updated || "",
        htmlLink: ev.htmlLink || "",
        attendees: (ev.attendees || []).map((a) => ({
          email: a.email || null,
          name: a.displayName || null,
          responseStatus: a.responseStatus || null,
        })),
      });
    }

    pageToken = res.data.nextPageToken || undefined;
    nextSyncToken = res.data.nextSyncToken || nextSyncToken;
  } while (pageToken);

  if (!nextSyncToken) {
    throw new Error(
      "No nextSyncToken returned; try again later or ensure there is at least one event.",
    );
  }
  setMeta("syncToken", nextSyncToken);
  return nextSyncToken;
}

export async function incrementalSync(): Promise<string> {
  const auth = getOAuth2Client();
  const calendar = google.calendar({ version: "v3", auth });
  let syncToken = getMeta("syncToken");
  if (!syncToken) {
    // If no token yet, do a full sync first
    return await initialSync();
  }

  let nextSyncToken: string | undefined;
  let pageToken: string | undefined;

  try {
    do {
      const res = await calendar.events.list({
        calendarId: CALENDAR_ID,
        singleEvents: true,
        showDeleted: true,
        maxResults: 2500,
        pageToken,
        syncToken,
      });

      for (const ev of res.data.items || []) {
        // 2. UPDATED LOGIC TO HANDLE DELETIONS
        // For deletions, Google returns a stub with status cancelled
        if (ev.status === "cancelled" && ev.id) {
          // This event was deleted (cancelled) in Google Calendar.
          // We must remove it from our local database.
          console.log(`Removing deleted event: ${ev.id}`);
          removeEvent(ev.id);
          // Skip the upsert logic below
          continue;
        }
        
        // Any non-deleted event is upserted
        upsertEvent({
          id: ev.id!,
          start: ev.start?.dateTime || ev.start?.date,
          end: ev.end?.dateTime || ev.end?.date,
          summary: ev.summary || "",
          updated: ev.updated || "",
          htmlLink: ev.htmlLink || "",
          attendees: (ev.attendees || []).map((a) => ({
            email: a.email || null,
            name: a.displayName || null,
            responseStatus: a.responseStatus || null,
          })),
        });
      }

      pageToken = res.data.nextPageToken || undefined;
      nextSyncToken = res.data.nextSyncToken || nextSyncToken;
    } while (pageToken);
  } catch (e: any) {
    // If the syncToken is stale/invalid, do an initial full sync again
    const code = e?.response?.status;
    const reason = e?.response?.data?.error?.errors?.[0]?.reason;
    if (code === 410 || reason === "fullSyncRequired") {
      console.log("Sync token expired, performing full sync.");
      return await initialSync();
    }
    throw e;
  }

  if (nextSyncToken) {
    setMeta("syncToken", nextSyncToken);
    return nextSyncToken;
  }
  return syncToken;
}