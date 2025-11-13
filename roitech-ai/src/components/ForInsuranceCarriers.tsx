/* src/components/ForInsuranceCarriers.tsx — side-by-side problems/benefits + single highlight card */
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Timer,
  FileWarning,
  FileCheck2,
  Scale,
  Workflow,
  CheckCircle2,
} from "lucide-react"

export const ForInsuranceCarriers = () => {
  const problems = [
    { icon: Timer,       text: "Long review cycles due to incomplete or inconsistent submissions." },
    { icon: FileWarning, text: "Missing line items and documentation create audit risk." },
    { icon: Scale,       text: "Inconsistent estimating logic across vendors and regions." },
    { icon: Workflow,    text: "Fragmented tools slow QA and collaboration." },
  ]

  const benefits = [
    { icon: ShieldCheck, text: "Audit-ready estimates with standardized structure and coding." },
    { icon: FileCheck2,  text: "Complete documentation in one place: photos, sketches, checklists." },
    { icon: CheckCircle2,text: "Faster reviews via consistent line items and justifications." },
    { icon: Workflow,    text: "Integrated workflow improves adjuster–contractor collaboration." },
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
                <p.icon className="w-5 h-5 text-violet-600 flex-shrink-0 mt-1" />
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
                <b.icon className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-1" />
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
        className="rounded-2xl border border-slate-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6 shadow-sm text-center"
      >
        <div className="inline-flex items-center justify-center gap-2 text-slate-900 font-semibold text-base md:text-lg">
          <CheckCircle2 className="w-5 h-5 text-violet-600" />
          <span>Every line item backed by proof — photos, measurements, and context.</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
