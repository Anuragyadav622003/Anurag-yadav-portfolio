'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award } from 'lucide-react'
import { certifications } from '@/data/portfolio'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/5 to-background" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-warning" />
            <h2 className="text-4xl md:text-5xl font-black gradient-text">Certifications</h2>
          </div>
          <p className="text-gray-400">Professional credentials and verified milestones</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 border border-gray-800 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${cert.color} bg-opacity-10 shrink-0`}
                >
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs text-gray-500 font-mono shrink-0">{cert.year}</span>
                  </div>
                  <p className="text-primary text-sm font-medium mt-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mt-2">{cert.detail}</p>
                </div>
              </div>
              <div
                className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${cert.color} transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
