import { motion } from "framer-motion"

export const VeriskVideoSection = () => {
  return (
    <section
      id="verisk-video"
      className="relative isolate overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Soft orange corner lights */}
      <div className="pointer-events-none absolute -top-32 -left-28 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-32 -right-28 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl -z-10" />

      {/* subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04] -z-20 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_1.2px)] [background-size:18px_18px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900"
        >
          See how Susan AI works with Verisk
        </motion.h2>

        {/* Underline */}
        <div className="mt-4 w-48 md:w-56 h-[3px] mx-auto rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500" />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          A quick walkthrough of how Susan AI automatically syncs field data, sketches, 
          and structured scope details directly into Xactimate®.
        </motion.p>

        {/* VIDEO CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="relative mt-16 mx-auto max-w-4xl"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] 
                          bg-gradient-to-tr from-orange-200/40 via-amber-100/40 to-orange-200/40 
                          blur-2xl" />

          {/* Main video frame */}
          <div className="relative rounded-[2.5rem] bg-white border border-slate-300 shadow-[0_22px_55px_rgba(15,23,42,0.2)] overflow-hidden p-4 sm:p-6">
            {/* ---- PLACEHOLDER / DROP YOUR VIDEO HERE ---- */}

            {/* Replace this <div> with: 
                <video controls src="..." className="w-full h-full rounded-2xl" />
                or YouTube embed or ReactPlayer */}
            <div
              className="aspect-video w-full bg-slate-100 rounded-2xl border border-slate-200 
                          grid place-items-center text-slate-500 text-lg sm:text-xl"
            >
              Video will go here
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
