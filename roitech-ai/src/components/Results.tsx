/* src/components/Results.tsx */
import { motion } from "framer-motion"
import { Hourglass, Sparkles } from "lucide-react"

export const Results = () => {
  return (
    <section id="results" className="relative isolate overflow-hidden py-24">
      {/* Warm background accents */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-amber-300/30 via-yellow-300/25 to-orange-300/25 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-orange-300/25 via-amber-300/25 to-yellow-300/25 blur-3xl -z-10" />
      <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Results that actually save time
          </h2>
          <div className="mt-3 w-48 h-[2px] mx-auto bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 rounded-full" />
        </motion.div>

        {/* Two separate panels */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Manual estimating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-lg p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-sm text-slate-700 mb-4">
              <Hourglass className="w-4 h-4 text-slate-500" />
              Manual Estimating
            </div>

            <div className="flex items-end gap-3">
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800">
                60–120<span className="text-2xl align-super ml-1">min</span>
              </div>
            </div>

            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Gathering notes, deduping codes, structuring line items, and formatting each estimate manually.
            </p>
          </motion.div>

          {/* Susan AI estimating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative rounded-3xl border border-slate-200 bg-white/90 backdrop-blur shadow-xl p-10 overflow-hidden"
          >
            {/* Warm glow */}
            <div className="pointer-events-none absolute -top-14 -right-14 h-48 w-48 rounded-full bg-gradient-to-br from-amber-400/35 via-yellow-400/30 to-orange-400/30 blur-2xl" />

            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 text-white px-3 py-1.5 text-sm mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              Susan AI Estimating
            </div>

            <div className="flex items-end gap-3">
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                &lt; 10<span className="text-2xl align-super ml-1">min</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 text-xs font-semibold">
                up to 6–12× faster
              </span>
            </div>

            <p className="mt-3 text-slate-700 text-base leading-relaxed">
              Upload notes and photos — AI standardizes, deduplicates, and generates an audit-ready estimate automatically.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
