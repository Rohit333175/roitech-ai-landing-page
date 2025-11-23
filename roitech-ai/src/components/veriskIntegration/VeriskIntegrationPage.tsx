// src/veriskIntegration/VeriskIntegrationPage.tsx

import { VeriskNavbar } from "./VeriskNavbar"
import { VeriskHero } from "./VeriskHero"
import { VeriskWorkflow } from "./VeriskWorkflow"
import { VeriskRequirements } from "./VeriskRequirements"
import { VeriskSetupStepOne } from "./VeriskSetupStepOne"
import { VeriskSetupStepTwo } from "./VeriskSetupStepTwo"
import { VeriskVideoSection } from "./VeriskVideoSection"

// Re-use main page components
import { Booking } from "../../components/Booking"
import { Footer } from "../../components/Footer"

export const VeriskIntegrationPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <VeriskNavbar />
      <main className="flex-1">
        <VeriskHero />
        <VeriskWorkflow />
        <VeriskRequirements />
        <VeriskSetupStepOne />
        <VeriskSetupStepTwo />
        <VeriskVideoSection />

        {/* same booking section as main page */}
        <Booking />
      </main>

      {/* same footer as main page */}
      <Footer />
    </div>
  )
}
