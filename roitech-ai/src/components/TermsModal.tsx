/* src/components/TermsModal.tsx */
export const TermsModal = () => {
  // Opens when URL hash === #terms (pure CSS :target)
  return (
    <div
      id="terms"
      className="fixed inset-0 z-[100] hidden items-center justify-center bg-slate-900/70 backdrop-blur
                 target:flex"
      aria-labelledby="terms-title"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-[95vw] max-w-5xl h-[85vh] rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-white/80 backdrop-blur">
          <h2 id="terms-title" className="text-slate-900 text-lg font-semibold">
            Roitech – Terms &amp; Conditions
          </h2>
          <a
            href="#!"
            aria-label="Close terms"
            className="rounded-lg px-3 py-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
          >
            Close
          </a>
        </div>

        {/* PDF viewer */}
        <div className="h-[calc(85vh-56px)] bg-slate-50">
          <iframe
            src="/legal/Susan AI Terms of Service.pdf#view=FitH"
            title="Roitech Terms and Conditions"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
