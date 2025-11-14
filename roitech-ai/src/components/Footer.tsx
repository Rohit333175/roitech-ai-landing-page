/* src/components/Footer.tsx */
import RoitechLogo from "../assets/Roitech_Logos/Roitech Logo.png";
import { Mail, CalendarDays } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-14">
      {/* Background mesh gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 w-[60%] h-72 bg-gradient-to-br from-blue-100 via-teal-100 to-emerald-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-20 right-0 w-[55%] h-72 bg-gradient-to-tr from-violet-100 via-fuchsia-100 to-indigo-100 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand + nav */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src={RoitechLogo}
              className="h-12 w-auto object-contain"
              draggable={false}
              alt="Roitech corporation logo"
            />
            <span className="font-company text-3xl font-semibold text-slate-900">
            Roitech Corporation
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-slate-700 font-medium">
            <a href="#privacy" className="hover:text-slate-900 transition-colors"> {/* CHANGED from # */}
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-900 transition-colors">
              Terms
            </a>
            <a href="#book" className="hover:text-slate-900 transition-colors">
              Contact
            </a>
            <a
              href="mailto:jack@roitechai.com"
              className="hover:text-slate-900 transition-colors"
            >
              Careers
            </a>
          </nav>
        </div>

        {/* Contact cards */}
        <div className="mt-10 grid sm:grid-cols-2 gap-7">
          {/* Card 1 */}
          <div className="rounded-2xl p-[2px] bg-gradient-to-br from-blue-300/70 via-teal-300/70 to-emerald-300/70 shadow-lg">
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl p-6">
              <h3 className="text-slate-900 font-semibold text-lg flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-700" />
                General Inquiries
              </h3>
              <p className="mt-3">
                <a
                  href="mailto:info@roitechai.com"
                  className="inline-flex items-center gap-2 text-slate-700 underline decoration-slate-400/70 hover:text-slate-900 hover:decoration-slate-900"
                >
                  <Mail className="w-4 h-4" />
                  info@roitechai.com
                </a>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-[2px] bg-gradient-to-br from-violet-300/70 via-fuchsia-300/70 to-indigo-300/70 shadow-lg">
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl p-6">
              <h3 className="text-slate-900 font-semibold text-lg flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-violet-700" />
                Meetings & Scheduling
              </h3>
              <p className="mt-3">
                <a
                  href="mailto:jack@roitechai.com"
                  className="inline-flex items-center gap-2 text-slate-700 underline decoration-slate-400/7D hover:text-slate-900 hover:decoration-slate-900"
                >
                  <CalendarDays className="w-4 h-4" />
                  jack@roitechai.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-slate-200" />
        <div className="py-6 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Roitech Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};