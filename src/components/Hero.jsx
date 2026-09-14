import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowDown, 
  FileDown, 
  Sparkles, 
  Globe2, 
  Activity, 
  FolderGit2
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
  { name: 'Technical SEO', color: 'text-blue-500 dark:text-blue-400' },
  { name: 'Tailwind CSS', color: 'text-indigo-500 dark:text-indigo-400' }
]

const stats = [
  { icon: Globe2, value: '5 Web', label: 'Pusat (geo-metri.id) & 4 Cabang' },
  { icon: Activity, value: '100/100', label: 'Site Health Score (Ahrefs)' },
  { icon: FolderGit2, value: '9+', label: 'Proyek Web Selesai' },
]

export default function Hero() {
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
              Web Developer Intern @ Geometri Indonesia · S1 Teknik Informatika
            </p>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Fokus pada pengembangan web modern, pemeliharaan sistem, serta optimasi Technical SEO —
            memanfaatkan workflow efisien untuk menghasilkan solusi web yang responsif, cepat, dan ramah mesin pencari.
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

        {/* RIGHT: Clean Photo Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm group">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            <div className="relative rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl p-4 backdrop-blur-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-900/5">
                <img
                  src={import.meta.env.BASE_URL + 'daifa.jpg'}
                  alt="Da'ifa Maulana"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Web Developer Intern
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
