// // src/app/page.tsx
// import Hero from '@/components/Hero'
// import Projects from '@/components/Projects'
// import Skills from '@/components/Skills'
// import Experience from '@/components/Experience'
// import MLVisualizations from '@/components/MLVisualizations'

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Hero />
//       <Projects />
//       <Skills />
//       <Experience />
//       <MLVisualizations />
//     </main>
//   )
// }


// src/app/page.tsx - COMPLETE
import UltimateHero from '@/components/UltimateHero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import MLVisualizations from '@/components/MLVisualizations'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <UltimateHero />
      <Projects />
      <Skills />
      <Experience />
      <MLVisualizations />
      <Contact />
    </main>
  )
}