/* src/components/CompanyOverview.tsx */
import Bullseye from '../assets/bullseye.png'
import { ShieldCheck, Eye, Image, Cog, Rocket, CheckSquare } from 'lucide-react'
import { motion } from "framer-motion"

export const CompanyOverview = () => {
  // Right-side badges — replaced with your three points
  const highlights = [
    {
      icon: CheckSquare,
      title: 'Accurate Scopes',
      desc: 'Auto-generates detailed, phase-wise work plans aligned with industry standards.',
    },
    {
      icon: Cog,
      title: 'Consistent Estimates',
      desc: 'Ensures every estimator, branch, and project follows the same logic — no repetition or missed codes.',
    },
    {
      icon: Rocket,
      title: 'Faster Turnaround',
      desc: 'Reduces time-to-estimate from hours to minutes, improving claim cycle speed and customer satisfaction.',
    },
  ]

  const audience = [{ label: 'Insurers' }, { label: 'TPAs' }, { label: 'Contractors' }]

  const confidence = [
    {
      icon: Image,
      title: 'Works with notes, photos, sketches, and inspection forms',
      iconBg: 'bg-teal-600',
      gradient: 'from-teal-500 via-emerald-400 to-cyan-400',
    },
    {
      icon: Eye,
      title: 'Designed for reviewer transparency and auditability',
      iconBg: 'bg-blue-600',
      gradient: 'from-blue-500 via-sky-400 to-teal-400',
    },
    {
      icon: ShieldCheck,
      title: 'Secured with role-based access controls',
      iconBg: 'bg-fuchsia-600',
      gradient: 'from-indigo-500 via-purple-500 to-fuchsia-500',
    },
  ]

  return (
    // 1. Removed background gradient from <section>
    <section id="about" className="relative py-20 overflow-hidden">
      
      {/* 2. Background gradient, all the way in the back */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* 3. Orbs, on top of gradient (but behind dots) */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl -z-20" />
      <div className="pointer-events-none absolute -bottom-16 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl -z-20" />
      
      {/* 4. Dot grid, on top of orbs (but behind content) */}
      <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px]" />

      {/* 5. Content wrapper, 'relative' places it on top of all negative z-index elements */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-10"
        >
          What is <span className="font-company">Roitech</span>?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-12 gap-10 items-stretch"
        >
          {/* Mission — glossy border (uniform on all sides) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[20px] h-full">
              {/* glossy glow ring */}
              <div
                className="absolute -inset-[2px] rounded-[22px]
                           bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500
                           opacity-80 blur-[10px]"
                aria-hidden
              />
              {/* inner card */}
              <div className="relative rounded-[20px] bg-white/90 backdrop-blur border border-white/60 shadow-xl overflow-hidden h-full">
                {/* subtle interior texture */}
                <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(59,130,246,0.06),transparent_60%)]" />
                <div className="relative p-8 md:p-10 text-center">
                  {/* PNG emblem (no background behind image) */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <img
                      src={Bullseye}
                      alt="Target emblem"
                      className="h-10 w-10 object-contain select-none"
                      draggable={false}
                    />
                    <span className="text-2xl md:text-3xl font-bold text-slate-900">Our Mission</span>
                  </div>

                  <h3 className="text-[1.9rem] md:text-[2.25rem] font-bold text-slate-900 leading-tight mb-4">
                    Simplify claims estimating & documentation with{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      intelligent automation
                    </span>
                    .
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    <span className="font-company font-semibold">Roitech</span> builds automation and intelligence
                    tools for the property insurance and restoration industry. Our platform{' '}
                    <span className="font-semibold">Susan AI</span> helps teams transform field notes, photos, sketches,
                    and inspection details into accurate, auditable estimates — in a workflow designed for reviewers and
                    approvers.
                  </p>

                  {/* Audience badges */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {audience.map((a, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm"
                      >
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600" />
                        {a.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights — three new cards, larger type, tighter spacing */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 opacity-60 group-hover:scale-125 transition-transform" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 text-white shadow-sm">
                      <h.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-semibold text-slate-900 mb-1">{h.title}</h3>
                      <p className="text-base text-slate-600 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Confidence as cards with icons/colors */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {confidence.map((c, i) => (
              <div
                key={i}
                className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-slate-200 to-slate-100 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${c.gradient} blur-[2px]`}
                />
                <div className="relative rounded-2xl bg-white p-6 h-full border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${c.iconBg}`}>
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-[1.05rem] md:text-xl font-semibold text-slate-900 leading-snug">{c.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}