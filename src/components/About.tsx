'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Briefcase, Sparkles } from 'lucide-react'
import { personalInfo, techMarquee } from '@/data/portfolio'
import GitHubStats from './GitHubStats'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-950/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Professional Summary
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">About Me</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                {personalInfo.title}
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-12 border border-gray-800 hover:border-primary/20 transition-colors duration-500"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              {personalInfo.summary.split(' ').map((word, i) => {
                const highlights = [
                  'NestJS',
                  'React/Next.js',
                  'automation',
                  'Mozark',
                  'Appium',
                  'mobile',
                  'web',
                  'testing',
                  'system',
                  'design',
                ]
                const isHighlight = highlights.some((h) =>
                  word.toLowerCase().includes(h.toLowerCase().replace('/', ''))
                )
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.02 }}
                    className={isHighlight ? 'text-white font-medium' : ''}
                  >
                    {word}{' '}
                  </motion.span>
                )
              })}
            </p>
          </motion.div>

          {/* Tech Marquee */}
          <div className="mt-12 overflow-hidden">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="flex gap-4 w-max"
              >
                {[...techMarquee, ...techMarquee].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="px-5 py-2.5 rounded-full border border-gray-700/80 bg-card/60 text-gray-300 text-sm font-medium whitespace-nowrap hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          <GitHubStats />
        </motion.div>
      </div>
    </section>
  )
}
