import { motion } from "framer-motion"
import { Camera, UploadCloud, Wand2, Share2 } from "lucide-react"

const steps = [
  {
    icon: Camera,
    label: "Capture",
    title: "Document the loss once",
    desc: "Collect notes, photos, sketches, and checklists in Susan AI while you’re on site.",
  },
  {
    icon: Wand2,
    label: "Generate",
    title: "AI builds the estimate",
    desc: "Susan AI structures room data, deduplicates items, and recommends line items aligned to XactAnalysis® codes.",
  },
  {
    icon: UploadCloud,
    label: "Sync",
    title: "Sync with XactAnalysis",
    desc: "Send estimate data into the Verisk ecosystem and keep XactAnalysis® as your source of record.",
  },
  {
    icon: Share2,
    label: "Export",
    title: "Export",
    desc: "Review, adjust, then export to XactAnalysis® / PDF and share with carriers or TPAs in your existing workflows.",
  },
]

export const VeriskWorkflow = () => {
  return (
    <section
      id="verisk-workflow"
      className="relative isolate overflow-hidden py-24 bg-white"
      aria-labelledby="verisk-workflow-heading"
    >
      {/* STRONGER CORNER GLOWS */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-300/55 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -top-10 right-10 h-56 w-56 rounded-full bg-sky-200/45 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-96 w-96 rounded-full bg-teal-300/55 blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-10 -left-10 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl -z-10" />

      {/* dot grid */}
      <div className="absolute inset-0 -z-20 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <h2
            id="verisk-workflow-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            How the Verisk integration works
          </h2>

          <div className="mt-4 relative mx-auto w-56 h-[2px] rounded-full bg-gradient-to-r from-blue-500/60 via-sky-500/60 to-teal-500/60 overflow-hidden">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-[6px] w-10 rounded-full bg-white/70 blur-[2px] mix-blend-screen"
              initial={{ x: -40, opacity: 0.8 }}
              animate={{ x: 220 }}
              transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
              aria-hidden="true"
            />
          </div>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            A simple four-step flow that keeps Susan AI, Verisk, and XactAnalysis® in sync —
            without changing how your adjusters or estimators like to work today.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-6 md:grid-cols-4"
        >
          {steps.map((step, idx) => (
            <motion.li
              key={idx}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="group relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur
                         shadow-[0_10px_30px_rgba(15,23,42,0.06)] px-6 py-7 flex flex-col h-full
                         overflow-hidden transition-all duration-300
                         hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.16)]
                         hover:border-blue-300 hover:bg-white"
            >
              {/* hover sheen */}
              <span
                className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100
                           transition-opacity duration-500
                           bg-[conic-gradient(from_180deg,rgba(59,130,246,0.12),rgba(56,189,248,0.12),rgba(45,212,191,0.12),transparent_70%)]"
              />

              {/* content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* top row: step number + label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold shadow-sm">
                    {idx + 1}
                  </span>
                  <span className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {step.label}
                  </span>
                </div>

                {/* icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-teal-500 text-white shadow-sm">
                  <step.icon className="w-5 h-5" />
                </div>

                {/* text */}
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* bottom accent line, pinned to bottom */}
                <span className="mt-auto pt-5 block h-[1.5px] rounded-full bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-teal-500/50" />
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* reassurance line */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 text-center"
        >
          <p className="text-sm sm:text-base md:text-[1.05rem] text-slate-600">
            Keep <span className="font-semibold text-slate-900">Susan AI</span> for
            intelligence, <span className="font-semibold text-slate-900">Verisk</span> for
            ecosystem, and <span className="font-semibold text-slate-900">XactAnalysis®</span> as
            the estimating system your teams already trust.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
