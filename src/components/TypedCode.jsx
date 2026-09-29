import { useEffect, useRef, useState } from 'react'

// Reveals text with a brief, finite typing effect (~500ms total, chunked so length doesn't matter much).
// Shows the full text immediately for reduced-motion users. Re-runs only when `text` changes.
export default function TypedCode({ text, className = '' }) {
  const [shown, setShown] = useState(text)
  const raf = useRef(0)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(text); return }
    let i = 0
    setShown('')
    const total = 480 // ms, regardless of text length
    const steps = 26
    const chunk = Math.max(1, Math.ceil(text.length / steps))
    const stepTime = total / steps
    let last = performance.now()
    const tick = (now) => {
      if (now - last >= stepTime) {
        i = Math.min(text.length, i + chunk)
        setShown(text.slice(0, i))
        last = now
      }
      if (i < text.length) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [text])

  return <pre className={className}><code>{shown}</code></pre>
}
