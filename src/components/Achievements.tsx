'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Trophy, Star, Zap } from 'lucide-react'
import { achievements } from '@/data/portfolio'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-violet-900/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Trophy className="w-8 h-8 text-warning" />
            <h2 className="text-5xl md:text-6xl font-black gradient-text">Achievements</h2>
            <Award className="w-8 h-8 text-primary" />
          </motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Milestones, certifications, and engineering impact across production systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7, type: 'spring' }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-effect rounded-3xl p-8 border border-gray-800 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className={`text-4xl p-4 rounded-2xl bg-gradient-to-r ${item.color} bg-opacity-10`}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-gray-500 text-sm font-mono">{item.year}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-primary font-semibold mb-4">{item.subtitle}</p>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>

              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ delay: 0.5 + index * 0.15, duration: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Impact metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-3xl p-8 mt-12 border border-primary/20 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Star className="w-5 h-5" />, value: 'SDE1', label: 'Current Role' },
              { icon: <Zap className="w-5 h-5" />, value: '40%', label: 'API Speed Gain' },
              { icon: <Award className="w-5 h-5" />, value: '85%+', label: 'Test Coverage' },
              { icon: <Trophy className="w-5 h-5" />, value: '150+', label: 'LeetCode' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  {stat.icon}
                  <span className="text-3xl font-black text-white">{stat.value}</span>
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
