'use client'

import { motion } from 'framer-motion'
import { floatAnimation, floatTransition } from '@/lib/motion'

type OrbVariant = 'default' | 'warm' | 'cool' | 'violet'

const orbSets: Record<OrbVariant, Array<{ color: string; size: string; position: string; delay: number; duration: number }>> = {
  default: [
    { color: 'from-primary/20', size: 'w-64 h-64', position: 'top-10 -left-20', delay: 0, duration: 9 },
    { color: 'from-secondary/15', size: 'w-96 h-96', position: 'bottom-10 -right-32', delay: 1.5, duration: 11 },
    { color: 'from-accent/10', size: 'w-48 h-48', position: 'top-1/2 right-1/4', delay: 0.8, duration: 8 },
  ],
  warm: [
    { color: 'from-secondary/20', size: 'w-72 h-72', position: 'top-20 -right-16', delay: 0, duration: 10 },
    { color: 'from-warning/10', size: 'w-56 h-56', position: 'bottom-16 left-10', delay: 2, duration: 9 },
  ],
  cool: [
    { color: 'from-primary/18', size: 'w-80 h-80', position: 'top-1/4 -left-24', delay: 0, duration: 10 },
    { color: 'from-success/10', size: 'w-64 h-64', position: 'bottom-1/4 -right-20', delay: 1.2, duration: 12 },
  ],
  violet: [
    { color: 'from-accent/18', size: 'w-72 h-72', position: 'top-16 left-1/3', delay: 0, duration: 9 },
    { color: 'from-primary/12', size: 'w-96 h-96', position: 'bottom-20 right-1/4', delay: 1.8, duration: 11 },
  ],
}

interface FloatingOrbsProps {
  variant?: OrbVariant
}

export default function FloatingOrbs({ variant = 'default' }: FloatingOrbsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {orbSets[variant].map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} to-transparent blur-3xl ${orb.size} ${orb.position}`}
          animate={floatAnimation}
          transition={floatTransition(orb.duration, orb.delay)}
        />
      ))}
    </div>
  )
}
