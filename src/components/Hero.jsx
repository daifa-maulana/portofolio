import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowDown, 
  FileDown, 
  Sparkles, 
  Code2, 
  UserCircle2, 
  Globe2, 
  Activity, 
  GraduationCap, 
  FolderGit2,
  CheckCircle2
} from 'lucide-react'
import { GithubIcon } from './Icons'

const contacts = [
  { icon: Mail, label: 'daifamaul17@gmail.com', href: 'mailto:daifamaul17@gmail.com' },
  { icon: Phone, label: '0895-2539-7093', href: 'tel:089525397093' },
  { icon: GithubIcon, label: 'github.com/daifa17', href: 'https://github.com/daifa17' },
  { icon: MapPin, label: 'Bandung, Indonesia', href: null },
]

const techTags = [
  { name: 'React.js', color: 'text-cyan-500 dark:text-cyan-400' },
  { name: 'Supabase', color: 'text-emerald-500 dark:text-emerald-400' },
  { name: 'SEO Score 100', color: 'text-blue-500 dark:text-blue-400' },
  { name: 'GBP & GSC', color: 'text-indigo-500 dark:text-indigo-400' }
]

const stats = [
  { icon: Globe2, value: '4+', label: 'Website Cabang Dikelola' },
  { icon: Activity, value: '100', label: 'Site Health Score Ahrefs' },
  { icon: GraduationCap, value: '3.78', label: 'IPK Informatika (Smt 5)' },
  { icon: FolderGit2, value: '9+', label: 'Proyek Web Selesai' },
]

export default function Hero() {
  const [activeCardView, setActiveCardView] = useState('photo') // 'photo' | 'code'

  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14 pb-12">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-blue-950 dark:text-blue-200">
              Sedang magang @ Geometri Indonesia
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Halo, saya{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">
                Da'ifa Maulana
              </span>{' '}
              <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">
              Web Developer Intern @ Geometri Indonesia · Mahasiswa Informatika
            </p>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Fokus pada pengembangan & pemeliharaan web, optimasi performa, serta technical SEO —
            memanfaatkan AI sebagai akselerator kerja untuk menghasilkan solusi web yang presisi, cepat, dan terukur.
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
              Lihat Proyek
              <ArrowDown className="w-4 h-4" />
            </a>
            
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark hover:-translate-y-0.5 shadow-sm transition-all"
            >
              Hubungi Saya
            </a>

            <a
              href="mailto:daifamaul17@gmail.com?subject=Undangan%20Interview%20/%20Permintaan%20CV%20-%20Da'ifa%20Maulana"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark transition-all"
              title="Minta CV Lengkap via Email"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume / CV</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Photo / Code Switcher Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm group">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            <div className="relative rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl p-4 backdrop-blur-xl">
              {/* Tab Switcher Controls */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                
                <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                  <button
                    onClick={() => setActiveCardView('photo')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeCardView === 'photo'
                        ? 'bg-white dark:bg-slate-900 text-accent dark:text-accent-dark shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <UserCircle2 className="w-3.5 h-3.5" />
                    <span>Foto</span>
                  </button>
                  <button
                    onClick={() => setActiveCardView('code')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeCardView === 'code'
                        ? 'bg-white dark:bg-slate-900 text-accent dark:text-accent-dark shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>developer.ts</span>
                  </button>
                </div>
              </div>

              {/* View 1: Photo View */}
              {activeCardView === 'photo' && (
                <div className="animate-in fade-in zoom-in-95 duration-200">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-900/5">
                    <img
                      src="/daifa.jpg"
                      alt="Da'ifa Maulana"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Web Developer
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
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
              )}

              {/* View 2: Interactive Code Editor View */}
              {activeCardView === 'code' && (
                <div className="animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-4 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto aspect-[4/5] flex flex-col justify-between border border-slate-800 shadow-inner">
                    <div className="space-y-1">
                      <div className="text-slate-500">// developer.ts</div>
                      <div>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-400">developer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">name:</span>{' '}
                        <span className="text-emerald-300">"Da'ifa Maulana"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">role:</span>{' '}
                        <span className="text-emerald-300">"Web Dev Intern"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">company:</span>{' '}
                        <span className="text-cyan-300">"Geometri ID"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">education:</span>{' '}
                        <span className="text-amber-300">"Informatika (3.78)"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">siteHealth:</span>{' '}
                        <span className="text-emerald-400">"100/100 (Ahrefs)"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">openToOpportunities:</span>{' '}
                        <span className="text-blue-400">true</span>
                      </div>
                      <div>&#125;;</div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> Ready for hire
                      </span>
                      <span className="text-[10px] text-slate-500">TypeScript 5.0</span>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      ⚡ Menulis kode clean & SEO-friendly
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* QUICK IMPACT STATS BAR */}
      <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-sm hover:border-accent/40 dark:hover:border-accent-dark/40 hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-accent-dark group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-tight">
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
