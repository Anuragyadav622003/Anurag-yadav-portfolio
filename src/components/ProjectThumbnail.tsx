'use client'

import { Project } from '@/types/project'
import { getCategoryLabel, getProjectGradient } from '@/lib/projectVisuals'

interface ProjectThumbnailProps {
  project: Pick<Project, 'id' | 'title' | 'category' | 'technologies'>
  className?: string
}

export default function ProjectThumbnail({ project, className = '' }: ProjectThumbnailProps) {
  const initials = project.title
    .split(/[@\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-gray-800/80 bg-gray-900/40 ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getProjectGradient(project)} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]" />
      <div className="relative flex h-full min-h-[140px] flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90">
            {getCategoryLabel(project.category)}
          </span>
          <span className="rounded-xl bg-black/25 px-3 py-1.5 text-sm font-black text-white">
            {initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-bold text-white line-clamp-2">{project.title}</p>
          <p className="mt-2 text-[11px] text-white/75">
            {project.technologies.slice(0, 3).join(' · ')}
          </p>
        </div>
      </div>
    </div>
  )
}
