import Section from './Section'
import { User, Sparkles, Code2, Bot, Search } from 'lucide-react'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'

export default function Profil() {
  const [lang] = useLanguage()
  const t = translations[lang].profil

  return (
    <Section
      id="profil"
      icon={User}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Main Narrative (Span 7) */}
        <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-accent dark:text-accent-dark text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              {t.heading}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {t.paragraph1}
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {t.paragraph2}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
              {t.location}
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
              {t.focus}
            </span>
          </div>
        </div>

        {/* Right Column: Key Pillars (Span 5) */}
        <div className="md:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-accent-dark shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.pillar1Title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                {t.pillar1Desc}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.pillar2Title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                {t.pillar2Desc}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.pillar3Title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                {t.pillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
