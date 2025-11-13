/* src/components/WhyRoitech.tsx — header in word case (no uppercase) */
import { motion } from "framer-motion"
import { whyRoitechPillars } from "./constants"

export const WhyRoitech = () => {
  return (
    <section id="about" className="relative isolate overflow-hidden py-28">
      {/* soft glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-28 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-blue-300/25 via-teal-300/25 to-emerald-300/25 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-fuchsia-300/25 via-violet-300/25 to-indigo-300/25 blur-3xl -z-10" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Roitech?
          </h2>
          <div className="mt-4 relative mx-auto w-56 h-[2px] rounded-full bg-gradient-to-r from-blue-500/60 via-teal-500/60 to-emerald-500/60 overflow-hidden">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-[6px] w-10 rounded-full bg-white/70 blur-[2px] mix-blend-screen"
              initial={{ x: -40, opacity: 0.7 }}
              animate={{ x: 240 }}
              transition={{ duration: 2.8, ease: 'linear', repeat: Infinity }}
              aria-hidden="true"
            />
          </div>
          <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Purpose-built for restoration — designed by industry experts, powered by next-generation AI.
          </p>
        </motion.div>

        {/* PILLAR CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyRoitechPillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-slate-200/80 to-slate-100/50" />
              <div className="relative rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:shadow-[0_16px_44px_rgba(15,23,42,0.14)]">
                <span className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_180deg,rgba(59,130,246,0.12),rgba(20,184,166,0.12),rgba(99,102,241,0.12),transparent_70%)]" />
                <div className="relative p-7">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle CTA / ending line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 text-center shadow-sm">
            <p className="text-[1.05rem] md:text-lg text-slate-800">
              <span className="font-semibold text-slate-900">Roitech</span> — redefining restoration automation through precision, transparency, and AI-driven intelligence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
