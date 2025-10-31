// src/components/Projects.tsx
'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { Project } from '@/types/project'
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard'

const categories = ['all', 'ml', 'fullstack', 'backend'] as const

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ml' | 'fullstack' | 'backend'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects
    return projects.filter(project => project.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Technical Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing production-ready projects that demonstrate full-stack capabilities, 
            machine learning expertise, and scalable architecture design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-black'
                  : 'bg-card text-gray-300 hover:bg-card/80 border border-gray-700'
              }`}
            >
              {category === 'all' ? 'All Projects' : category.toUpperCase()}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}