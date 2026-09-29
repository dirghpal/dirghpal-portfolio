import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

const steps = ['Client', 'API', 'Controller', 'Logic', 'Database']

export default function Architecture() {
  return (
    <Section id="architecture" title="How my backend is structured" intro="The typical request flow in my Laravel API projects.">
      <Reveal>
        <div className="glass overflow-x-auto rounded-2xl p-6 sm:p-10">
          <div className="flex min-w-[560px] items-center justify-between">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className="fx flex flex-col items-center gap-2 rounded-2xl border line bg-bg/40 px-5 py-4 text-center">
                  <span className="font-display text-base font-bold sm:text-lg">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <svg width="56" height="16" viewBox="0 0 56 16" className="mx-1 shrink-0 text-a1 sm:mx-2" aria-hidden="true">
                    <line x1="0" y1="8" x2="46" y2="8" stroke="currentColor" strokeWidth="2" strokeDasharray="6 5" opacity="0.7" />
                    <path d="M40 2 L50 8 L40 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
