/* src/components/SusanAISpotlight.tsx */
import { motion } from "framer-motion"
import {
  BadgeCheck, ShieldCheck, Zap,
  Workflow as WorkflowIcon, Home, Ruler, Image as ImageIcon, ClipboardCheck, FileCheck
} from "lucide-react"

export const SusanAISpotlight = () => {
  // Advantage cards (appear AFTER workflow)
  const pillars = [
    { icon: BadgeCheck, title: "Accurate Scopes", desc: "Phase-wise, audit-ready line items aligned to standards." },
    { icon: ShieldCheck, title: "Consistent Estimates", desc: "Uniform logic across branches and estimators—no missed codes." },
    { icon: Zap,        title: "Faster Turnaround", desc: "From hours to minutes—shorter claim cycles, happier customers." },
  ]

  const steps = [
    { k: "1", t: "Property Info",      d: "Create estimate & enter details.", icon: Home },
    { k: "2", t: "Sketch",             d: "Upload/import measurements.",      icon: Ruler },
    { k: "3", t: "Images",             d: "Add room/area photos.",            icon: ImageIcon },
    { k: "4", t: "Inspection",         d: "Complete checklist.",              icon: ClipboardCheck },
    { k: "5", t: "Tasks / Generate",   d: "AI estimate ready to export.",     icon: FileCheck },
  ]

  return (
    <section id="our-product" className="relative isolate overflow-hidden py-28">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 -right-28 h-[24rem] w-[24rem] rounded-full bg-gradient-to-br from-indigo-300/20 via-violet-300/20 to-fuchsia-300/20 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-[20rem] w-[20rem] rounded-full bg-gradient-to-tr from-fuchsia-300/20 via-violet-200/20 to-indigo-200/20 blur-3xl -z-10" />
      <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* INTRODUCING SUSAN AI */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-base md:text-lg font-extrabold tracking-[0.22em] uppercase bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-700 bg-clip-text text-transparent">
            Introducing Susan AI
          </h2>
          <div className="mt-3 relative mx-auto w-48 h-[2px] rounded-full bg-gradient-to-r from-violet-500/60 via-fuchsia-500/60 to-indigo-500/60 overflow-hidden">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-[6px] w-10 rounded-full bg-white/70 blur-[2px] mix-blend-screen"
              initial={{ x: -40, opacity: 0.7 }}
              animate={{ x: 220 }}
              transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Intro + mockup */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center lg:text-left">
              The intelligent estimating platform from <span className="font-company">Roitech</span>.
            </h3>
            <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Susan AI standardizes estimating, eliminates rework, and accelerates approvals—without relying on a handful of senior estimators.
            </p>
          </motion.div>

          {/* Right: mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
            aria-label="Susan AI product preview"
          >
            <div className="pointer-events-none absolute -inset-2 -z-10 blur-2xl opacity-35 bg-gradient-to-tr from-violet-400 via-fuchsia-300 to-indigo-300" />
            <div className="rounded-2xl border border-slate-200 bg-white/85 backdrop-blur p-5 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-900">Task: Estimate</div>
                <span className="text-xs text-slate-500">Auto-saved</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Affected Area</div>
                  <div className="mt-1 font-medium text-slate-900">Kitchen</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Category</div>
                  <div className="mt-1 font-medium text-slate-900">Water</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Class</div>
                  <div className="mt-1 font-medium text-slate-900">2</div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-900">Scope preview</div>
                  <span className="text-xs text-violet-700 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-full">AI suggested</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Remove and replace baseboards — LF</li>
                  <li>• Remove wet drywall — SF</li>
                  <li>• HEPA vacuum & antimicrobial application — HR</li>
                </ul>
              </div>
            </div>

            {/* Supporting callouts */}
            <div className="absolute -bottom-10 -left-6 w-[88%] rotate-[-3deg]">
              <div className="rounded-2xl border border-slate-200 bg-white/75 backdrop-blur p-4 shadow-[0_14px_40px_rgba(15,23,42,0.12)]">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                  <WorkflowIcon className="w-4 h-4 text-violet-600" />
                  Inspection checklist
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">Moisture readings</div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">Sketch uploaded</div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">Contents assessed</div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">Photos attached</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-20 -right-4 w-[70%] rotate-2">
              <div className="rounded-2xl border border-slate-200 bg-white/75 backdrop-blur p-4 shadow-[0_14px_40px_rgba(15,23,42,0.12)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-900">Export</div>
                  <span className="text-xs text-slate-500">Xactimate® / PDF</span>
                </div>
                <div className="mt-2 h-16 rounded-lg border border-dashed border-slate-300 grid place-items-center text-xs text-slate-500">
                  Drag to carrier portal
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PRODUCT WORKFLOW — keeps generous spacing to avoid overlap */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-28 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-5 py-10 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
        >
          <h4 className="text-center text-base md:text-lg font-extrabold tracking-[0.18em] uppercase bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-700 bg-clip-text text-transparent">
            Product Workflow
          </h4>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-5 gap-6">
            {steps.map(({ k, t, d, icon: Icon }) => (
              <div
                key={k}
                className="group relative rounded-xl border border-slate-200 bg-white p-5 text-center transition
                           hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(15,23,42,0.12)] hover:border-violet-300"
              >
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-slate-900 text-white text-sm font-semibold shadow
                                ring-2 ring-white/70 outline outline-1 outline-slate-200
                                group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-fuchsia-600 group-hover:ring-violet-200 transition">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Step label */}
                <div className="mt-3 text-xs uppercase tracking-wide text-slate-500">Step {k}</div>

                <div className="mt-1 text-base md:text-lg font-semibold text-slate-900">{t}</div>
                <div className="mt-1 text-sm md:text-base text-slate-500">{d}</div>

                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity
                                 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.16),transparent_60%)]" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ADVANTAGES — moved AFTER workflow, with the one-liner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              One platform that turns messy job notes into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                clear, complete, and compliant estimates
              </span>
              .
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(60%_80%_at_50%_0%,rgba(124,58,237,0.12),transparent_60%)]" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
