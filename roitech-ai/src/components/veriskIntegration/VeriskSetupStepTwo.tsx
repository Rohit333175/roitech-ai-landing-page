import { motion } from "framer-motion"

const steps = [
  "In the Susan AI web app, open your Organization Settings.",
  "Select the Integrations section.",
  "Toggle on the Verisk / XactAnalysis® integration and click Add.",
  "Enter a name for your integration so your team can recognize it.",
  "Enter your XactNet® address — specifically, the part after the @ symbol (you can find your XactNet address in the top right of XactAnalysis).",
  "Click Save to enable the connection.",
]

export const VeriskSetupStepTwo = () => {
  return (
    <section
      id="verisk-setup-step-2"
      className="relative isolate overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* subtle dot grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#000000_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
          {/* LEFT – SCREENSHOT AREA (READY FOR IMAGE) */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            {/* subtle navy glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem]
                            bg-gradient-to-tr from-[#264A70]/35 via-slate-200/40 to-[#264A70]/30
                            blur-2xl" />

            <div
              className="relative rounded-[2.5rem] bg-white border border-slate-300
                         shadow-[0_22px_55px_rgba(15,23,42,0.18)] overflow-hidden
                         p-4 sm:p-6 lg:p-8"
            >
              {/* Replace with your Susan AI integrations screenshot */}
              <div
                className="aspect-[16/10] w-full rounded-2xl border border-slate-200
                           bg-slate-100 grid place-items-center text-slate-500
                           text-base sm:text-lg"
              >
                Your Susan AI integrations screenshot goes here
              </div>
            </div>
          </motion.div>

          {/* RIGHT – STEP LIST */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Step 2: Enable the integration in Susan AI
            </h3>

            <ol className="mt-6 space-y-4 text-base sm:text-lg text-slate-800">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#264A70] text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <p className="leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-base sm:text-lg text-slate-800">
              You can now send estimates and floor plans directly into XactAnalysis® from Susan AI.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#264A70] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#1f3b59] hover:shadow-lg transition-all"
            >
              See detailed instructions
            </button>

            <p className="mt-4 text-xs sm:text-sm text-slate-500 italic">
              Repeat these steps to connect additional XactAnalysis accounts if your organization uses more than one.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
