import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import FxCard from './FxCard.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-5">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 80}>
            <FxCard className="glass flex flex-col gap-3 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl font-bold">{e.role}</p>
                <p className="mt-1 text-muted">{e.org} · {e.place}</p>
              </div>
              <span className="chip w-fit border-a1/40 text-a1">{e.when}</span>
            </FxCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
