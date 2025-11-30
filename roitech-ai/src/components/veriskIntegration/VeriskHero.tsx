export const VeriskHero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-40 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]
        bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)]
        [background-size:18px_18px]"
      />

      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE — TEXT */}
          <div>
            {/* Glossy badge */}
            <span className="inline-flex items-center gap-3 rounded-full p-[4px]
              bg-gradient-to-r from-blue-600/70 via-teal-500/70 to-orange-500/70">
              <span className="inline-flex items-center gap-3 rounded-full 
                bg-white/85 backdrop-blur px-8 py-3 shadow-md ring-1 ring-inset ring-white/60">
                <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r
                  from-blue-700 via-sky-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
                  Roitech + Verisk™ Integration
                </span>
              </span>
            </span>

            {/* NEW TAGLINE AS MAIN H1 */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              One workflow—{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                from capture to estimate
              </span>{" "}
              to XactAnalysis.
            </h1>

            {/* ORIGINAL DESCRIPTION PARAGRAPH (KEPT, WITH XactAnalysis) */}
            <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-xl leading-relaxed">
              Connect{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-700 via-teal-600 to-green-500
                bg-clip-text text-transparent">
                Susan AI
              </span>{" "}
              directly to your{" "}
              <span className="font-black text-slate-900">
                XactAnalysis®
              </span>{" "}
              workflow so notes, photos, sketches, and checklists flow seamlessly into
              precise, review-ready scopes—no duplication, no manual cleanup.
            </p>
          </div>

          {/* RIGHT SIDE — MOCKUP */}
          <div className="relative mt-10 lg:mt-0" aria-label="Verisk Integration Product Preview">
            {/* glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem]
              bg-gradient-to-tr from-blue-300/40 via-teal-300/30 to-emerald-200/20 blur-2xl" />

            <div className="relative rounded-[2rem] bg-white/90 backdrop-blur
              border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.15)] p-6 h-[520px]">

              {/* title */}
              <div className="text-lg sm:text-xl font-bold text-slate-900">
                Verisk Integration Preview
              </div>

              {/* top 3 fields */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Import Type</div>
                  <div className="mt-1 font-semibold text-slate-900">Sketch</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Sync Mode</div>
                  <div className="mt-1 font-semibold text-slate-900">Auto</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">System</div>
                  <div className="mt-1 font-semibold text-slate-900">XactAnalysis®</div>
                </div>
              </div>

              {/* scope preview */}
              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">Scope Preview</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Extract measurements & room layouts from Verisk sketch</li>
                  <li>• Align tasks to XactAnalysis® codes</li>
                  <li>• Generate consistent line items with justifications</li>
                </ul>
              </div>

              {/* Import Workflow card */}
              <div className="absolute -bottom-10 -left-6 w-[88%] rotate-[-3deg]">
                <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-4 shadow">
                  <div className="text-sm font-semibold text-slate-900">Import Workflow</div>
                  <div className="mt-2 space-y-2 text-sm text-slate-700">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      Sketch uploaded from Verisk
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      Rooms & measurements detected
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      Checklist matched to workflow
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                      Tasks grouped for estimate
                    </div>
                  </div>
                </div>
              </div>

              {/* Export card */}
              <div className="absolute -bottom-20 -right-10 w-[72%] rotate-2">
                <div className="rounded-2xl border border-slate-200 bg-white/85 backdrop-blur p-4 shadow">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">Export</div>
                    <span className="text-xs text-slate-500">XactAnalysis® / PDF</span>
                  </div>
                  <div className="mt-2 h-16 rounded-lg border border-dashed border-slate-300 grid place-items-center text-xs text-slate-500">
                    Drag to carrier portal
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
