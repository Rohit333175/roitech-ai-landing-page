/* src/components/Integrations.tsx */
import React from "react"
import { motion } from "framer-motion"

import VeriskLogo from "../assets/Roitech_Logos/Verisk_Logo.png"
import EmailIcon from "../assets/email-marketing.png"
import CalendarIcon from "../assets/schedule.png"

type Integration = {
  name: string
  image: string
  alt: string
}

export const Integrations: React.FC = () => {
  const integrations: Integration[] = [
    {
      name: "Xactimate (Verisk)",
      image: VeriskLogo,
      alt: "Verisk logo representing Xactimate integration",
    },
    {
      name: "Email / CRM",
      image: EmailIcon,
      alt: "Email and CRM integration icon",
    },
    {
      name: "Calendars",
      image: CalendarIcon,
      alt: "Calendar integration icon",
    },
  ]

  return (
    <section
      id="integrations"
      className="relative isolate overflow-hidden py-24 sm:py-28 bg-gradient-to-br from-white via-slate-50 to-slate-100"
    >
      {/* Background texture + mesh glows */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_1px_1px,#0f172a_0.6px,transparent_1px)] [background-size:18px_18px] opacity-[0.04]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-indigo-300/25 via-sky-300/20 to-cyan-300/20 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-cyan-300/20 via-sky-300/20 to-indigo-300/20 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Integrates seamlessly with your ecosystem
          </h2>
          <div className="mt-3 mx-auto h-[2px] w-48 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500" />
        </motion.div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { type: "spring", stiffness: 250, damping: 16 },
              }}
              className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-indigo-400/40 via-sky-400/40 to-cyan-400/40 shadow-[0_0_30px_rgba(14,165,233,0.08)] hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all"
            >
              <div className="relative rounded-3xl bg-white/80 backdrop-blur-md p-8 h-full border border-white/70 flex flex-col items-center justify-center gap-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(14,165,233,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Slightly larger Email icon */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 ${
                    item.name.includes("Email")
                      ? "h-12 w-auto"
                      : "h-9 w-auto"
                  }`}
                  loading="lazy"
                  draggable={false}
                />

                <span className="relative text-base md:text-lg font-semibold text-slate-800 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xs text-slate-500 mt-10 leading-relaxed max-w-2xl mx-auto text-center"
        >
          Logos are displayed for identification only. Xactimate® is a registered trademark of Verisk.
          All trademarks are property of their respective owners. No endorsement implied.
        </motion.p>
      </div>
    </section>
  )
}
