'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileDown, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { personalInfo } from '@/data/portfolio'

export default function ResumeModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-resume-modal', handler)
    return () => window.removeEventListener('open-resume-modal', handler)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[75] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[90vh] glass-effect border border-gray-700 rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
              <div>
                <h3 className="text-white font-bold">{personalInfo.name} — Resume</h3>
                <p className="text-gray-500 text-xs">{personalInfo.title}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 bg-gray-950/50">
              <div className="relative w-full aspect-[8.5/11] rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src={personalInfo.resumePath}
                  alt={`${personalInfo.name} Resume`}
                  fill
                  className="object-contain bg-white"
                  priority
                />
              </div>
            </div>

            <div className="flex gap-3 p-4 border-t border-gray-800">
              <a
                href={personalInfo.resumePath}
                download="Anurag_Yadav_Resume.png"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-black py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:border-primary/50 transition-all text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Open Full
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function openResumeModal() {
  window.dispatchEvent(new CustomEvent('open-resume-modal'))
}
