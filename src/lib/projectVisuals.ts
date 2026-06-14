import { Project } from '@/types/project'

const gradients: Record<string, string> = {
  'test-studio-mozark': 'from-indigo-600 via-violet-600 to-purple-700',
  'centralized-auth-microservices': 'from-blue-600 via-cyan-600 to-teal-600',
  'expense-tracker': 'from-emerald-600 via-green-600 to-teal-700',
  'e-learning-platform': 'from-violet-600 via-purple-600 to-fuchsia-600',
  'accident-severity-predictor': 'from-orange-600 via-rose-600 to-pink-600',
}

const categoryGradients: Record<Project['category'], string> = {
  work: 'from-indigo-600 via-violet-600 to-purple-700',
  backend: 'from-blue-600 via-cyan-600 to-teal-600',
  fullstack: 'from-violet-600 via-purple-600 to-fuchsia-600',
  ml: 'from-orange-600 via-rose-600 to-pink-600',
}

const categoryLabels: Record<Project['category'], string> = {
  work: 'Work Project',
  backend: 'Backend',
  fullstack: 'Full-Stack',
  ml: 'Machine Learning',
}

export function getProjectGradient(project: Pick<Project, 'id' | 'category'>) {
  return gradients[project.id] ?? categoryGradients[project.category]
}

export function getCategoryLabel(category: Project['category']) {
  return categoryLabels[category]
}

export function getCategoryBadgeClass(category: Project['category']) {
  switch (category) {
    case 'work':
      return 'bg-indigo-500/20 text-indigo-300'
    case 'ml':
      return 'bg-purple-500/20 text-purple-300'
    case 'backend':
      return 'bg-blue-500/20 text-blue-300'
    default:
      return 'bg-green-500/20 text-green-300'
  }
}
