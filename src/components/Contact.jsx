import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'
import { site, isSet } from '../data/content.js'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.51-3.5-.7-3.72-1.34-.13-.33-.68-1.34-1.16-1.62-.4-.22-.96-.75-.02-.77.89-.01 1.52.83 1.74 1.18 1.02 1.75 2.65 1.26 3.3.96.1-.75.4-1.26.72-1.55-2.5-.29-5.13-1.28-5.13-5.68 0-1.25.44-2.28 1.16-3.08-.12-.29-.5-1.47.11-3.06 0 0 .95-.31 3.12 1.18a10.4 10.4 0 0 1 5.68 0c2.17-1.49 3.12-1.18 3.12-1.18.61 1.59.23 2.77.11 3.06.72.8 1.16 1.82 1.16 3.08 0 4.41-2.64 5.39-5.15 5.67.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .27.18.6.69.49A10.21 10.21 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
  </svg>
)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const formReady = isSet(site.formspreeId)
  const emailReady = isSet(site.email)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim() || !EMAIL_RE.test(form.email.trim())) e.email = 'Please enter a valid email.'
    if (!form.message.trim()) e.message = 'Please add a short message.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    if (!validate()) return

    if (!formReady) { setStatus('error'); return } // no Formspree form connected yet

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Contact – ${form.name}`,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const social = [
    { label: 'LinkedIn', handle: site.linkedinHandle, href: site.linkedin, cta: 'View Profile', Icon: LinkedInIcon, iconBg: 'bg-[#0A66C2]/15', iconColor: 'text-[#0A66C2]' },
    { label: 'GitHub', handle: site.githubHandle, href: site.github, cta: 'View GitHub', Icon: GitHubIcon, iconBg: 'bg-fg/10', iconColor: 'text-fg' },
  ]

  const field = 'mt-1.5 w-full rounded-xl border bg-transparent px-4 py-2.5 outline-none transition focus:border-a1'

  return (
    <Section id="contact" title="Let's work together" intro="Open to backend and Android development internships, software roles, UI/UX internships and freelance projects.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          <Reveal delay={0}>
            {isSet(site.email) ? (
              <a href={`mailto:${site.email}`} className="glass block rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-a1">
                <p className="text-sm text-muted">Email</p><p className="mt-1 break-all font-display text-lg font-bold">{site.email}</p>
              </a>
            ) : (
              <div className="rounded-2xl border border-dashed border-line p-6"><p className="text-sm text-muted">Email</p><p className="mt-1 font-semibold">{site.email}</p></div>
            )}
          </Reveal>

          {social.map(({ label, handle, href, cta, Icon, iconBg, iconColor }, i) => (
            <Reveal key={label} delay={(i + 1) * 80}>
              {isSet(href) ? (
                <a
                  href={href} target="_blank" rel="noreferrer"
                  className="group glass relative flex items-center gap-3.5 overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-a1"
                >
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(140px circle at 20% 50%, rgb(var(--c1) / .18), transparent 70%)' }} />
                  <span className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-xl ${iconBg} ${iconColor} transition-transform duration-300 group-hover:scale-105`}>
                    <Icon />
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="block font-display text-base font-bold">{label}</span>
                    {isSet(handle) && <span className="block truncate text-sm text-muted">{handle}</span>}
                  </span>
                  <span className="relative shrink-0 text-sm font-bold text-a1">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">{cta} →</span>
                  </span>
                </a>
              ) : (
                <div className="rounded-2xl border border-dashed border-line p-4"><p className="text-sm text-muted">{label}</p><p className="mt-1 font-semibold">{href}</p></div>
              )}
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <form className="glass rounded-2xl p-6" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-muted">Your name</span>
                <input value={form.name} onChange={set('name')} className={`${field} ${errors.name ? 'border-rose-400' : 'border-line'}`} placeholder="Full name" />
                {errors.name && <span className="mt-1 block text-xs font-semibold text-rose-400">{errors.name}</span>}
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-muted">Your email</span>
                <input type="email" value={form.email} onChange={set('email')} className={`${field} ${errors.email ? 'border-rose-400' : 'border-line'}`} placeholder="you@example.com" />
                {errors.email && <span className="mt-1 block text-xs font-semibold text-rose-400">{errors.email}</span>}
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-semibold text-muted">Message</span>
              <textarea value={form.message} onChange={set('message')} rows={5} className={`${field} resize-none ${errors.message ? 'border-rose-400' : 'border-line'}`} placeholder="What would you like to talk about?" />
              {errors.message && <span className="mt-1 block text-xs font-semibold text-rose-400">{errors.message}</span>}
            </label>

            <MagneticButton as="button" type="submit" disabled={status === 'sending'} className="btn-primary mt-5 !text-white hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60">
              {status === 'sending' ? (
                <>
                  <span aria-hidden="true" className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending…
                </>
              ) : 'Send Message'}
            </MagneticButton>

            <p role="status" aria-live="polite" className="mt-3 text-sm font-semibold">
              {status === 'sent' && <span className="text-emerald-400">Message sent successfully!</span>}
              {status === 'error' && !formReady && <span className="text-amber-400">Contact form isn't connected yet — email {emailReady ? site.email : '[Add Email]'} directly for now.</span>}
              {status === 'error' && formReady && <span className="text-rose-400">Something went wrong. Please try again.</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
