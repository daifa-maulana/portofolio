import Section from './Section'
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react'

const tugas = [
  'Website Maintenance & Bug Fixing',
  'Technical SEO & Site Health 100',
  'Google Search Console (GSC) Audit',
  'Google Business Profile (GBP) Optimization',
]

export default function Pengalaman() {
  return (
    <Section
      id="pengalaman"
      icon={Briefcase}
      title="Pengalaman Kerja & Magang"
      subtitle="Jejak profesional dan kontribusi industri"
    >
      <div className="relative pl-6 sm:pl-8 border-l-2 border-accent/40 dark:border-accent-dark/40 ml-2">
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#090d16] border-4 border-accent dark:border-accent-dark shadow-md" />
        
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-lg backdrop-blur-xl space-y-4 hover:shadow-xl transition-all">
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
              Jun 2026 – Sekarang
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            Bertanggung jawab langsung atas maintenance, pengembangan 4 website cabang perusahaan, peningkatan technical SEO dan site health (100/100 Ahrefs), serta pengelolaan Google Search Console dan Google Business Profile.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {tugas.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
