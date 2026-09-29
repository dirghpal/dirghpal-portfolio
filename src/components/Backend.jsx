import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { backend } from '../data/content.js'
export default function Backend() {
  return (
    <Section id="backend" title="Backend" intro={backend.intro}>
      <div className="grid gap-5 md:grid-cols-3">
        {backend.strengths.map(([t, d], i) => (
          <Reveal key={t} delay={i * 80} className="glass rounded-2xl p-6"><h3 className="font-display text-xl font-bold">{t}</h3><p className="mt-2 text-muted">{d}</p></Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <h3 className="font-display text-2xl font-bold">Tools I use</h3>
        <ul className="mt-5 flex flex-wrap gap-2">{backend.tools.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
      </Reveal>
    </Section>
  )
}
