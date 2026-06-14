'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, ExternalLink, Trophy } from 'lucide-react'
import { leetCode } from '@/data/portfolio'

export default function LeetCodeBadge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 }}
      className="max-w-4xl mx-auto mt-10"
    >
      <a
        href={leetCode.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block glass-effect rounded-2xl p-5 md:p-6 border border-primary/20 hover:border-primary/40 transition-all"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-bold">LeetCode Practice</p>
              <p className="text-gray-400 text-sm">
                @{leetCode.username} · DSA & system design fundamentals
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-black text-primary">{leetCode.totalSolved}+</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-500">Solved</div>
            </div>
            <div className="flex items-center gap-2 text-primary text-sm font-semibold">
              <Trophy className="w-4 h-4" />
              Active Profile
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  )
}
