// src/views.ts
import { listEventsWithAttendees } from "./db.ts"

/** ------------------------------
 *  CONFIG
 * ------------------------------ */
const TZ = "America/Chicago" // CST

function isAllDay(iso?: string | null) {
  return !!iso && /^\d{4}-\d{2}-\d{2}$/.test(iso)
}

function fmtDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: TZ,
  }).format(date)
}

function fmtTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: TZ,
  }).format(date)
}

function formatRange(startISO?: string | null, endISO?: string | null) {
  if (!startISO) return ""
  if (isAllDay(startISO)) {
    const start = new Date(startISO + "T00:00:00")
    return `${fmtDate(start)} · All day`
  }
  const s = new Date(startISO)
  const e = endISO ? new Date(endISO) : null
  const sameDay = e ? fmtDate(s) === fmtDate(e) : true
  if (sameDay && e) return `${fmtDate(s)} · ${fmtTime(s)} – ${fmtTime(e)} CST`
  if (e) return `${fmtDate(s)} ${fmtTime(s)} – ${fmtDate(e)} ${fmtTime(e)} CST`
  return `${fmtDate(s)} · ${fmtTime(s)} CST`
}

function esc(s?: string | null) {
  return (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

/** ------------------------------
 *  PAGE SHELL
 * ------------------------------ */
function shell(title: string, subtitle: string, innerHTML: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${esc(title)}</title>
    <style>
      :root {
        --gradient-start: #6366f1;
        --gradient-mid: #22d3ee;
        --gradient-end: #0ea5e9;
        --bg: #f8fafc;
        --text: #0f172a;
        --card-bg: #ffffffcc;
        --border: #e2e8f0;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: "Inter", system-ui, sans-serif;
        background: var(--bg);
        color: var(--text);
      }
      header {
        background: linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end));
        color: white;
        padding: 2rem 1rem;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      }
      header h1 {
        font-size: 2rem;
        font-weight: 800;
        margin: 0;
        letter-spacing: -0.02em;
      }
      header p {
        margin: 0.5rem 0 0;
        opacity: 0.9;
        font-size: 1rem;
      }
      main {
        max-width: 1100px;
        margin: 2.5rem auto;
        padding: 0 1rem;
      }
      .card {
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(2,6,23,0.08);
        backdrop-filter: blur(10px);
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 40px rgba(2,6,23,0.12);
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        padding: 14px 18px;
        border-bottom: 1px solid var(--border);
        text-align: left;
      }
      th {
        background: linear-gradient(90deg, rgba(99,102,241,0.1), rgba(14,165,233,0.1));
        color: #334155;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      tr:hover td {
        background: #f1f5f9;
      }
      td.event-title {
        font-weight: 600;
      }
      td.when {
        font-weight: 500;
        color: #0f172a;
      }
      td.attendees {
        color: #334155;
      }
      td.attendees span {
        color: #64748b;
        font-size: 13px;
      }
      td.actions a {
        color: #2563eb;
        text-decoration: none;
        font-weight: 500;
      }
      td.actions a:hover {
        text-decoration: underline;
      }
      .count-badge {
        display: inline-block;
        background: linear-gradient(90deg, var(--gradient-start), var(--gradient-mid));
        color: white;
        border-radius: 999px;
        padding: 4px 10px;
        font-size: 12px;
        margin-left: 8px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>${esc(title)}</h1>
      <p>${esc(subtitle)}</p>
    </header>
    <main>${innerHTML}</main>
  </body>
  </html>
  `
}

/** ------------------------------
 *  BOOKINGS TABLE
 * ------------------------------ */
export function renderTableView() {
  const events = listEventsWithAttendees(500)
  const rows = events
    .map(ev => {
      const when = formatRange(ev.start, ev.end)
      const attendees =
        (ev.attendees || [])
          .map(a => `${esc(a.name || "")} <span>&lt;${esc(a.email || "")}&gt;</span>`)
          .join("<br>") || "<span>(no attendees)</span>"

      return `
        <tr>
          <td class="event-title">${esc(ev.summary) || "(No title)"}</td>
          <td class="when">${when}</td>
          <td class="attendees">${attendees}</td>
          <td class="actions"><a href="${ev.htmlLink}" target="_blank">View</a></td>
        </tr>`
    })
    .join("")

  const table = `
    <div class="card">
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>When (CST)</th>
            <th>Attendees</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `

  return shell("Roitech Bookings", `Synced directly from Google Calendar · ${events.length} events`, table)
}

/** ------------------------------
 *  LEADS TABLE
 * ------------------------------ */
export function renderLeadsTable() {
  const CALENDAR_ID = String(process.env.CALENDAR_ID || "").toLowerCase()
  const events = listEventsWithAttendees(1000)
  const leads = events.flatMap(ev =>
    (ev.attendees || [])
      .filter(a => a.email && a.email.toLowerCase() !== CALENDAR_ID)
      .map(a => ({
        title: ev.summary || "(No title)",
        when: formatRange(ev.start, ev.end),
        name: a.name || "",
        email: a.email || "",
        link: ev.htmlLink || "#",
      }))
  )

  const rows = leads
    .map(
      l => `
      <tr>
        <td class="event-title">${esc(l.title)}</td>
        <td class="when">${l.when}</td>
        <td class="attendees">${esc(l.name)} <span>&lt;${esc(l.email)}&gt;</span></td>
        <td class="actions"><a href="${l.link}" target="_blank">View</a></td>
      </tr>`
    )
    .join("")

  const table = `
    <div class="card">
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>When (CST)</th>
            <th>Lead</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `

  return shell("Roitech Leads", `External attendees captured from bookings · ${leads.length} records`, table)
}
