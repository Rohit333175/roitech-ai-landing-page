import RoitechLogo from "../../assets/Roitech_Logos/roitech_logo_header.png"
import VeriskLogo from "../../assets/Roitech_Logos/Verisk_Logo.png"

export const VeriskNavbar = () => {
  const handleBookDemo = () => {
  const el = document.querySelector("#book") as HTMLElement | null
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  } else {
    // fallback to main page booking if not found
    window.location.href = "/#book"
  }
}

  return (
    <nav
      className="
        relative
        bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50
        backdrop-blur-sm border-b border-slate-200 top-0 z-50
      "
      aria-label="Verisk integration main"
    >
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]
        bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1.2px)]
        [background-size:18px_18px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logos */}
          <a href="/" className="flex items-center gap-4">
            <img
              src={RoitechLogo}
              className="h-10 w-auto object-contain"
              alt="Roitech logo"
              draggable={false}
            />
            <img
              src={VeriskLogo}
              className="h-12 w-auto object-contain opacity-95"
              alt="Verisk logo"
              draggable={false}
            />
          </a>

          {/* Bigger buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleBookDemo}
              className="
                hidden sm:inline-flex items-center gap-2 rounded-xl
                border border-slate-300 px-6 py-3 text-base font-semibold 
                text-slate-700 hover:bg-white/60 transition-colors
              "
            >
              Book demo
            </button>

            <a
              href="https://susanintelligence.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center rounded-xl
                bg-gradient-to-r from-blue-600 to-teal-600
                px-6 py-3 text-base font-semibold text-white shadow
                hover:shadow-md transition-all
              "
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
