import Section from './Section'
import { GraduationCap, Award, MapPin } from 'lucide-react'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'

export default function Pendidikan() {
  const [lang] = useLanguage()
  const t = translations[lang].pendidikan

  return (
    <Section
      id="pendidikan"
      icon={GraduationCap}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-xl hover:shadow-xl transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-accent-dark/10 text-accent dark:text-accent-dark text-xs font-bold border border-blue-200/60 dark:border-blue-800/60">
              <Award className="w-3.5 h-3.5" />
              <span>{t.statusBadge}</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {t.degree}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 font-medium text-sm sm:text-base flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              {t.campus}
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-950/40 dark:to-indigo-950/40 px-6 py-4 rounded-2xl border border-blue-200/60 dark:border-blue-800/60 shadow-inner shrink-0">
            <div className="text-left md:text-right">
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t.statusTitle}
              </div>
              <div className="text-lg font-extrabold text-accent dark:text-accent-dark">
                {t.statusValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
