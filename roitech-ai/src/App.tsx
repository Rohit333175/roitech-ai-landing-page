/* src/App.tsx */

// Import your new components
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CompanyOverview } from './components/CompanyOverview'
import { SusanAISpotlight } from './components/SusanAISpotlight'
import { IndustryChallenge } from './components/IndustryChallenge'
import { WhoWeServe } from './components/WhomWeServe'
import { Results } from './components/Results'
import { Integrations } from './components/Integrations'
import { WhyRoitech } from './components/WhyRoitech'
import { Security } from './components/Security'
import { Booking } from './components/Booking'
import { Footer } from './components/Footer'
import { AudienceSwitcher } from "./components/AudienceSwitcher"
import { TermsModal } from "./components/TermsModal"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <IndustryChallenge />
        <SusanAISpotlight />
        <Integrations />
        <Results />
        <WhoWeServe />
        <AudienceSwitcher />
        <WhyRoitech />
        <Security />
        <Booking />
        <TermsModal />
      </main>
      <Footer />
    </div>
  )
}

export default App
