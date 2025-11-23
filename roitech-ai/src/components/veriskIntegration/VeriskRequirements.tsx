import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const requirements = [
  {
    title: "An active Susan AI account",
    highlight: true,
    desc: "With admin-level permissions to configure integrations and manage user access.",
  },
  {
    title: "A valid Xactimate® license",
    highlight: true,
    desc: "With access to Xactimate Admin so you can enable and manage third-party connections.",
  },
  {
    title: "Your XactNet® address",
    highlight: true,
    desc: "Used to link Susan AI with your Xactimate account (e.g. JDOE@COMPANY.XO).",
  },
]

export const VeriskRequirements = () => {
  return (
    <section
      id="verisk-requirements"
      className="relative isolate overflow-hidden py-24 bg-gradient-to-b from-white via-white to-slate-50"
    >
      {/* NAVY CORNER BUBBLES */}
      <div className="pointer-events-none absolute -top-36 -left-32 h-72 w-72 rounded-full bg-[#264A70]/40 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -top-10 -right-32 h-64 w-64 rounded-full bg-[#264A70]/30 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-[#264A70]/35 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#264A70]/30 blur-3xl -z-10" />

      {/* dot grid */}
      <div className="absolute inset-0 -z-20 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#000000_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              What you need to get started
            </h2>

            {/* glossy navy underline */}
            <div className="mt-4 w-56 md:w-64 h-[3px] rounded-full bg-gradient-to-r from-[#264A70] via-slate-600 to-[#264A70] relative overflow-hidden">
              <span className="absolute inset-y-0 left-0 w-16 bg-white/70 blur-[3px] opacity-80" />
            </div>
          </div>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A few quick prerequisites and you’re ready to connect{" "}
            <span className="font-semibold text-[#264A70]">Susan AI</span> with your{" "}
            <span className="font-semibold text-slate-900">Verisk / Xactimate®</span> environment.
          </p>
        </motion.div>

        {/* Cards + arrows */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {requirements.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 md:gap-3">
              {/* CARD with glossy navy border */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex-1"
              >
                {/* outer gradient border wrapper */}
                <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#264A70]/40 via-white to-[#264A70]/40 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
                  {/* inner card */}
                  <div className="relative rounded-3xl bg-white/90 backdrop-blur-md px-7 py-7 sm:px-9 sm:py-9 overflow-hidden">
                    {/* subtle inner navy glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#264A70]/10 via-transparent to-[#264A70]/10" />

                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 relative z-10">
                      <span className={item.highlight ? "text-[#264A70]" : ""}>
                        {item.title}
                      </span>
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Arrow between cards on md+ */}
              {idx < requirements.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <div className="h-11 w-11 rounded-full bg-[#264A70] flex items-center justify-center shadow-md">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
