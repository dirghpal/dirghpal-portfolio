import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Backend from './components/Backend.jsx'
import ApiShowcase from './components/ApiShowcase.jsx'
import Architecture from './components/Architecture.jsx'
import Android from './components/Android.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  return (
    <div className="page-in">
      <CursorGlow />
      <ScrollProgress />
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-bg focus:px-4 focus:py-2">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Experience /><Backend /><ApiShowcase /><Architecture /><Android /><Projects /><Education /><Resume /><Contact />
      </main>
      <Footer />
    </div>
  )
}
