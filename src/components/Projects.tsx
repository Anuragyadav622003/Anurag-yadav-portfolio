// src/components/Projects.tsx
'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { projects } from '@/data/projects'
import { Project } from '@/types/project'
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard'

const categories = ['all', 'ml', 'fullstack', 'backend'] as const

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ml' | 'fullstack' | 'backend'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [search, setSearch] = useState('')

  const filteredProjects = useMemo(() => {
    let result = projects
    if (selectedCategory !== 'all') {
      result = result.filter((project) => project.category === selectedCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      )
    }
    return result
  }, [selectedCategory, search])

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {projects.length} production-ready systems showcasing microservices architecture,
            full-stack development, and scalable API design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects by name or tech..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-black'
                  : 'bg-card text-gray-300 hover:bg-card/80 border border-gray-700'
              }`}
            >
              {category === 'all' ? 'All Projects' : category.toUpperCase()}
            </motion.button>
          ))}
          </div>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-gray-500 py-12"
          >
            No projects match your search.
          </motion.p>
        )}

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