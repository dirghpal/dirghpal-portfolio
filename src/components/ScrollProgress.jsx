import { useEffect, useRef } from 'react'
export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      el.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div aria-hidden="true" className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left" style={{ background: 'linear-gradient(90deg,#d9432e,#6d4aff)' }} ref={ref} />
}
