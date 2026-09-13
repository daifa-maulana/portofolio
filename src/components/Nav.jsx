import { useState, useEffect } from 'react'
import useTheme from '../hooks/useTheme'
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react'

const links = [
  { label: 'Profil', href: '#profil' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Skills', href: '#skills' },
  { label: 'SEO & Marketing', href: '#digital-marketing' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Organisasi', href: '#organisasi' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [theme, toggleTheme] = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Active section detector
      const sections = links.map(l => document.querySelector(l.href)).filter(Boolean)
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(`#${section.id}`)
          break
        }
      }
      if (window.scrollY < 150) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-2 font-mono font-black text-slate-900 dark:text-white tracking-tight text-sm"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            DM
          </span>
          <span className="font-bold tracking-normal hidden sm:inline">
            Da'ifa<span className="text-accent dark:text-accent-dark">.dev</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
          {links.map(l => {
            const isActive = activeSection === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-accent dark:text-accent-dark shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {l.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark transition-all shadow-sm active:scale-95"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
          
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            className="lg:hidden w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 flex items-center justify-center text-slate-700 dark:text-slate-200 active:scale-95"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2 shadow-xl animate-in fade-in duration-200">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
