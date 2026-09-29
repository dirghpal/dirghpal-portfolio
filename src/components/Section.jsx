import Reveal from './Reveal.jsx'
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal>
        <h2 id={`${id}-h`} className="h2">{title}</h2>
        {intro && <p className="mt-4 max-w-xl text-lg text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-10 sm:mt-14">{children}</div>
    </section>
  )
}
