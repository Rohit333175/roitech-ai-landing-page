/* src/components/ForRestorationFirms.tsx — side-by-side problems/benefits + single highlight card */
import { motion } from "framer-motion"
import { Wrench, Timer, Users, Workflow, DollarSign, Scale, CheckCircle2 } from "lucide-react"

export const ForRestorationFirms = () => {
  const problems = [
    { icon: Timer, text: "Manual estimates take hours per job." },
    { icon: Users, text: "Estimator shortages make scaling difficult." },
    { icon: Scale, text: "Inconsistent pricing causes revenue leakage and disputes." },
    { icon: Workflow, text: "Juggling multiple tools slows production." },
    { icon: DollarSign, text: "Slow estimates delay carrier approvals and cash flow." },
  ]

  const benefits = [
    { icon: Wrench, text: "Generate complete, audit-ready estimates in minutes." },
    { icon: Workflow, text: "Integrated workflow for photos, sketches, and scopes." },
    { icon: Scale, text: "Standardized results across teams and projects." },
    { icon: DollarSign, text: "Faster submissions mean faster payments." },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Two-column: Problems | Benefits */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="rounded-2xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-sm"
        >
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Problems</h4>
          <ul className="space-y-3">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <p.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">{p.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-sm"
        >
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Benefits</h4>
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <b.icon className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">{b.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Single highlight card (Industry Challenge style) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-teal-50 p-6 shadow-sm text-center"
      >
        <div className="inline-flex items-center justify-center gap-2 text-slate-900 font-semibold text-base md:text-lg">
          <CheckCircle2 className="w-5 h-5 text-blue-600" />
          <span>Capture every line item you deserve — no missed details, no underpaid jobs.</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
