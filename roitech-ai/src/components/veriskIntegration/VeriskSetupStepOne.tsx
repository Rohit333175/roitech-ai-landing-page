import { motion } from "framer-motion"

const steps = [
  "Sign in to Xactimate Admin or open Xactimate and select Products > Xactimate Admin.",
  "Open the Integrated Services tab and select Susan AI.",
  "Enable the checkbox for the integration and click Next.",
  "Enter any extra comments in the Notes area (any text is fine — it’s required to proceed), and click Confirm.",
  "You’ll see a confirmation that Susan AI is now enabled for your Xactimate instance.",
]

export const VeriskSetupStepOne = () => {
  return (
    <section
      id="verisk-setup-step-1"
      className="relative isolate overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* subtle dot grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#000000_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Set up your Susan AI + Verisk integration
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
          {/* LEFT – STEP LIST */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Step 1: Enable Susan AI in Xactimate
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

            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#264A70] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#1f3b59] hover:shadow-lg transition-all"
            >
              See detailed instructions
            </button>
          </motion.div>

          {/* RIGHT – SCREENSHOT AREA (READY FOR IMAGE) */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            {/* subtle navy glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] 
                            bg-gradient-to-tr from-[#264A70]/35 via-slate-200/40 to-[#264A70]/30
                            blur-2xl" />

            {/* main container */}
            <div
              className="relative rounded-[2.5rem] bg-white border border-slate-300 
                         shadow-[0_22px_55px_rgba(15,23,42,0.18)] overflow-hidden 
                         p-4 sm:p-6 lg:p-8"
            >
              {/* Replace with your actual screenshot */}
              <div
                className="aspect-[16/10] w-full rounded-2xl border border-slate-200 
                           bg-slate-100 grid place-items-center text-slate-500 
                           text-base sm:text-lg"
              >
                Your Xactimate Admin screenshot goes here
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
