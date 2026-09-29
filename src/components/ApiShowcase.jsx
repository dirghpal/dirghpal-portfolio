import { useState } from 'react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import TypedCode from './TypedCode.jsx'

// Real endpoints and response shape from the CRM API project (see its API_DOCUMENTATION.md).
const tabs = [
  {
    method: 'POST', path: '/api/lead/save', color: 'text-emerald-400', border: 'border-emerald-400/40',
    req: `{\n  "name": "Acme Traders",\n  "phone": "9876543210",\n  "source": "website",\n  "category_id": 4\n}`,
    res: `{\n  "status": 1,\n  "msg": "Lead saved successfully",\n  "error": "",\n  "error_array": [],\n  "data": {\n    "id": 118,\n    "name": "Acme Traders",\n    "stage": "new"\n  }\n}`,
  },
  {
    method: 'GET', path: '/api/lead/list', color: 'text-sky-400', border: 'border-sky-400/40',
    req: `Authorization: Bearer <token>\nAccept: application/json`,
    res: `{\n  "status": 1,\n  "msg": "success message",\n  "error": "",\n  "error_array": [],\n  "data": [\n    { "id": 118, "name": "Acme Traders" },\n    { "id": 117, "name": "Bright Retail" }\n  ]\n}`,
  },
  {
    method: 'POST', path: '/api/deal/update', color: 'text-amber-400', border: 'border-amber-400/40',
    req: `{\n  "id": 42,\n  "stage": "negotiation",\n  "amount": 45000\n}`,
    res: `{\n  "status": 1,\n  "msg": "Deal updated successfully",\n  "error": "",\n  "error_array": [],\n  "data": { "id": 42, "stage": "negotiation" }\n}`,
  },
  {
    method: 'POST', path: '/api/lead/delete', color: 'text-rose-400', border: 'border-rose-400/40',
    req: `{\n  "id": 118\n}`,
    res: `{\n  "status": 1,\n  "msg": "Lead deleted successfully",\n  "error": "",\n  "error_array": [],\n  "data": []\n}`,
  },
]

export default function ApiShowcase() {
  const [active, setActive] = useState(0)
  const t = tabs[active]
  return (
    <Section id="api" title="API in action" intro="A look at the request and response shape from my CRM API project — Laravel 11 with Sanctum authentication.">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border line shadow-2xl shadow-black/30" style={{ background: `rgb(var(--code-bg))` }}>
          <div className="flex items-center gap-1 overflow-x-auto border-b line px-3 py-2">
            <span className="mr-2 hidden gap-1.5 sm:flex" aria-hidden="true">
              <i className="h-2.5 w-2.5 rounded-full bg-rose-500/70" /><i className="h-2.5 w-2.5 rounded-full bg-amber-400/70" /><i className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </span>
            {tabs.map((tb, i) => (
              <button key={tb.path} onClick={() => setActive(i)}
                className={`shrink-0 rounded-lg border px-3 py-1.5 font-mono text-xs font-bold transition-all duration-300 ${i === active ? `${tb.border} ${tb.color} bg-white/5` : 'border-transparent text-muted hover:text-fg'}`}>
                {tb.method}
              </button>
            ))}
          </div>
          <div key={active} className="grid gap-0 md:grid-cols-2">
            <div className="border-b line p-5 md:border-b-0 md:border-r">
              <p className="font-mono text-xs font-bold text-muted"><span className={t.color}>{t.method}</span> {t.path}</p>
              <TypedCode text={t.req} className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-fg/90" />
            </div>
            <div className="p-5">
              <p className="font-mono text-xs font-bold text-muted">Response <span className="text-emerald-400">200</span></p>
              <TypedCode text={t.res} className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-fg/90" />
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">Illustrative example in the CRM API's response format — not a live request.</p>
      </Reveal>
    </Section>
  )
}
