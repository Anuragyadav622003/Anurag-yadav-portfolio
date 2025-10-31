// src/types/project.ts
export interface Project {
  id: string
  title: string
  description: string
  category: 'ml' | 'fullstack' | 'backend'
  technologies: string[]
  demoUrl?: string
  codeUrl: string
  featured: boolean
  metrics: Record<string, string>
  images: string[]
  longDescription: string
  challenges: string[]
  solutions: string[]
  status: 'completed' | 'in-progress'
}