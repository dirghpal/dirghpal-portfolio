import { site } from '../data/content.js'
export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">
      © {new Date().getFullYear()} {site.name}. Designed and built by me.
    </footer>
  )
}
