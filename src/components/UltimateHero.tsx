'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { ChevronDown, Sparkles, Cpu, Zap, MapPin, Eye } from 'lucide-react'
import LiveStats from './LiveStats'
import AIAssistant from './AIAssistant'
import { openResumeModal } from './ResumeModal'
import { heroRoles, personalInfo } from '@/data/portfolio'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

export default function UltimateHero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = heroRoles[currentRole]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < current.length) {
          setDisplayedText(current.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(current.slice(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % heroRoles.length)
        }
      }
    }, isDeleting ? 30 : 60)

    return () => clearTimeout(timeout)
  }, [currentRole, displayedText, isDeleting])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-6"
    >
      <ThreeScene />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <LiveStats />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-3 mb-6 flex-wrap justify-center"
          >
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-primary uppercase tracking-wider">
              {personalInfo.currentRole}
            </span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="flex items-center gap-1.5 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              Gurgaon, India
            </span>
            <Sparkles className="w-6 h-6 text-secondary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-glow leading-none"
          >
            <span className="gradient-text block">Anurag</span>
            <motion.span
              className="text-white block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Yadav
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
          >
            {personalInfo.title} · {personalInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light mb-12 h-16 flex items-center justify-center"
          >
            <div className="relative">
              <span className="text-gray-400 mr-3">I build</span>
              <span className="text-primary font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
                {displayedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 text-primary"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Building{' '}
            <span className="text-primary font-semibold">automation testing</span> for{' '}
            <span className="text-secondary font-semibold">mobile & web apps</span> with{' '}
            <span className="text-success font-semibold">NestJS APIs</span>,{' '}
            <span className="text-accent font-semibold">Next.js workspace UI</span>, and{' '}
            <span className="text-primary font-semibold">Appium Inspector</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, type: 'spring' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 flex-wrap"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="magnetic-button">
            <a
              href="#projects"
              className="bg-gradient-to-r from-primary to-secondary text-black px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
            >
              <Zap className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              View Projects
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="magnetic-button">
            <a
              href="#contact"
              className="glass-effect border-2 border-primary/50 text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-3 group"
            >
              <Cpu className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Get In Touch
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="magnetic-button">
            <button
              type="button"
              onClick={() => openResumeModal()}
              className="bg-gradient-to-r from-secondary/80 to-primary/80 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group border border-primary/30"
            >
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              View Resume
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3 text-gray-400 hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="text-sm font-mono tracking-widest uppercase">Discover More</span>
            <ChevronDown className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>

      <AIAssistant />
    </section>
  )
}
