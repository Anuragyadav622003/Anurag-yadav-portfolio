'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Mail, FileDown } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { openResumeModal } from './ResumeModal'

export default function HireCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto glass-effect rounded-3xl p-10 md:p-14 border border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 mb-6"
            >
              <Rocket className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Let&apos;s Build Something{' '}
              <span className="gradient-text">Great Together</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              {personalInfo.openToWork
                ? "I'm open to full-stack engineering roles, freelance projects, and technical collaborations. Let's talk about how I can contribute to your team."
                : "Interested in working together? I'd love to hear about your project or opportunity."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-black px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openResumeModal()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:border-primary/50 transition-all font-semibold"
              >
                <FileDown className="w-5 h-5" />
                View Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
