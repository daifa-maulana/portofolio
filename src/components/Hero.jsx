import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowDown, 
  FileDown, 
  Sparkles, 
  Globe2, 
  Activity, 
  FolderGit2,
  User,
  Code2,
  CheckCircle2
} from 'lucide-react'
import { GithubIcon } from './Icons'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'

const contacts = [
  { icon: Mail, label: 'daifamaul17@gmail.com', href: 'mailto:daifamaul17@gmail.com' },
  { icon: Phone, label: '0895-2539-7093', href: 'tel:089525397093' },
  { icon: GithubIcon, label: 'github.com/daifa17', href: 'https://github.com/daifa17' },
  { icon: MapPin, label: 'Bandung, Indonesia', href: null },
]

const techTags = [
  { name: 'React.js', color: 'text-cyan-500 dark:text-cyan-400' },
  { name: 'Supabase', color: 'text-emerald-500 dark:text-emerald-400' },
  { name: 'Technical SEO', color: 'text-blue-500 dark:text-blue-400' },
  { name: 'Tailwind CSS', color: 'text-indigo-500 dark:text-indigo-400' }
]

const getAssetUrl = (path) => {
  if (!path) return ''
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return base + cleanPath
}

export default function Hero() {
  const [heroTab, setHeroTab] = useState('code') // 'photo' | 'code'
  const [lang] = useLanguage()
  const t = translations[lang].hero

  const stats = [
    { icon: Globe2, value: '5 Web', label: t.statWeb },
    { icon: Activity, value: '100/100', label: t.statHealth },
    { icon: FolderGit2, value: '9+', label: t.statProjects },
  ]

  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 pt-24 sm:pt-28 pb-12">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-blue-950 dark:text-blue-200">
              {t.badge}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {t.greeting}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">
                {t.name}
              </span>{' '}
              <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">
              {t.role}
            </p>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {t.bio}
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            {contacts.map((c, i) => {
              const Icon = c.icon
              return c.href ? (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark shadow-sm hover:shadow transition-all group"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors" />
                  {c.label}
                </a>
              ) : (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  {c.label}
                </span>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <a
              href="#proyek"
              className="animate-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-accent dark:bg-accent-dark text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              {t.btnProjects}
              <ArrowDown className="w-4 h-4" />
            </a>
            
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark hover:-translate-y-0.5 shadow-sm transition-all"
            >
              {t.btnContact}
            </a>

            <a
              href="mailto:daifamaul17@gmail.com?subject=Interview%20/%20CV%20Request%20-%20Da'ifa%20Maulana"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark transition-all"
              title="Request CV via Email"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.btnResume}</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Tabbed Photo & developer.ts Interactive Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            <div className="relative rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl p-4 backdrop-blur-xl space-y-3">
              {/* Card Window Header & Tabs */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-medium">
                  <button
                    onClick={() => setHeroTab('photo')}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
                      heroTab === 'photo'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Foto</span>
                  </button>

                  <button
                    onClick={() => setHeroTab('code')}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
                      heroTab === 'code'
                        ? 'bg-accent dark:bg-accent-dark text-white shadow-sm font-semibold'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>developer.ts</span>
                  </button>
                </div>
              </div>

              {/* Tab Content 1: Foto */}
              {heroTab === 'photo' ? (
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-900/5">
                    <img
                      src={getAssetUrl('daifa.jpg')}
                      alt="Da'ifa Maulana"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      {t.tagWeb}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {techTags.map((t, i) => (
                      <div
                        key={i}
                        className="py-2 px-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center flex items-center justify-center gap-1.5"
                      >
                        <span className={`text-xs font-bold ${t.color}`}>{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Tab Content 2: developer.ts Code Snippet */
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-2.5 bg-[#070b14] text-slate-200 rounded-2xl border border-slate-800 shadow-inner">
                  <div className="text-slate-500">// developer.ts</div>
                  <div>
                    <span className="text-purple-400 font-bold">const</span>{' '}
                    <span className="text-blue-400 font-bold">developer</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-400">"Da'ifa Maulana"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-400">"Web Dev Intern"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">company:</span>{' '}
                    <span className="text-emerald-400">"Geometri ID"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-amber-400">"Informatika"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">siteHealth:</span>{' '}
                    <span className="text-emerald-400">"100/100 (Ahrefs)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">openToOpportunities:</span>{' '}
                    <span className="text-blue-400 font-bold">true</span>
                  </div>
                  <div>{'};'}</div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Ready for hire</span>
                    </span>
                    <span className="text-slate-500 font-mono">TypeScript 5.0</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* QUICK IMPACT STATS BAR */}
      <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-sm hover:border-accent/40 dark:hover:border-accent-dark/40 hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-accent-dark group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {s.label}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
