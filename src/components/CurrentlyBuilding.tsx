'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Sparkles, Code2, Smartphone, Bot } from 'lucide-react'
import { currentProject } from '@/data/portfolio'

const highlightIcons = [Code2, Smartphone, Bot, Rocket]

export default function CurrentlyBuilding() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-background to-violet-950/20" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-effect rounded-3xl border border-indigo-500/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-primary to-violet-500" />

            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                    {currentProject.status}
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    Currently Building:{' '}
                    <span className="gradient-text">{currentProject.title}</span>
                  </h2>
                  <p className="text-primary font-semibold">
                    {currentProject.role} @ {currentProject.company}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="shrink-0 p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 self-start"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
                {currentProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {currentProject.highlights.map((item, i) => {
                  const Icon = highlightIcons[i] ?? Rocket
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800"
                    >
                      <Icon className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
