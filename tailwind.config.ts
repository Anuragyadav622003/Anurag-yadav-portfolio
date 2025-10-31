// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d9ff',
        secondary: '#ff2a6d', 
        accent: '#8a2be2',
        success: '#00ff88',
        warning: '#ffaa00',
        background: '#0a0a0a',
        card: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
export default config