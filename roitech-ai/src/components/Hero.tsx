/* src/components/Hero.tsx */
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from "framer-motion"

export const Hero = () => {
  const scrollToBook = () => {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 pt-20 pb-32">
      {/* UPDATED: Replaced 'bg-grid-slate-100' with the dot grid style 
        from your other sections, while keeping the mask.
      */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* UPDATED: Wrapped main content in motion.div for animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Smarter, Faster, and{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Fairer
            </span>{' '}
            Restoration Estimation
          </h1>

          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            Powered by <span className="font-semibold text-slate-800">Susan AI</span> — built by <span className="font-company font-semibold">Roitech</span>, the leader in intelligent restoration automation.
          </p>

          <div className="flex justify-center mb-10">
            <a
              href="https://susanintelligence.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Susan AI"
              className="group inline-block"
            >
              <span className="inline-flex items-center gap-3 rounded-full p-[3px] bg-gradient-to-r from-blue-600/70 via-teal-500/70 to-orange-500/70">
                <span className="inline-flex items-center gap-3 rounded-full bg-white/85 backdrop-blur px-6 py-3 shadow-md ring-1 ring-inset ring-white/60">
                  {/* Removed the green dot + ping */}
                  <span className="inline-flex items-center gap-2 text-slate-800">
                    <Sparkles className="w-5 h-5 text-blue-600 transition-transform group-hover:rotate-6" />
                    <span className="font-semibold text-lg">Susan&nbsp;AI</span>
                  </span>
                  <span className="mx-2 h-6 w-px bg-slate-300" aria-hidden="true"></span>
                  <span className="text-base text-slate-700">Estimating Intelligence</span>
                </span>
              </span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToBook}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2 group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}