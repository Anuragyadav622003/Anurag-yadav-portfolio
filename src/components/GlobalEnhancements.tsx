'use client'

import ScrollProgress from './ScrollProgress'
import BackToTop from './BackToTop'
import CommandPalette from './CommandPalette'
import Toast from './Toast'
import ResumeModal from './ResumeModal'
import KeyboardShortcuts from './KeyboardShortcuts'
import MobileCTA from './MobileCTA'
import CommandPaletteHint from './CommandPaletteHint'

export default function GlobalEnhancements() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <CommandPalette />
      <CommandPaletteHint />
      <Toast />
      <ResumeModal />
      <KeyboardShortcuts />
      <MobileCTA />
    </>
  )
}
