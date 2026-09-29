import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { site, isSet } from '../data/content.js'
export default function Resume() {
  const ready = isSet(site.resume)
  return (
    <Section id="resume" title="Resume">
      <Reveal className="glass flex flex-col items-start justify-between gap-5 rounded-2xl p-7 sm:flex-row sm:items-center">
        <p className="max-w-md text-lg text-muted">A one-page summary of my education, skills and projects.</p>
        {ready
          ? <a href={site.resume} download className="btn-primary">Download Resume</a>
          : <p className="text-sm font-medium text-muted">{site.resume}<br />Save your PDF as public/resume.pdf and update content.js.</p>}
      </Reveal>
    </Section>
  )
}
