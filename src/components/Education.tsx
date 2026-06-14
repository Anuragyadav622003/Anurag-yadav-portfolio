'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, BookOpen, Calendar } from 'lucide-react'
import { education } from '@/data/portfolio'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const item = education[0]

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/8 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
          >
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Academic Background
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">Education</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Engineering foundation in computer science — applied through internships and production work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-effect rounded-3xl border border-cyan-500/20 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-primary to-blue-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

            <div className="relative p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-cyan-500/20 shrink-0`}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-primary font-semibold text-base md:text-lg">
                      {item.field}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-sm font-semibold">
                  <Calendar className="w-4 h-4" />
                  {item.period}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <p className="text-white font-medium text-lg leading-snug">
                  {item.institution}
                </p>
                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  {item.location}
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 border-l-2 border-primary/40 pl-4">
                {item.detail}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Key Focus Areas
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((topic, i) => (
                      <motion.span
                        key={topic}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.35 + i * 0.08 }}
                        className="px-4 py-2 rounded-xl bg-gray-900/60 border border-gray-800 text-gray-300 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
