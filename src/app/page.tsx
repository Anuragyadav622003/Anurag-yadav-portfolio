import UltimateHero from '@/components/UltimateHero'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Certifications from '@/components/Certifications'
import FAQ from '@/components/FAQ'
import HireCTA from '@/components/HireCTA'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <UltimateHero />
      <CurrentlyBuilding />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <FAQ />
      <HireCTA />
      <Contact />
    </main>
  )
}
