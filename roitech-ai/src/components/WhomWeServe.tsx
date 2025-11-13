/* src/components/WhoWeServe.tsx — modern, glassy redesign (no all-caps title) */
import { motion } from "framer-motion"
import { whoWeServe } from "./constants"

export const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="relative isolate overflow-hidden py-28 bg-white">
      {/* soft gradient glows */}
      <div className="pointer-events-none absolute -top-24 -left-28 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-blue-300/25 via-teal-300/25 to-emerald-300/25 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-violet-300/25 via-fuchsia-300/25 to-indigo-300/25 blur-3xl -z-10" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Who we serve
          </h2>
          <div className="mt-4 relative mx-auto w-52 h-[2px] rounded-full bg-gradient-to-r from-blue-500/60 via-teal-500/60 to-emerald-500/60 overflow-hidden">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-[6px] w-10 rounded-full bg-white/70 blur-[2px] mix-blend-screen"
              initial={{ x: -40, opacity: 0.7 }}
              animate={{ x: 240 }}
              transition={{ duration: 2.8, ease: 'linear', repeat: Infinity }}
            />
          </div>
          <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Tailored solutions for every role in the restoration and insurance ecosystem.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-3 gap-8"
        >
          {whoWeServe.map((card, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* gradient frame */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-slate-200/80 to-slate-100/60 opacity-100" />
              <div className="relative rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:shadow-[0_16px_44px_rgba(1D,23,42,0.14)]">
                {/* conic highlight on hover */}
                <span className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_180deg,rgba(59,130,246,0.12),rgba(20,184,166,0.12),rgba(99,102,241,0.12),transparent_70%)]" />
                <div className="relative p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 via-teal-600 to-emerald-600 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{card.title}</h3>

                  <ul className="space-y-2 text-slate-700 mt-auto">
                    {card.points.map((p: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex-shrink-0"></span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* UPDATED: Bottom box with section-specific colors */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* 1. Border gradient changed to blue/teal/emerald */}
            <div className="p-[1.2px] rounded-2xl bg-gradient-to-r from-blue-500/70 via-teal-500/70 to-emerald-500/70">
              <div className="rounded-2xl bg-white/80 backdrop-blur-md px-6 py-6 md:px-10 md:py-8">
                <p className="text-[1.05rem] md:text-lg text-slate-800 text-center">
                  Empowering <span className="font-semibold text-slate-900">Insurers</span>,{" "}
                  <span className="font-semibold text-slate-900">TPAs</span>, and{" "}
                  <span className="font-semibold text-slate-900">Contractors</span> to collaborate seamlessly through intelligent automation.
                </p>
              </div>
            </div>
            {/* 2. Glow gradient changed to blue/teal/emerald */}
            <div className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-30 bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-300" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}