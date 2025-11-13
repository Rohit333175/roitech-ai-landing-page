import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import RoitechLogo from '../assets/Roitech_Logos/roitech_logo_header.png'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const smoothNav = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.querySelector(hash) as HTMLElement | null
    if (el) {
      e.preventDefault()
      setOpen(false)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', hash)
    }
  }

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50" role="navigation" aria-label="Main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-1.5" aria-label="Roitech AI Home">
            <img src={RoitechLogo} alt="Roitech AI Logo" className="h-11 w-auto object-contain select-none" draggable={false} />
            <span className="font-company text-[1.2rem] leading-none font-semibold text-slate-900"></span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Our Product → SusanAISpotlight section */}
            <a href="#our-product" onClick={smoothNav('#our-product')} className="text-slate-600 hover:text-blue-600 transition-colors">
              Our Product
            </a>
            <a href="#results" onClick={smoothNav('#results')} className="text-slate-600 hover:text-blue-600 transition-colors">
              Results
            </a>
            <a href="#about" onClick={smoothNav('#about')} className="text-slate-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a
              href="https://susanintelligence.com/"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium"
              aria-label="Open Susan AI"
              target="_blank" rel="noopener noreferrer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Susan AI</span>
            </a>
          </div>

          {/* Mobile trigger */}
          <button className="md:hidden p-2 rounded-lg border border-slate-200" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-slate-100 space-y-2">
            <a href="#our-product" onClick={smoothNav('#our-product')} className="block px-2 py-2 text-slate-700">Our Product</a>
            <a href="#results" onClick={smoothNav('#results')} className="block px-2 py-2 text-slate-700">Results</a>
            <a href="#about" onClick={smoothNav('#about')} className="block px-2 py-2 text-slate-700">About</a>
            <a
              href="https://susanintelligence.com/"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
              aria-label="Open Susan AI"
              target="_blank" rel="noopener noreferrer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Susan AI</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
