'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'
import ShareButton from './ShareButton'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    leetcode: Code2,
    portfolio: Mail,
  }

  return (
    <footer className="bg-background border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="inline-flex"
            >
              <Heart className="w-4 h-4 text-secondary fill-current" />
            </motion.span>
            <span>using Next.js & Tailwind CSS</span>
          </motion.div>

          <div className="flex gap-3">
            <ShareButton />
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon]
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-card rounded-full border border-gray-800 text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span>SDE1 @ Mozark</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>150+ LeetCode</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Full-Stack Engineer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span>NestJS · Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
