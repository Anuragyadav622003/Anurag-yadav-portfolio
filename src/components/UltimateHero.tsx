// src/components/UltimateHero.tsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { ChevronDown, Sparkles, Cpu, Zap } from 'lucide-react'
import ThreeScene from './ThreeScene'
import LiveStats from './LiveStats'
import AIAssistant from './AIAssistant'

const roles = [
  'Full Stack Architect',
  'Machine Learning Engineer', 
  'Backend Specialist',
  'AI Researcher',
  'System Designer'
]

export default function UltimateHero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = roles[currentRole]
    
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
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 30 : 60)

    return () => clearTimeout(timeout)
  }, [currentRole, displayedText, isDeleting])

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeScene />

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enhanced Live Stats */}
        <LiveStats />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary uppercase tracking-wider">
              Award-Winning Developer
            </span>
            <Sparkles className="w-8 h-8 text-secondary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 text-glow leading-none"
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

          {/* Enhanced Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-12 h-20 flex items-center justify-center"
          >
            <div className="relative">
              <span className="text-gray-400 mr-4">I build</span>
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
            className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Creating <span className="text-primary font-semibold">digital experiences</span> that 
            blend <span className="text-secondary font-semibold">cutting-edge technology</span> with 
            <span className="text-success font-semibold"> elegant design</span> and 
            <span className="text-accent font-semibold"> scalable architecture</span>.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic-button"
          >
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-primary to-secondary text-black px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4 group"
            >
              <Zap className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              Explore My Universe
              <Zap className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-500" />
            </a>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic-button"
          >
            <a 
              href="#contact" 
              className="glass-effect border-2 border-primary/50 text-primary px-12 py-6 rounded-2xl font-bold text-xl hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-4 group"
            >
              <Cpu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              Initiate Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3 text-gray-400 hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="text-sm font-mono tracking-widest uppercase">Discover More</span>
            <ChevronDown className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* AI Assistant */}
      <AIAssistant />
    </section>
  )
}