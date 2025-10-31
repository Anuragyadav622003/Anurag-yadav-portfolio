// src/components/Skills.tsx - FIXED VERSION
'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code2, Database, Brain, Cloud, GitBranch, Server, Cpu, Layout } from 'lucide-react'

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: <Layout className="w-8 h-8" />,
    description: 'Creating responsive, performant user interfaces with modern frameworks',
    skills: [
      { name: 'React/Next.js', level: 95, years: 3, projects: 25 },
      { name: 'TypeScript', level: 92, years: 3, projects: 20 },
      { name: 'Tailwind CSS', level: 90, years: 2, projects: 18 },
      { name: 'Three.js/R3F', level: 78, years: 1, projects: 5 },
      { name: 'Framer Motion', level: 88, years: 2, projects: 15 }
    ],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Backend Development',
    icon: <Server className="w-8 h-8" />,
    description: 'Building scalable server-side applications and APIs',
    skills: [
      { name: 'Node.js/Express', level: 94, years: 3, projects: 22 },
      { name: 'PostgreSQL', level: 89, years: 3, projects: 18 },
      { name: 'MongoDB', level: 85, years: 2, projects: 12 },
      { name: 'Redis', level: 87, years: 2, projects: 10 },
      { name: 'REST/GraphQL', level: 91, years: 3, projects: 16 }
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Machine Learning',
    icon: <Brain className="w-8 h-8" />,
    description: 'Developing intelligent systems and predictive models',
    skills: [
      { name: 'Python', level: 95, years: 3, projects: 15 },
      { name: 'TensorFlow/PyTorch', level: 88, years: 2, projects: 8 },
      { name: 'Scikit-learn', level: 92, years: 3, projects: 12 },
      { name: 'Pandas/NumPy', level: 96, years: 3, projects: 18 },
      { name: 'Computer Vision', level: 85, years: 2, projects: 6 }
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'DevOps & Cloud',
    icon: <Cloud className="w-8 h-8" />,
    description: 'Deploying and maintaining production systems',
    skills: [
      { name: 'Docker', level: 91, years: 2, projects: 15 },
      { name: 'AWS/GCP', level: 86, years: 2, projects: 10 },
      { name: 'CI/CD Pipelines', level: 89, years: 2, projects: 12 },
      { name: 'Kubernetes', level: 82, years: 1, projects: 5 },
      { name: 'Linux/ Bash', level: 88, years: 3, projects: 20 }
    ],
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Fixed: Simplified variants without complex nesting
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-6xl md:text-7xl font-black gradient-text mb-6"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Mastering the full stack – from pixel-perfect UIs to scalable cloud infrastructure
          </motion.p>
        </motion.div>

        {/* Skills Grid - FIXED: Using direct animation props instead of variants */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                delay: categoryIndex * 0.2,
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-3xl p-8 border border-gray-800 hover:border-primary/30 transition-all duration-500 group"
            >
              {/* Category Header */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.gradient}`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                </div>
              </motion.div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.1 }}
                    className="group relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-white font-semibold group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex gap-4 text-xs text-gray-400 mt-1">
                          <span>{skill.years}y exp</span>
                          <span>{skill.projects} projects</span>
                        </div>
                      </div>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.1 + 0.5 }}
                        className="text-primary font-bold text-lg"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + index * 0.1 + 0.3, 
                          duration: 1.5,
                          type: "spring",
                          bounce: 0.3
                        }}
                        className={`h-3 rounded-full bg-gradient-to-r ${category.gradient} relative overflow-hidden`}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
                        />
                      </motion.div>
                    </div>

                    {/* Hover tooltip */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 glass-effect rounded-lg p-3 border border-gray-700 z-20 min-w-48"
                        >
                          <div className="text-sm text-white font-semibold">{skill.name}</div>
                          <div className="text-xs text-gray-300 mt-1">
                            {skill.years} years experience • {skill.projects} projects
                          </div>
                          <div className="text-xs text-primary mt-1">
                            Expert level: {skill.level}%
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced LeetCode Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-3xl p-12 border border-primary/20 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />
          </div>
          
          <motion.h3
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ delay: 1 }}
            className="text-4xl font-black text-center text-white mb-12"
          >
            Competitive Programming
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard 
              number="350" 
              label="Easy Problems" 
              color="from-green-500 to-emerald-500"
              icon="✅"
              description="Mastered fundamental algorithms"
              delay={1.1}
            />
            <StatCard 
              number="100" 
              label="Medium Problems" 
              color="from-yellow-500 to-orange-500"
              icon="⚡"
              description="Advanced problem-solving skills"
              delay={1.2}
            />
            <StatCard 
              number="50" 
              label="Hard Problems" 
              color="from-red-500 to-pink-500"
              icon="🔥"
              description="Expert-level challenges solved"
              delay={1.3}
            />
          </div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-800"
          >
            <MiniStat value="95%" label="Success Rate" icon="🎯" />
            <MiniStat value="2.5y" label="Consistency" icon="📅" />
            <MiniStat value="50+" label="Contests" icon="🏆" />
            <MiniStat value="Top 5%" label="Global Rank" icon="🌍" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ number, label, color, icon, description, delay }: { 
  number: string; 
  label: string; 
  color: string;
  icon: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-card rounded-2xl p-8 text-center border border-gray-800 hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
    >
      <div className="text-2xl mb-3">{icon}</div>
      <div className={`text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
        {number}
      </div>
      <div className="text-gray-300 text-lg font-semibold uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className="text-gray-400 text-sm">
        {description}
      </div>
    </motion.div>
  )
}

function MiniStat({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center group cursor-pointer"
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
        {value}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}