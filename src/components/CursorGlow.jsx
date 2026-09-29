import { useEffect, useRef } from 'react'

// A soft glow that trails the cursor. Desktop only, off for reduced motion.
export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    let raf = 0, x = 0, y = 0
    const move = (e) => {
      x = e.clientX; y = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => { raf = 0; el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`; el.style.opacity = 1 })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={ref} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-0 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, var(--spot) 0%, transparent 65%)' }} />
}
