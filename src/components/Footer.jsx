import { ArrowUp } from 'lucide-react'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'

export default function Footer() {
  const [lang] = useLanguage()
  const t = translations[lang].footer
  const navT = translations[lang].nav

  const links = [
    { label: navT.profil, href: '#profil' },
    { label: navT.pengalaman, href: '#pengalaman' },
    { label: navT.proyek, href: '#proyek' },
    { label: navT.skills, href: '#skills' },
    { label: navT.pendidikan, href: '#pendidikan' },
    { label: navT.organisasi, href: '#organisasi' },
    { label: navT.kontak, href: '#kontak' },
  ]

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 mt-16 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-mono font-black text-slate-900 dark:text-white text-sm">
            DM<span className="text-accent dark:text-accent-dark">.</span>{' '}
            <span className="font-normal text-slate-500 dark:text-slate-400 text-xs ml-1">
              Da'ifa Maulana
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            © 2026 {t.rights}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-xs font-medium">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#hero"
          aria-label="Kembali ke atas"
          className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark hover:-translate-y-1 transition-all shadow-sm"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  )
}
