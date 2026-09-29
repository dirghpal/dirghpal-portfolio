import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { about, interests } from '../data/content.js'
export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">{about.map((p) => <p key={p}>{p}</p>)}</Reveal>
        <Reveal delay={120} className="glass rounded-2xl p-6">
          <h3 className="font-display text-xl font-bold">What I'm interested in</h3>
          <ul className="mt-4 space-y-3">
            {interests.map((i) => <li key={i} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-a2" />{i}</li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
