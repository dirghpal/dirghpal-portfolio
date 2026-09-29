import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import FxCard from './FxCard.jsx'
import { projects, isSet } from '../data/content.js'
const angles = [135, 200, 160, 110, 225]

function Thumb({ p, i, wide }) {
  const [ok, setOk] = useState(Boolean(p.image))
  return (
    <div
      className={`group relative h-40 shrink-0 overflow-hidden ${wide ? 'md:h-auto md:w-1/3' : ''}`}
      style={{ background: `linear-gradient(${angles[i % 5]}deg, rgb(var(--c2)), rgb(var(--c1)))` }}
      {...(ok ? {} : { role: 'img', 'aria-label': `${p.title} preview placeholder` })}
    >
      {ok && <img src={p.image} alt={`${p.title} preview`} loading="lazy" onError={() => setOk(false)} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />}
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Things I've built while learning and practising.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const wide = i === projects.length - 1 && projects.length % 2 === 1
          return (
            <Reveal key={p.title} delay={(i % 2) * 100} className={`h-full ${wide ? 'md:col-span-2' : ''}`}>
              <FxCard as="article" tilt className={`glass flex h-full flex-col overflow-hidden rounded-3xl ${wide ? 'md:flex-row' : ''}`}>
                <Thumb p={p} i={i} wide={wide} />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-bold text-a1">{p.type}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-muted">{p.desc}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted marker:text-a2">{p.focus.map((f) => <li key={f}>{f}</li>)}</ul>
                  <ul className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-bold">
                    {isSet(p.repo) ? <a href={p.repo} target="_blank" rel="noreferrer" className="text-a1 underline underline-offset-4">View on GitHub</a> : <span className="text-muted">{p.repo}</span>}
                    {isSet(p.docs) && <a href={p.docs} target="_blank" rel="noreferrer" className="text-a2 underline underline-offset-4">API Docs</a>}
                  </div>
                </div>
              </FxCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
