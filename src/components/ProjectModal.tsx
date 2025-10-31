// src/components/ProjectModal.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types/project'
import { X, ExternalLink, Github, BarChart3, Clock, Code2, AlertCircle, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start p-6 border-b border-gray-800">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.category === 'ml' 
                    ? 'bg-purple-500/20 text-purple-300'
                    : project.category === 'backend'
                    ? 'bg-blue-500/20 text-blue-300'
                    : 'bg-green-500/20 text-green-300'
                }`}>
                  {project.category.toUpperCase()}
                </span>
                <span className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${
                  project.status === 'completed' 
                    ? 'bg-success/20 text-success' 
                    : 'bg-warning/20 text-warning'
                }`}>
                  {project.status === 'completed' ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300 text-lg">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors ml-4"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            <div className="flex gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>

            {Object.keys(project.metrics).length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-secondary" />
                  Challenges
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-secondary mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Solutions
                </h3>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-success mt-1">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {project.category === 'ml' && (
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Machine Learning Insights</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Model Architecture</h4>
                    <p className="text-gray-300 text-sm">
                      Random Forest classifier with optimized hyperparameters, feature engineering, 
                      and cross-validation for robust performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Data Pipeline</h4>
                    <p className="text-gray-300 text-sm">
                      Comprehensive data preprocessing including feature scaling, handling missing values, 
                      and categorical encoding for model training.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {project.category === 'backend' && (
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4">System Architecture</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">API Design</h4>
                    <p className="text-gray-300 text-sm">
                      RESTful API with proper status codes, error handling, rate limiting, 
                      and comprehensive documentation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Database Optimization</h4>
                    <p className="text-gray-300 text-sm">
                      Optimized queries with proper indexing, connection pooling, 
                      and efficient data retrieval patterns.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}