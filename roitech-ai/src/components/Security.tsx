/* src/components/Security.tsx */
import { motion } from "framer-motion"
import { securityFeatures } from "./constants"

export const Security = () => {
  return (
    <section id="security" className="relative isolate overflow-hidden py-28 bg-slate-950">
      {/* Background: dark mesh + aurora glows */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff12_1px,transparent_1.2px)] [background-size:18px_18px] opacity-[0.08]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-indigo-500/25 via-sky-400/20 to-cyan-400/20 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Security &amp; Compliance
          </h2>
          <div className="mt-4 relative mx-auto w-56 h-[2px] rounded-full bg-gradient-to-r from-indigo-400/70 via-sky-400/70 to-cyan-400/70 overflow-hidden">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-[6px] w-10 rounded-full bg-white/80 blur-[2px] mix-blend-screen"
              initial={{ x: -40, opacity: 0.9 }}
              animate={{ x: 240 }}
              transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
              aria-hidden="true"
            />
          </div>
          <p className="mt-5 text-slate-300 max-w-2xl mx-auto text-lg">
            Privacy-first design with auditability at every step.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {securityFeatures.map((f, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/20 via-sky-300/20 to-cyan-300/20"
            >
              {/* inner glass card */}
              <div className="relative h-full rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                {/* sheen on hover */}
                <span className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_180deg,rgba(99,102,241,0.14),rgba(56,189,248,0.14),rgba(34,197,94,0.12),transparent_70%)]" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-500 text-white shadow">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold leading-tight">{f.title}</h3>
                    <p className="text-slate-300 mt-1.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>

                {/* bottom accent line */}
                <div className="mt-6 h-[1.5px] rounded-full bg-gradient-to-r from-indigo-400/60 via-sky-400/60 to-cyan-400/60" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact reassurance bar (visual only; no new copy) */}
        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-4 text-center">
          <span className="text-sm text-slate-300">
            Enterprise-grade controls • Encryption • Role-based access • Audit trails
          </span>
        </div>
      </div>
    </section>
  )
}
