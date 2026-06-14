'use client'

import { motion } from 'framer-motion'
import { Share2 } from 'lucide-react'
import { showToast } from './Toast'

export default function ShareButton() {
  const handleShare = async () => {
    const url = 'https://anurag-yadav-portfolio.vercel.app'
    const data = {
      title: 'Anurag Yadav — Full-Stack Engineer',
      text: 'Check out my portfolio!',
      url,
    }

    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url)
      showToast('Portfolio link copied!')
    }
  }

  return (
    <motion.button
      onClick={handleShare}
      whileHover={{ scale: 1.1, y: -2, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 bg-card rounded-full border border-gray-800 text-gray-400 hover:text-primary hover:border-primary/30 transition-colors duration-300"
      aria-label="Share portfolio"
    >
      <Share2 className="w-4 h-4" />
    </motion.button>
  )
}
