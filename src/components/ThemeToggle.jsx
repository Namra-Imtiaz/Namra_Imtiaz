import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const isDark = () => document.documentElement.classList.contains('dark')

// Light / dark switch. The initial theme is set in index.html (saved choice, else the OS setting).
const ThemeToggle = () => {
  const [dark, setDark] = useState(isDark)

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    document.documentElement.dataset.theme = next ? 'dark' : 'light'
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* storage unavailable */ }
    setDark(next)
  }

  return (
    <button type="button" onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="p-2 rounded-lg text-muted hover:text-ink hover:bg-accent-soft transition-colors">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
