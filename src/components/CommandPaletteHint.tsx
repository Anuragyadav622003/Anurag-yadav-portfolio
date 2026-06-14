'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useShortcutLabel, openCommandPalette } from '@/lib/shortcuts'

const STORAGE_KEY = 'command-palette-hint-dismissed'

export default function CommandPaletteHint() {
  const shortcut = useShortcutLabel()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const dismiss = () => {
      setVisible(false)
      localStorage.setItem(STORAGE_KEY, 'true')
    }
    window.addEventListener('toggle-command-palette', dismiss)
    return () => window.removeEventListener('toggle-command-palette', dismiss)
  }, [])

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="fixed top-24 right-4 md:right-8 z-50 max-w-sm"
        >
          <div className="glass-effect border border-primary/40 rounded-2xl p-4 shadow-xl shadow-primary/10">
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3 pr-6">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Quick Navigation</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">
                  Jump to sections, open GitHub/LinkedIn, or download resume — click{' '}
                  <strong className="text-gray-300">Quick Nav</strong> in the navbar or press:
                </p>
                <button
                  onClick={() => {
                    openCommandPalette()
                    dismiss()
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                >
                  Open Quick Nav
                  <kbd className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-600 font-mono">
                    {shortcut}
                  </kbd>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
