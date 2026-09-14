import Section from './Section'
import { Briefcase, Calendar, Building2, CheckCircle2, ShieldCheck, Globe } from 'lucide-react'

const highlights = [
  'Pembuatan & pengelolaan situs web pusat baru (geo-metri.id)',
  'Pembuatan & pengelolaan 4 website cabang perusahaan secara berkala',
  'Optimasi Technical SEO hingga mencapai Site Health Score 100/100 di Ahrefs Audit',
  'Audit dan pemeliharaan indeksasi via Google Search Console (GSC)',
  'Optimasi Google Business Profile (GBP) untuk visibilitas cabang perusahaan',
  'Pengembangan fitur dan antarmuka interaktif menggunakan React.js, Tailwind CSS, & Supabase'
]

export default function Pengalaman() {
  return (
    <Section
      id="pengalaman"
      icon={Briefcase}
      title="Pengalaman Kerja & Magang"
      subtitle="Jejak profesional dan kontribusi dalam proyek industri nyata"
    >
      <div className="relative pl-6 sm:pl-8 border-l-2 border-accent/40 dark:border-accent-dark/40 ml-2">
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#090d16] border-4 border-accent dark:border-accent-dark shadow-md" />
        
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-lg backdrop-blur-xl space-y-5 hover:shadow-xl transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold mb-2 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Magang Aktif
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Web Developer Intern
              </h3>
              <p className="text-accent dark:text-accent-dark font-semibold text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                <Building2 className="w-4 h-4" />
                Geometri Indonesia
              </p>
            </div>
            
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 w-fit">
              <Calendar className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
              2026 – Sekarang
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            Bertanggung jawab penuh atas pembuatan & pengelolaan situs web pusat baru (<strong className="text-slate-900 dark:text-white font-mono">geo-metri.id</strong>), pembuatan & pemeliharaan 4 website cabang perusahaan, serta optimasi performa mesin pencari (*Technical SEO*).
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-accent dark:text-accent-dark shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Web Pusat & 4 Cabang</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Dibuat & dikelola secara rutin</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Site Health 100/100</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Terverifikasi Ahrefs Audit</div>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Tanggung Jawab & Pencapaian Utama:
            </div>
            <div className="space-y-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
