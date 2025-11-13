import { motion } from 'framer-motion'
import { Repeat, Clock, Brain, FileWarning } from 'lucide-react'

export const IndustryChallenge = () => {
  const challenges = [
    { icon: <FileWarning className="w-5 h-5 text-rose-500" />, text: "Inconsistent estimates across teams and adjusters." },
    { icon: <Repeat className="w-5 h-5 text-rose-500" />, text: "Lost revenue from missed items and duplicate codes." },
    { icon: <Clock className="w-5 h-5 text-rose-500" />, text: "Long back-and-forth with carriers on supplements." },
    { icon: <Brain className="w-5 h-5 text-rose-500" />, text: "Reliance on overworked senior estimators." },
  ]

  return (
    <section
      id="industry-challenge"
      className="relative isolate py-28 overflow-hidden"
      aria-labelledby="industry-challenge-heading"
    >
      {/* Mesh gradient blobs — smaller, subtler, pushed off-canvas */}
      <div className="pointer-events-none absolute -top-12 -left-20 lg:-left-28 h-[16rem] w-[16rem] sm:h-[20rem] sm:w-[20rem] md:h-[22rem] md:w-[22rem] rounded-full bg-gradient-to-br from-rose-400/30 to-orange-300/30 blur-2xl -z-10" />
      <div className="pointer-events-none absolute -bottom-12 -right-20 lg:-right-28 h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem] md:h-[20rem] md:w-[20rem] rounded-full bg-gradient-to-tr from-amber-300/30 to-rose-300/30 blur-2xl -z-10" />

      {/* Subtle dotted grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)] [background-size:18px_18px]" />
      {/* Noise film */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.75%27 numOctaves=%272%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.15%27/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-14"
>
  <h2
    id="industry-challenge-heading"
    className="text-base md:text-lg font-semibold tracking-[0.18em] text-rose-600 uppercase"
  >
    The Industry Challenge
  </h2>

  {/* light shiny separator */}
  <div className="mt-3 relative mx-auto w-48 h-[2px] rounded-full bg-gradient-to-r from-rose-500/60 via-orange-400/60 to-amber-400/60 overflow-hidden">
    <motion.span
      className="absolute top-1/2 -translate-y-1/2 h-[6px] w-10 rounded-full bg-white/70 blur-[2px] mix-blend-screen"
      initial={{ x: -40, opacity: 0.7 }}
      animate={{ x: 220 }}
      transition={{ duration: 2.8, ease: 'linear', repeat: Infinity }}
      aria-hidden="true"
    />
  </div>

  <h3 className="mt-6 text-4xl sm:text-5xl font-bold text-slate-900">
    Estimation is{" "}
    <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
      broken
    </span>
  </h3>
  <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
    Everyday inefficiencies drain productivity and revenue across restoration teams and carrier partners.
  </p>
</motion.div>


        {/* Bullets */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          aria-label="Key problems in restoration estimating"
        >
          {challenges.map((item, i) => (
            <motion.li
              key={i}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="group relative rounded-2xl p-5 md:p-6 bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_6px_20px_rgba(15,23,42,0.08)] hover:shadow-[0_10px_26px_rgba(15,23,42,0.12)] transition-shadow"
            >
              <span className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-rose-500 via-orange-400 to-amber-400 opacity-70" />
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <p className="text-slate-800 text-base leading-relaxed">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Pull-quote — icon removed, premium highlight */}
        <motion.figure
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="p-[1.2px] rounded-2xl bg-gradient-to-r from-rose-500/70 via-orange-400/70 to-amber-400/70">
              <div className="rounded-2xl bg-white/80 backdrop-blur-md px-6 py-6 md:px-10 md:py-8">
                <blockquote className="mt-0">
                  <p className="text-xl md:text-2xl italic text-slate-900 leading-relaxed text-center">
                    “Every hour spent reworking an estimate is an hour not spent restoring a property.”
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-30 bg-gradient-to-r from-rose-400 via-orange-300 to-amber-300" />
          </div>
        </motion.figure>
      </div>
    </section>
  )
}
