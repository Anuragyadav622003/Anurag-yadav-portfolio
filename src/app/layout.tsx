import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalEnhancements from '@/components/GlobalEnhancements'
import SkipToContent from '@/components/SkipToContent'
import { Analytics } from '@vercel/analytics/react'
import { personalInfo, socialLinks } from '@/data/portfolio'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const siteUrl = 'https://anurag-yadav-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Anurag Yadav | SDE1 Full-Stack Engineer',
  description:
    'SDE1 @ Mozark · Automation Testing · Appium · NestJS · Next.js · 150+ LeetCode',
  keywords: [
    'Full Stack',
    'SDE1',
    'NestJS',
    'React',
    'Next.js',
    'TypeScript',
    'Microservices',
    'System Design',
    'Automation Testing',
    'Mozark',
  ],
  openGraph: {
    title: 'Anurag Yadav - Full-Stack Engineer Portfolio',
    description:
      'Building automation testing platforms for mobile & web with Appium, NestJS, and Next.js',
    images: ['/AnuragYadavResume.png'],
    url: siteUrl,
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anurag Yadav | SDE1 Full-Stack Engineer',
    description: 'SDE1 @ Mozark · Automation Testing · Appium · NestJS',
    images: ['/AnuragYadavResume.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#00d9ff',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  email: personalInfo.email,
  telephone: personalInfo.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
  url: siteUrl,
  sameAs: socialLinks.map((s) => s.href),
  worksFor: {
    '@type': 'Organization',
    name: 'Mozark',
  },
  knowsAbout: [
    'NestJS',
    'React',
    'Next.js',
    'TypeScript',
    'Automation Testing',
    'Appium',
    'Web Testing',
    'Mobile Testing',
    'Microservices',
    'PostgreSQL',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-white antialiased overflow-x-hidden">
        <SkipToContent />
        <GlobalEnhancements />
        <Navigation />
        <div id="home" className="mt-20">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
