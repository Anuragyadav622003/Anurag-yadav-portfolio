'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedDividerProps {
  color?: 'primary' | 'secondary' | 'accent'
}

const colorMap = {
  primary: 'via-primary',
  secondary: 'via-secondary',
  accent: 'via-accent',
}

export default function AnimatedDivider({ color = 'primary' }: AnimatedDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="absolute top-0 left-0 w-full h-px overflow-hidden" aria-hidden>
      <motion.div
        className={`h-full bg-gradient-to-r from-transparent ${colorMap[color]} to-transparent`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'center' }}
      />
      <motion.div
        className={`absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent ${colorMap[color]} to-transparent blur-sm`}
        initial={{ x: '-100%' }}
        animate={isInView ? { x: ['-100%', '500%'] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1.2 }}
      />
    </div>
  )
}
