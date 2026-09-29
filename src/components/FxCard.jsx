import { useEffect, useRef } from 'react'

// Pointer spotlight (and optional subtle tilt). Only active for fine pointers and when motion is allowed.
export default function FxCard({ children, className = '', tilt = false, as: Tag = 'div' }) {
  const ref = useRef(null)
  const raf = useRef(0)
  const on = useRef(false)
  useEffect(() => {
    on.current = matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
    return () => cancelAnimationFrame(raf.current)
  }, [])
  const move = (e) => {
    if (!on.current) return
    const { clientX, clientY } = e
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = clientX - r.left, y = clientY - r.top
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
      if (tilt) el.style.transform = `perspective(900px) rotateX(${(y / r.height - 0.5) * -5}deg) rotateY(${(x / r.width - 0.5) * 5}deg) translateY(-4px)`
    })
  }
  const leave = () => { cancelAnimationFrame(raf.current); if (tilt && ref.current) ref.current.style.transform = '' }
  return <Tag ref={ref} onPointerMove={move} onPointerLeave={leave} className={`fx ${className}`}>{children}</Tag>
}
