import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { education, experience, internship as it } from '../data/content.js'
export default function Education() {
  return (
    <Section id="education" title="Education & internship">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 80} className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold">{e.degree}</h3>
              <p className="mt-1 text-muted">{e.place}</p>
              <p className="mt-1 text-sm font-semibold text-a1">{e.years}</p>
              {e.chips && <div className="mt-4 flex flex-wrap gap-2">{e.chips.map((c) => <span key={c} className="chip">{c}</span>)}</div>}
            </Reveal>
          ))}
        </div>
        <div className="space-y-4">
          {experience.map((e, i) => (
            <Reveal key={e.org} delay={i * 80} className="glass rounded-2xl p-6">
              <p className="text-sm font-bold text-a2">Currently working</p>
              <h3 className="mt-1 font-display text-xl font-bold">{e.role}</h3>
              <p className="mt-1 text-muted">{e.org} · {e.place}</p>
              <p className="mt-1 text-sm font-semibold text-a1">{e.when}</p>
            </Reveal>
          ))}
          <Reveal delay={120} className="glass h-fit rounded-2xl p-6">
            <p className="text-sm font-bold text-a2">Internship</p>
            <h3 className="mt-1 font-display text-xl font-bold">{it.title}</h3>
            <p className="mt-1 text-muted">{it.org} · {it.when}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-a2">{it.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
