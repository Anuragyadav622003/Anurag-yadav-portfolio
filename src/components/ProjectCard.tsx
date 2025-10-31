// src/components/ProjectCard.tsx
'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types/project'
import { ExternalLink, Github, BarChart3 } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-card rounded-2xl p-6 border border-gray-800 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
      onClick={() => onSelect(project)}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          project.category === 'ml' 
            ? 'bg-purple-500/20 text-purple-300'
            : project.category === 'backend'
            ? 'bg-blue-500/20 text-blue-300'
            : 'bg-green-500/20 text-green-300'
        }`}>
          {project.category.toUpperCase()}
        </span>
        
        {project.metrics && (
          <BarChart3 className="w-4 h-4 text-gray-400 group-hover:text-primary" />
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {project.metrics && (
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1">
              <span className="font-semibold text-primary">{value}</span>
              <span className="text-gray-500">{key}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <span className="text-primary text-sm font-semibold">
          View Details
        </span>
        
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}