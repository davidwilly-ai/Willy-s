import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SignatureProduct from '@/components/SignatureProduct'
import ShakeConfigurator from '@/components/ShakeConfigurator'
import NeonStrip from '@/components/NeonStrip'
import ProteinStatement from '@/components/ProteinStatement'
import ScienceSection from '@/components/ScienceSection'
import AthleteSection from '@/components/AthleteSection'
import ProductPalette from '@/components/ProductPalette'
import HeritageSection from '@/components/HeritageSection'
import StuttgartSection from '@/components/StuttgartSection'
import FounderSection from '@/components/FounderSection'
import QuotesSection from '@/components/QuotesSection'
import GymOwnersSection from '@/components/GymOwnersSection'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Signature Product */}
      <SignatureProduct />
      {/* 3. Configurator — directly after DOUBLE WILLY */}
      <ShakeConfigurator />
      {/* Neon accent strip */}
      <NeonStrip />
      {/* 4. Protein Statement */}
      <ProteinStatement />
      {/* 5. Science */}
      <ScienceSection />
      {/* 6. Athlete Section */}
      <AthleteSection />
      {/* 7. Product Palette */}
      <ProductPalette />
      {/* 8. Heritage / Story */}
      <HeritageSection />
      {/* 9. Stuttgart / Home Base */}
      <StuttgartSection />
      {/* 10. Founder */}
      <FounderSection />
      {/* 11. Quotes */}
      <QuotesSection />
      {/* 12. For Gym Owners */}
      <GymOwnersSection />
      {/* Footer */}
      <Footer />
      <CookieBanner />
    </main>
  )
}
