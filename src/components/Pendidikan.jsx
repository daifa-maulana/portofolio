import Section from './Section'
import { GraduationCap, Award, MapPin, Sparkles, ShieldCheck, ExternalLink, Calendar, FileText } from 'lucide-react'
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Formal Education */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-xl hover:shadow-xl transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-200/60 dark:border-blue-800/60">
              <Award className="w-3.5 h-3.5" />
              <span>{t.statusBadge}</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.degree}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium text-sm sm:text-base flex items-center gap-1.5 mt-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                {t.campus}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t.statusTitle}
            </span>
            <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-accent dark:text-accent-dark text-xs font-extrabold border border-blue-200/60 dark:border-blue-800/60">
              {t.statusValue}
            </span>
          </div>
        </div>

        {/* Card 2: Gemini Certified */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-xl hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between group">
          {/* Subtle background glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
              {/* Badge Image Box */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200 dark:border-slate-700/80 p-2 shrink-0 shadow-sm flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={`${import.meta.env.BASE_URL}gemini-certified.png`}
                  alt="Siswa Tersertifikasi Gemini"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200/60 dark:border-emerald-800/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t.certBadge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  {t.certName}
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{t.certDate}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 relative z-10">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {t.certDesc}
              </p>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 relative z-10">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              Official Document
            </span>

            <a
              href={`${import.meta.env.BASE_URL}sertifikat-gemini.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:text-accent dark:hover:text-accent-dark border border-slate-200 dark:border-slate-700 hover:border-accent dark:hover:border-accent-dark text-xs font-bold transition-all shadow-sm active:scale-95 group/btn"
            >
              <span>{t.certBtn}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-accent dark:group-hover/btn:text-accent-dark transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}


