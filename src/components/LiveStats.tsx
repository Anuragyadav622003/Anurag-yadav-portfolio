'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, TrendingUp, Award, Rocket, TestTube, Layers } from 'lucide-react'
import { liveStats, leetCode } from '@/data/portfolio'

export default function LiveStats() {
  const [stats, setStats] = useState({
    leetCodeSolved: 0,
    yearsExperience: 0,
    projectsDelivered: 0,
    testCoverage: 0,
  })

  useEffect(() => {
    const targets = {
      leetCodeSolved: leetCode.totalSolved,
      yearsExperience: liveStats.yearsExperience,
      projectsDelivered: liveStats.projectsDelivered,
      testCoverage: liveStats.testCoverage,
    }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.entries(targets).map(([key, target]) => {
      let currentStep = 0
      return setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        setStats((prev) => ({
          ...prev,
          [key]: Math.floor(target * progress),
        }))
        if (currentStep >= steps) {
          setStats((prev) => ({ ...prev, [key]: target }))
        }
      }, stepDuration)
    })

    const timer = setTimeout(() => {
      intervals.forEach(clearInterval)
      setStats(targets)
    }, duration + 100)

    return () => {
      intervals.forEach(clearInterval)
      clearTimeout(timer)
    }
  }, [])

  const statsData = [
    {
      icon: <Code2 className="w-6 h-6" />,
      value: stats.leetCodeSolved,
      label: 'LeetCode Solved',
      description: 'Problems Mastered',
      color: 'from-green-500 to-emerald-500',
      suffix: '+',
      delay: 0,
      href: leetCode.profileUrl,
    },
    {
      icon: <Layers className="w-6 h-6" />,
      value: stats.yearsExperience,
      label: 'Years Experience',
      description: 'Production Systems',
      color: 'from-blue-500 to-cyan-500',
      suffix: '+',
      delay: 0.1,
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      value: stats.projectsDelivered,
      label: 'Projects Built',
      description: 'End-to-End Delivery',
      color: 'from-violet-500 to-purple-500',
      suffix: '+',
      delay: 0.2,
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      value: stats.testCoverage,
      label: 'Test Coverage',
      description: 'Jest Integration',
      color: 'from-orange-500 to-red-500',
      suffix: '%',
      delay: 0.3,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
    >
      <AnimatePresence>
        {statsData.map((stat, index) => {
          const CardWrapper = stat.href ? 'a' : 'div'
          const cardProps = stat.href
            ? { href: stat.href, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: stat.delay }}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: { type: 'spring', stiffness: 400, damping: 25 },
            }}
            className="glass-effect rounded-3xl p-5 md:p-6 border border-gray-800 hover:border-primary/50 group cursor-pointer relative overflow-hidden"
          >
            <CardWrapper {...cardProps} className="block relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className={`mb-3 inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color} bg-opacity-10`}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                key={stat.value}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
              >
                {stat.value}
                <span className="text-base">{stat.suffix}</span>
              </motion.div>

              <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-gray-500 text-xs mt-0.5">{stat.description}</div>
            </CardWrapper>

            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${stat.color}`}
            />
          </motion.div>
          )
        })}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="col-span-2 lg:col-span-4"
      >
        <div className="glass-effect rounded-3xl p-4 border border-indigo-500/30 text-center">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 text-indigo-400"
          >
            <Award className="w-5 h-5" />
            <span className="text-sm font-semibold">
              SDE1 @ Mozark · Mobile & Web Automation Testing · NestJS · Appium
            </span>
            <TrendingUp className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
