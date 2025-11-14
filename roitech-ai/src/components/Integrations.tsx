/* src/components/Integrations.tsx — pure white background, no disclaimer */
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
      name: "Xactimate (Verisk)", // internal label only, not shown in UI
      image: VeriskLogo,
      alt: "Estimating platform integration logo",
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
    <section id="integrations" className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* glossy underline */}
          <div className="mt-3 mx-auto h-[2px] w-48 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 overflow-hidden relative">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-[6px] w-10 rounded-full bg-white/70 blur-[2px]"
              initial={{ x: -40 }}
              animate={{ x: 240 }}
              transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Plain logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center">
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 ${
                  item.name.includes("Email") ? "h-12" : "h-10"
                }`}
                draggable={false}
              />

              {/* Show labels only for non-Verisk items */}
              {item.name !== "Xactimate (Verisk)" && (
                <span className="mt-3 text-base md:text-lg font-semibold text-slate-800">
                  {item.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
