'use client'

import { useState, useEffect } from 'react'

export function useShortcutLabel() {
  const [label, setLabel] = useState('Ctrl+K')

  useEffect(() => {
    const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent)
    setLabel(isMac ? '⌘K' : 'Ctrl+K')
  }, [])

  return label
}

export function openCommandPalette() {
  window.dispatchEvent(new CustomEvent('toggle-command-palette'))
}
