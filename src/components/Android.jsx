import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { android } from '../data/content.js'
export default function Android() {
  return (
    <Section id="android" title="Android development" intro={android.intro}>
      <div className="grid gap-5 md:grid-cols-3">
        {android.points.map(([t, d], i) => (
          <Reveal key={t} delay={i * 80} className="rounded-2xl border border-line p-6 transition duration-300 hover:border-a2"><h3 className="font-display text-xl font-bold">{t}</h3><p className="mt-2 text-muted">{d}</p></Reveal>
        ))}
      </div>
    </Section>
  )
}
