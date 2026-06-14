'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Command, Search } from 'lucide-react'
import { navSections, personalInfo } from '@/data/portfolio'
import { useShortcutLabel, openCommandPalette } from '@/lib/shortcuts'

export default function Navigation() {
  const shortcut = useShortcutLabel()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navSections.map((item) => item.id)
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-gray-800/80' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Code2 className="w-7 h-7 text-primary" />
              <span className="text-white font-bold text-lg hidden sm:block">Anurag Yadav</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-semibold uppercase tracking-wider">
                SDE1
              </span>
              {personalInfo.openToWork && (
                <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 border border-success/30 text-success text-[10px] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                  Open to Work
                </span>
              )}
            </motion.a>

            <div className="hidden md:flex items-center gap-5">
              {navSections.slice(1).map((item) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-primary' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all rounded-full ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                )
              })}
              <motion.button
                onClick={() => openCommandPalette()}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-primary/30 bg-primary/5 text-gray-300 hover:text-white hover:border-primary/60 hover:bg-primary/10 transition-all text-xs group"
                aria-label={`Open quick navigation (${shortcut})`}
              >
                <Search className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium">Quick Nav</span>
                <kbd className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-600 font-mono text-primary text-[10px] group-hover:border-primary/50">
                  {shortcut}
                </kbd>
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-black px-5 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all"
              >
                Contact
              </motion.a>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => openCommandPalette()}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-primary/30 bg-primary/5 text-primary text-xs font-medium"
                aria-label={`Open quick navigation (${shortcut})`}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Command className="w-4 h-4" />
                </motion.div>
                <span>{shortcut}</span>
              </button>
              <button
                className="text-gray-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-5 px-6">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  openCommandPalette()
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center gap-3 w-full max-w-xs px-6 py-4 rounded-2xl border border-primary/40 bg-primary/10 text-white font-semibold"
              >
                <Search className="w-5 h-5 text-primary" />
                Quick Navigate
                <kbd className="ml-auto px-2 py-1 rounded bg-gray-800 border border-gray-600 font-mono text-xs text-primary">
                  {shortcut}
                </kbd>
              </motion.button>
              <div className="w-full max-w-xs h-px bg-gray-800" />
              {navSections.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, type: 'spring', stiffness: 300, damping: 24 }}
                  whileHover={{ x: 8, color: 'var(--color-primary)' }}
                  className="text-2xl text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
