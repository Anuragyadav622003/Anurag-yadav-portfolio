'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Home,
  User,
  FolderOpen,
  Wrench,
  Briefcase,
  Trophy,
  Mail,
  Github,
  Linkedin,
  Code2,
  FileDown,
  X,
  Eye,
  GraduationCap,
} from 'lucide-react'
import { useShortcutLabel } from '@/lib/shortcuts'
import { navSections, personalInfo, socialLinks, leetCode } from '@/data/portfolio'
import { openResumeModal } from './ResumeModal'

const sectionIcons: Record<string, React.ReactNode> = {
  home: <Home className="w-4 h-4" />,
  about: <User className="w-4 h-4" />,
  projects: <FolderOpen className="w-4 h-4" />,
  skills: <Wrench className="w-4 h-4" />,
  experience: <Briefcase className="w-4 h-4" />,
  education: <GraduationCap className="w-4 h-4" />,
  achievements: <Trophy className="w-4 h-4" />,
  contact: <Mail className="w-4 h-4" />,
}

interface Command {
  id: string
  label: string
  group: string
  icon: React.ReactNode
  action: () => void
  keywords?: string[]
}

export default function CommandPalette() {
  const shortcut = useShortcutLabel()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const github = socialLinks.find((s) => s.label === 'GitHub')?.href ?? ''
  const linkedin = socialLinks.find((s) => s.label === 'LinkedIn')?.href ?? ''

  const commands: Command[] = [
    ...navSections.map((s) => ({
      id: s.id,
      label: `Go to ${s.label}`,
      group: 'Navigate',
      icon: sectionIcons[s.id],
      action: () => {
        document.querySelector(s.href)?.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
      },
      keywords: [s.label.toLowerCase(), s.id],
    })),
    {
      id: 'resume-preview',
      label: 'Preview Resume',
      group: 'Actions',
      icon: <Eye className="w-4 h-4" />,
      action: () => {
        openResumeModal()
        setOpen(false)
      },
      keywords: ['resume', 'cv', 'preview', 'view'],
    },
    {
      id: 'resume',
      label: 'Download Resume',
      group: 'Actions',
      icon: <FileDown className="w-4 h-4" />,
      action: () => {
        const a = document.createElement('a')
        a.href = personalInfo.resumePdfPath
        a.download = 'Anurag_Yadav_Resume.pdf'
        a.click()
        setOpen(false)
      },
      keywords: ['resume', 'cv', 'download'],
    },
    {
      id: 'github',
      label: 'Open GitHub',
      group: 'Links',
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open(github, '_blank')
        setOpen(false)
      },
      keywords: ['github', 'code', 'repos'],
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      group: 'Links',
      icon: <Linkedin className="w-4 h-4" />,
      action: () => {
        window.open(linkedin, '_blank')
        setOpen(false)
      },
      keywords: ['linkedin', 'professional'],
    },
    {
      id: 'leetcode',
      label: 'Open LeetCode',
      group: 'Links',
      icon: <Code2 className="w-4 h-4" />,
      action: () => {
        window.open(leetCode.profileUrl, '_blank')
        setOpen(false)
      },
      keywords: ['leetcode', 'dsa', 'coding'],
    },
    {
      id: 'email',
      label: 'Send Email',
      group: 'Actions',
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        window.location.href = `mailto:${personalInfo.email}`
        setOpen(false)
      },
      keywords: ['email', 'contact', 'hire'],
    },
  ]

  const filtered = commands.filter((cmd) => {
    if (!query) return true
    const q = query.toLowerCase()
    return (
      cmd.label.toLowerCase().includes(q) ||
      cmd.group.toLowerCase().includes(q) ||
      cmd.keywords?.some((k) => k.includes(q))
    )
  })

  const execute = useCallback(
    (cmd: Command) => {
      cmd.action()
      setQuery('')
      setSelected(0)
    },
    []
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    const onToggle = () => setOpen((o) => !o)

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('toggle-command-palette', onToggle)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('toggle-command-palette', onToggle)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    setSelected(0)
  }, [query])

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected((s) => Math.min(s + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected((s) => Math.max(s - 1, 0))
    } else if (e.key === 'Enter' && filtered[selected]) {
      execute(filtered[selected])
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg glass-effect border border-gray-700 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Search className="w-4 h-4 text-primary" />
                <span>Quick Navigation</span>
              </div>
              <kbd className="px-2 py-0.5 rounded bg-gray-800 border border-gray-700 font-mono text-[10px] text-gray-500">
                {shortcut} to toggle
              </kbd>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800/50">
              <Search className="w-5 h-5 text-gray-500 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search sections, links, actions..."
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto custom-scrollbar p-2">
              {filtered.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-8">No results found</p>
              ) : (
                filtered.map((cmd, i) => (
                  <button
                    key={cmd.id}
                    onClick={() => execute(cmd)}
                    onMouseEnter={() => setSelected(i)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                      i === selected
                        ? 'bg-primary/15 text-white border border-primary/30'
                        : 'text-gray-300 hover:bg-gray-800/50'
                    }`}
                  >
                    <span className={i === selected ? 'text-primary' : 'text-gray-500'}>
                      {cmd.icon}
                    </span>
                    <span className="flex-1 text-sm font-medium">{cmd.label}</span>
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                      {cmd.group}
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="px-4 py-2.5 border-t border-gray-800 flex items-center justify-between text-[10px] text-gray-600">
              <span>↑↓ navigate · ↵ select · esc close</span>
              <kbd className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 font-mono">
                {shortcut}
              </kbd>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
