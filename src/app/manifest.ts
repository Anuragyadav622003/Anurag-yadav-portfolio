import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Anurag Yadav — Full-Stack Engineer Portfolio',
    short_name: 'Anurag Yadav',
    description:
      'SDE1 @ Mozark · Automation Testing · Appium · NestJS · Next.js · Full-Stack Engineer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#00d9ff',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
