'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import {
  Calendar,
  MapPin,
  Award,
  ChevronDown,
  ExternalLink,
  Star,
  Briefcase,
} from 'lucide-react'
import { experiences } from '@/data/portfolio'

type FilterType = 'all' | 'work' | 'achievement'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedCard, setExpandedCard] = useState<string | null>(experiences[0].company)
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredExperiences = useMemo(() => {
    if (activeFilter === 'all') return experiences
    if (activeFilter === 'work') return experiences.filter((e) => e.type === 'work')
    return experiences.filter((e) => e.type === 'achievement')
  }, [activeFilter])

  const toggleCard = (company: string) => {
    setExpandedCard(expandedCard === company ? null : company)
  }

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-900/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-2 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
            <h2 className="text-5xl md:text-6xl font-black gradient-text">Experience</h2>
            <div className="w-2 h-12 bg-gradient-to-b from-secondary to-primary rounded-full" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From startup internships to SDE1 — building scalable systems with real production impact
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {(['all', 'work', 'achievement'] as FilterType[]).map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 capitalize ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary to-secondary text-black'
                    : 'glass-effect border border-gray-700 text-gray-300 hover:border-primary/50'
                }`}
              >
                {filter === 'all' ? 'All' : filter === 'work' ? 'Work' : 'Achievements'}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.005, y: -2 }}
                  className="cursor-pointer"
                  onClick={() => toggleCard(exp.company)}
                >
                  <div
                    className={`glass-effect rounded-3xl border transition-all duration-500 overflow-hidden group ${
                      exp.current
                        ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                        : 'border-gray-800 hover:border-primary/30'
                    }`}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`p-3 rounded-2xl bg-gradient-to-r ${exp.color} text-2xl shrink-0`}
                            >
                              {exp.companyLogo}
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                  {exp.role}
                                </h3>
                                {exp.current && (
                                  <span className="flex items-center gap-1 px-2.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold animate-pulse">
                                    <Briefcase className="w-3 h-3" />
                                    Current
                                  </span>
                                )}
                                {exp.type === 'achievement' && (
                                  <span className="flex items-center gap-1 px-2.5 py-0.5 bg-warning/20 text-warning rounded-full text-xs">
                                    <Award className="w-3 h-3" />
                                    Achievement
                                  </span>
                                )}
                              </div>
                              <p className="text-primary font-semibold">{exp.company}</p>
                              <div className="flex items-center gap-4 text-gray-400 text-sm mt-2 flex-wrap">
                                <span className="flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {exp.period}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5" />
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-300 leading-relaxed mb-5">{exp.description}</p>

                          <div className="grid grid-cols-3 gap-3 mb-5">
                            {exp.metrics.map((metric, i) => (
                              <div
                                key={i}
                                className="text-center p-3 bg-gray-800/40 rounded-xl border border-gray-700/50"
                              >
                                <div className="text-lg font-bold text-primary">{metric.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 bg-gray-800/60 rounded-lg text-xs text-gray-300 border border-gray-700"
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 5 && (
                              <span className="px-3 py-1.5 text-xs text-gray-500">
                                +{exp.technologies.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: expandedCard === exp.company ? 180 : 0 }}
                          className="shrink-0 self-start"
                        >
                          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedCard === exp.company && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-800 overflow-hidden"
                        >
                          <div className="p-6 md:p-8 bg-gray-900/40">
                            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              Key Achievements
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {exp.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                                >
                                  <div
                                    className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                                      exp.type === 'achievement' ? 'bg-warning' : 'bg-primary'
                                    }`}
                                  />
                                  <span className="text-gray-300 text-sm leading-relaxed">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                            <div className="mt-6">
                              <h4 className="font-semibold text-white mb-3 text-sm">All Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs text-gray-300 border border-gray-600"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            Let&apos;s Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
