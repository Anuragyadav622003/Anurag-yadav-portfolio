// // src/app/layout.tsx - UPDATED
// import type { Metadata } from 'next'
// import { Inter, JetBrains_Mono } from 'next/font/google'
// import './globals.css'
// import Navigation from '@/components/Navigation'
// import Footer from '@/components/Footer'

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter'
// })

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ['latin'],
//   variable: '--font-jetbrains-mono'
// })

// export const metadata: Metadata = {
//   title: 'Anurag Yadav | Award-Winning Full Stack & ML Engineer',
//   description: '500+ LeetCode • Production Systems • Scalable Architecture • Machine Learning • 3+ Years Experience',
//   keywords: ['Machine Learning', 'Full Stack', 'Backend', 'React', 'Next.js', 'TypeScript', 'AI', 'Three.js'],
//   openGraph: {
//     title: 'Anurag Yadav - World-Class Developer Portfolio',
//     description: 'Explore cutting-edge projects and innovative solutions in full-stack development and machine learning',
//     images: ['/og-image.jpg'],
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
//       <body className="bg-background text-white antialiased overflow-x-hidden">
//         <Navigation />
//         <div id="home" >
//           {children}
//         </div>
//         <Footer />
//       </body>
//     </html>
//   )
// }


// src/app/layout.tsx - UPDATED WITH PADDING
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Anurag Yadav | Award-Winning Full Stack & ML Engineer',
  description: '500+ LeetCode • Production Systems • Scalable Architecture • Machine Learning • 3+ Years Experience',
  keywords: ['Machine Learning', 'Full Stack', 'Backend', 'React', 'Next.js', 'TypeScript', 'AI', 'Three.js'],
  openGraph: {
    title: 'Anurag Yadav - World-Class Developer Portfolio',
    description: 'Explore cutting-edge projects and innovative solutions in full-stack development and machine learning',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-white antialiased overflow-x-hidden">
        <Navigation />
        <div id="home" className="mt-20"> {/* Added padding-top here */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}