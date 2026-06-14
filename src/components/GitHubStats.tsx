'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Star, GitFork, Users, FolderGit2 } from 'lucide-react'
import { github, personalInfo } from '@/data/portfolio'

interface GitHubData {
  public_repos: number
  followers: number
  following: number
}

interface RepoData {
  stargazers_count: number
  forks_count: number
}

export default function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [user, setUser] = useState<GitHubData | null>(null)
  const [totalStars, setTotalStars] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${github.username}`),
          fetch(`https://api.github.com/users/${github.username}/repos?per_page=100&sort=updated`),
        ])
        if (userRes.ok) setUser(await userRes.json())
        if (reposRes.ok) {
          const repos: RepoData[] = await reposRes.json()
          setTotalStars(repos.reduce((sum, r) => sum + r.stargazers_count, 0))
        }
      } catch {
        // fallback silently
      } finally {
        setLoading(false)
      }
    }
    fetchGitHub()
  }, [])

  const stats = [
    {
      icon: <FolderGit2 className="w-5 h-5" />,
      value: user?.public_repos ?? '—',
      label: 'Repositories',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Star className="w-5 h-5" />,
      value: totalStars || '—',
      label: 'Total Stars',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: user?.followers ?? '—',
      label: 'Followers',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <GitFork className="w-5 h-5" />,
      value: user?.following ?? '—',
      label: 'Following',
      color: 'from-violet-500 to-purple-500',
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="mt-10"
    >
      <a
        href={github.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block glass-effect rounded-3xl p-6 md:p-8 border border-gray-800 hover:border-primary/30 transition-all duration-500 group"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gray-800 group-hover:bg-primary/10 transition-colors">
              <Github className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                Live GitHub Activity
              </h3>
              <p className="text-gray-500 text-sm">@{github.username}</p>
            </div>
          </div>
          {loading && (
            <span className="text-xs text-gray-600 animate-pulse">Syncing...</span>
          )}
          {!loading && (
            <span className="flex items-center gap-1.5 text-xs text-success">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Live
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center p-4 rounded-2xl bg-gray-900/50 border border-gray-800 group-hover:border-gray-700 transition-colors"
            >
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-10 text-primary mb-2`}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-4 group-hover:text-gray-400 transition-colors">
          Click to view {personalInfo.name}&apos;s GitHub profile →
        </p>
      </a>
    </motion.div>
  )
}
