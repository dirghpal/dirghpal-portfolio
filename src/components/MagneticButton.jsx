import { useEffect, useRef } from 'react'

// Nudges the element a few px toward the cursor while hovered. Desktop pointers only, off for reduced motion.
export default function MagneticButton({ as: Tag = 'a', className = '', children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * 0.25
      const y = (e.clientY - r.top - r.height / 2) * 0.35
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    const leave = () => { el.style.transform = '' }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave) }
  }, [])
  return <Tag ref={ref} className={className} style={{ transition: 'transform .25s cubic-bezier(.2,.8,.2,1)' }} {...rest}>{children}</Tag>
}
