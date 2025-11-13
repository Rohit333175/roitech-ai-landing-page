import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ForRestorationFirms } from "./ForRestorationFirms"
import { ForInsuranceCarriers } from "./ForInsuranceCarriers"
import { Wrench, ShieldCheck } from "lucide-react"

type TabKey = "restoration" | "insurance"

export const AudienceSwitcher: React.FC = () => {
  const [tab, setTab] = React.useState<TabKey>("restoration")

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: "restoration", label: "For Restoration Firms", icon: <Wrench className="w-4 h-4" /> },
    { key: "insurance",   label: "For Insurance Carriers", icon: <ShieldCheck className="w-4 h-4" /> },
  ]

  return (
    <section id="audiences" className="relative isolate overflow-hidden py-28">
      {/* soft background */}
      <div className="pointer-events-none absolute -top-24 -right-28 h-[24rem] w-[24rem] rounded-full bg-gradient-to-br from-indigo-300/20 via-fuchsia-300/20 to-blue-300/20 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-teal-300/20 via-emerald-300/20 to-sky-300/20 blur-3xl -z-10" />
      <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Target Segments
          </h2>
          <div className="mt-4 relative mx-auto w-56 h-[2px] rounded-full bg-gradient-to-r from-violet-500/60 via-fuchsia-500/60 to-indigo-500/60 overflow-hidden">
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 h-[6px] w-10 rounded-full bg-white/70 blur-[2px] mix-blend-screen"
              initial={{ x: -40, opacity: 0.7 }}
              animate={{ x: 240 }}
              transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
            />
          </div>
        </div>

        {/* Segmented control */}
        <div
          role="tablist"
          aria-label="Select audience"
          className="relative mx-auto w-full sm:w-[560px] rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-1 shadow-sm"
        >
          <div className="grid grid-cols-2 relative">
            {/* Animated pill */}
            <motion.span
              layout
              className="absolute top-1 bottom-1 w-1/2 rounded-xl bg-slate-900/90"
              initial={false}
              animate={{ left: tab === "restoration" ? "4px" : "calc(50% + 4px)" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            {tabs.map(({ key, label, icon }) => {
              const active = tab === key
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${key}`}
                  id={`tab-${key}`}
                  onClick={() => setTab(key)}
                  className={`relative z-10 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm sm:text-base transition-colors
                    ${active ? "text-white" : "text-slate-700 hover:text-slate-900"}`}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content area with animated switch */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {tab === "restoration" ? (
              <motion.div
                key="restoration"
                id="panel-restoration"
                role="tabpanel"
                aria-labelledby="tab-restoration"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <ForRestorationFirms />
              </motion.div>
            ) : (
              <motion.div
                key="insurance"
                id="panel-insurance"
                role="tabpanel"
                aria-labelledby="tab-insurance"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <ForInsuranceCarriers />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
