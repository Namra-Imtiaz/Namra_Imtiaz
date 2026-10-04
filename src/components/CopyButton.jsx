import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const CopyButton = ({ text, label }) => {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-accent border border-line rounded-md px-2 py-1 transition-colors"
    >
      {copied ? <><Check size={14} className="text-accent" /> Copied</> : <><Copy size={14} /> Copy</>}
    </button>
  )
}

export default CopyButton
