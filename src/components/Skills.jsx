import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import FxCard from './FxCard.jsx'
import { skills } from '../data/content.js'
export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools and technologies I work with.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={i * 70} className="h-full">
            <FxCard className="glass h-full rounded-2xl p-6 hover:-translate-y-1 hover:border-a2/60">
              <h3 className="font-display text-xl font-bold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
            </FxCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
