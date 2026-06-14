'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code2, Database, Cloud, Server, Layout, Network } from 'lucide-react'
import { skillCategories } from '@/data/portfolio'
import LeetCodeBadge from './LeetCodeBadge'

const iconMap = {
  code: Code2,
  server: Server,
  layout: Layout,
  database: Database,
  network: Network,
  tools: Cloud,
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack expertise from NestJS microservices to React/Next.js frontends
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon]
            return (
              <motion.button
                key={cat.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === i
                    ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg`
                    : 'glass-effect border border-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Active category panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="glass-effect rounded-3xl p-8 md:p-10 border border-gray-800 max-w-4xl mx-auto mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`p-3 rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory].gradient}`}
              >
                {(() => {
                  const Icon = iconMap[skillCategories[activeCategory].icon]
                  return <Icon className="w-7 h-7 text-white" />
                })()}
              </div>
              <h3
                className={`text-2xl font-bold bg-gradient-to-r ${skillCategories[activeCategory].gradient} bg-clip-text text-transparent`}
              >
                {skillCategories[activeCategory].name}
              </h3>
            </div>

            <div className="space-y-5">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      className="text-primary font-bold"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.08 + 0.2, duration: 1.2, type: 'spring' }}
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].gradient} relative`}
                    >
                      <motion.div
                        animate={{ x: [-100, 200] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                      />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute right-0 top-full mt-1 px-3 py-1.5 glass-effect rounded-lg text-xs text-primary border border-gray-700 z-10"
                      >
                        Proficiency: {skill.level}%
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveCategory(categoryIndex)}
              className={`cursor-pointer glass-effect rounded-2xl p-5 border transition-all duration-300 ${
                activeCategory === categoryIndex
                  ? 'border-primary/50'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              <h4
                className={`text-sm font-bold mb-3 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
              >
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 bg-gray-800/60 rounded-md text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <LeetCodeBadge />
      </div>
    </section>
  )
}
