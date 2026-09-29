import { useEffect, useState } from 'react'
import { nav, site } from '../data/content.js'
import useActiveSection from '../hooks/useActiveSection.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const active = useActiveSection(nav.map(([, id]) => id))
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch (e) {}
  }
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) }
  }, [])
  const bar = 'absolute left-0 h-0.5 w-4 bg-fg transition duration-300'
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav aria-label="Main" className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-lg shadow-black/10' : 'border border-transparent py-3'}`}>
        <a href="#home" className="font-display text-lg font-extrabold">{site.name.split(' ')[0]}<span className="grad-text">.</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={`relative rounded-full px-3 py-1.5 text-sm font-semibold transition ${active === id ? 'text-fg' : 'text-muted hover:text-fg'}`}>
                {label}
                {active === id && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg,#d9432e,#6d4aff)' }} />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} className="grid h-9 w-9 place-items-center rounded-full border border-line text-sm transition hover:bg-[var(--glass)]">{dark ? '☀' : '☾'}</button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden">
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span className={`${bar} top-0 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`${bar} top-[6px] ${open ? 'opacity-0' : ''}`} />
              <span className={`${bar} top-3 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={`mx-auto grid max-w-6xl transition-all duration-300 md:hidden ${open ? 'mt-2 grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0 overflow-hidden">
          <ul className="glass rounded-2xl p-2">
            {nav.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 font-semibold hover:bg-[var(--glass)] ${active === id ? 'text-a1' : ''}`}>{label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
