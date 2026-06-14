'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const isMobile = window.innerWidth < 768
      setVisible(isMobile && window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-black rounded-full font-bold text-sm shadow-2xl shadow-primary/30"
        >
          <Mail className="w-4 h-4" />
          Let&apos;s Talk
        </motion.a>
      )}
    </AnimatePresence>
  )
}
