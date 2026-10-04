import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// photos: [{ src, ratio (width / height), caption }]
// Thumbnails share one row height and fill the width; click opens a full-size viewer
// with previous/next (buttons, arrow keys or swipe).
const PhotoGallery = ({ photos, className = '' }) => {
  const [open, setOpen] = useState(null)
  const [touchX, setTouchX] = useState(null)
  const many = photos.length > 1

  const step = (dir) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length))

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (many && e.key === 'ArrowRight') step(1)
      if (many && e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, many])

  const onTouchEnd = (e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (many && Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
    setTouchX(null)
  }

  const navBtn = 'absolute top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70'

  return (
    <>
      <div className={`flex flex-wrap gap-4 ${className}`}>
        {photos.map((g, i) => (
          <button key={g.caption} type="button" onClick={() => setOpen(i)}
            style={{ flex: `${g.ratio} 1 ${Math.round(g.ratio * 150)}px` }}
            className="group flex flex-col text-left rounded-lg overflow-hidden border border-line bg-bg hover:shadow-md transition">
            <img src={g.src} alt={g.caption} loading="lazy" style={{ aspectRatio: g.ratio }} className="w-full h-auto block shrink-0 group-hover:opacity-90 transition" />
            <p className="text-xs text-muted p-2 flex-1">{g.caption}</p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            onTouchStart={(e) => setTouchX(e.touches[0].clientX)} onTouchEnd={onTouchEnd}
            role="dialog" aria-modal="true" aria-label={photos[open].caption}
          >
            <button type="button" aria-label="Close" onClick={() => setOpen(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70">
              <X size={24} />
            </button>
            {many && (
              <>
                <button type="button" aria-label="Previous photo" className={`${navBtn} left-3`}
                  onClick={(e) => { e.stopPropagation(); step(-1) }}><ChevronLeft size={28} /></button>
                <button type="button" aria-label="Next photo" className={`${navBtn} right-3`}
                  onClick={(e) => { e.stopPropagation(); step(1) }}><ChevronRight size={28} /></button>
              </>
            )}
            <figure className="max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img src={photos[open].src} alt={photos[open].caption} className="max-h-[80vh] mx-auto rounded-lg" />
              <figcaption className="text-center text-white/90 mt-3 text-sm">
                {photos[open].caption}{many && <span className="text-white/60"> &middot; {open + 1} / {photos.length}</span>}
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PhotoGallery
