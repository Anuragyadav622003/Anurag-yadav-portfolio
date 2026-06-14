import type { Variants, Transition } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
}

export const softSpring: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
}

export const floatAnimation = {
  y: [0, -24, 0],
  x: [0, 12, 0],
  scale: [1, 1.08, 1],
}

export const floatTransition = (duration = 8, delay = 0) => ({
  duration,
  repeat: Infinity,
  ease: 'easeInOut' as const,
  delay,
})
