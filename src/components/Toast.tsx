'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function Toast() {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ message: string }>).detail
      setMessage(detail.message)
      setTimeout(() => setMessage(null), 2500)
    }
    window.addEventListener('show-toast', handler)
    return () => window.removeEventListener('show-toast', handler)
  }, [])

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 right-8 z-[80] flex items-center gap-2 px-4 py-3 rounded-xl glass-effect border border-success/30 text-white text-sm shadow-lg"
        >
          <CheckCircle className="w-4 h-4 text-success shrink-0" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent('show-toast', { detail: { message } }))
}
