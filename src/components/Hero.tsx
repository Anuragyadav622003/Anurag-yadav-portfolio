// src/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown, Code2, Database, Brain } from 'lucide-react'

const roles = [
  'Software Engineer',
  'Machine Learning Engineer', 
  'Backend Developer',
  'Problem Solver'
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[currentRole]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < current.length) {
          setDisplayedText(current.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(current.slice(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentRole, displayedText, isDeleting])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/20 to-background" />
      
      <div className="absolute inset-0">
        <FloatingIcon icon={<Code2 />} delay={0} />
        <FloatingIcon icon={<Database />} delay={0.5} />
        <FloatingIcon icon={<Brain />} delay={1} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-8"
        >
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm font-mono">500+ LeetCode Problems Solved</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Anurag</span>
          <br />
          <span className="text-white">Yadav</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl font-light mb-8 h-12"
        >
          <span className="text-gray-400">I'm a </span>
          <span className="text-primary font-semibold">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Building scalable systems and intelligent solutions with 
          <span className="text-primary"> 500+ LeetCode mastery</span>, 
          production-grade architecture, and cutting-edge machine learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center"
        >
          <motion.div
            className="magnetic-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects" className="bg-primary text-black px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors block">
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            className="magnetic-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="border border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/10 transition-colors block">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

function FloatingIcon({ icon, delay }: { icon: React.ReactNode; delay: number }) {
  return (
    <motion.div
      className="absolute text-primary/20"
      initial={{ opacity: 0, y: 0 }}
      animate={{ 
        opacity: [0.3, 0.8, 0.3],
        y: [-20, 20, -20],
        x: [0, 50, 0]
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {icon}
    </motion.div>
  )
}