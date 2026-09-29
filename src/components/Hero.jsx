import { useEffect, useRef } from 'react'
import { site, isSet } from '../data/content.js'
import Particles from './Particles.jsx'
import MagneticButton from './MagneticButton.jsx'

function Par({ d, className = '', children }) {
  return <div className={`par ${className}`} style={{ '--d': d }}>{children}</div>
}

const chip = 'glass float rounded-2xl p-3 shadow-lg shadow-black/30'
function Floaters() {
  return (
    <div aria-hidden="true">
      <Par d={22} className="absolute -left-4 top-6 sm:-left-10"><div className={chip} style={{ animationDelay: '-1s', animationDuration: '6s' }}>
        <span className="font-mono text-xs font-bold text-a1">{'{ }'}</span>
      </div></Par>
      <Par d={-20} className="absolute -right-2 top-16 sm:-right-8"><div className={chip} style={{ animationDelay: '-3.5s', animationDuration: '8.5s' }}>
        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">200 OK</span>
      </div></Par>
      <Par d={26} className="absolute -left-2 bottom-8 sm:-left-12"><div className={chip} style={{ animationDelay: '-2s', animationDuration: '7.2s' }}>
        <span className="font-mono text-xs font-bold text-a1">POST /api</span>
      </div></Par>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const photoRef = useRef(null)
  const onPhotoMove = (e) => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = photoRef.current
    const r = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - r.left}px`)
    el.style.setProperty('--sy', `${e.clientY - r.top}px`)
  }
  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5) * 2)
        el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5) * 2)
      })
    }
    const leave = () => { el.style.setProperty('--px', 0); el.style.setProperty('--py', 0) }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => { cancelAnimationFrame(raf); el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave) }
  }, [])
  const ready = isSet(site.resume)
  const d = (n) => ({ animationDelay: `${n}ms` })
  return (
    <section id="home" ref={ref} className="relative overflow-hidden">
      <div aria-hidden="true" className="blob pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-a2 opacity-20 blur-3xl" />
      <div aria-hidden="true" className="blob pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-a1 opacity-20 blur-3xl" style={{ animationDuration: '26s', animationDirection: 'alternate-reverse' }} />
      <Particles />
      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-5 pb-16 pt-28 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="hero-in font-mono text-sm font-semibold text-a1" style={d(0)}>Hi, I'm</p>
          <h1 className="hero-in mt-2 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl" style={d(100)}>{site.name}</h1>
          <p className="hero-in grad-text mt-4 font-display text-2xl font-semibold sm:text-3xl" style={d(220)}>{site.role}</p>
          <p className="hero-in mt-6 max-w-lg text-lg text-muted" style={d(340)}>{site.tagline}</p>
          <ul className="hero-in mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm font-bold" style={d(440)} aria-label="Works with">
            {site.stack.map((s) => <li key={s} className="cursor-default text-fg/90 transition duration-300 after:ml-3 after:text-muted after:content-['•'] last:after:hidden hover:text-a1 hover:[text-shadow:0_0_16px_rgb(var(--c1)/0.65)]">{s}</li>)}
          </ul>
          <div className="hero-in mt-9 flex flex-wrap gap-3" style={d(540)}>
            <MagneticButton href="#projects" className="btn-primary">View Projects <span aria-hidden="true">→</span></MagneticButton>
            <MagneticButton href={ready ? site.resume : '#resume'} {...(ready ? { download: true } : {})} className="btn-ghost">Download Resume</MagneticButton>
            <MagneticButton href="#contact" className="btn-ghost">Contact Me</MagneticButton>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs py-6">
          <Par d={8}>
            <div className="photo-in relative mx-auto w-72">
              <div className="photo-glow absolute -inset-5 rounded-[2.5rem] blur-2xl" style={{ background: 'linear-gradient(135deg, rgb(var(--c1) / .55), rgb(var(--c2) / .45))' }} aria-hidden="true" />
              <div className="photo-float relative rounded-[2rem] p-[3px]" style={{ background: 'linear-gradient(140deg, rgb(var(--c1)), rgb(var(--c2)))' }}>
                <div ref={photoRef} onPointerMove={onPhotoMove} className="group relative overflow-hidden rounded-[1.85rem] bg-bg">
                  <img src="/profile.jpg" alt={site.name} className="aspect-[4/5] w-full object-cover" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1.85rem]" style={{ boxShadow: 'inset 0 0 50px 18px rgb(var(--code-bg) / .55)' }} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 rounded-b-[1.85rem]" style={{ background: 'linear-gradient(to top, rgb(var(--code-bg) / .85), transparent)' }} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 rounded-b-[1.85rem]" style={{ background: 'linear-gradient(to top, rgb(var(--c2) / .3), transparent)' }} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1.85rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(220px circle at var(--sx,50%) var(--sy,50%), rgb(var(--c1) / .35), transparent 70%)' }} />
                </div>
              </div>
            </div>
          </Par>
          <Floaters />
        </div>
      </div>
    </section>
  )
}
