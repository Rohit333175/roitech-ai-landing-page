/* src/components/Booking.tsx */
import React from "react"
import { CalendarDays } from "lucide-react"

export const Booking: React.FC = () => {
  return (
    <section id="book" className="relative py-16 sm:py-20 bg-white">
      <div className="absolute inset-0 bg-grid-slate-100 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1.5 text-sm text-slate-700">
            <CalendarDays className="w-4 h-4" />
            Book a live demo
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 text-balance">
            Pick a time that works — we’ll send a Teams/Google Meet invite.
          </h2>
          <p className="mt-3 text-slate-600">
            Choose a slot on our booking calendar below.
          </p>
        </div>

        {/* Embedded Google Calendar (no form, full width) */}
        <div className="mt-8">
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            {/* Google Calendar Appointment Scheduling begin */}
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WCCEekeKoz72naLd9vNAcsEtDQLhpJtZlHk1POLWfojYdQEYhL7G0GgRTkHvsC_vqgN9VQIxF?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Roitech Demo Booking"
              loading="lazy"
            ></iframe>
            {/* end Google Calendar Appointment Scheduling */}
          </div>
        </div>
      </div>
    </section>
  )
}
