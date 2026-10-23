import Section from './Section'
import { Cpu, Code2, Database, Search, Zap } from 'lucide-react'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'
import { usePortfolio } from '../context/PortfolioContext'
import {
  ReactIcon,
  TailwindIcon,
  JSIcon,
  SupabaseIcon,
  PhpIcon,
  MysqlIcon,
  NextjsIcon,
  VercelIcon,
  Html5Icon,
  Css3Icon,
  GitIcon,
  AhrefsIcon,
  GscIcon,
  GbpIcon,
  Ga4Icon
} from './Icons'

// Map skill names to icon components — fallback to Cpu for unknowns
const ICON_MAP = {
  'react.js': ReactIcon,
  'tailwind css': TailwindIcon,
  'javascript': JSIcon,
  'javascript es6+': JSIcon,
  'next.js': NextjsIcon,
  'html5': Html5Icon,
  'css3': Css3Icon,
  'supabase': SupabaseIcon,
  'php': PhpIcon,
  'mysql': MysqlIcon,
  'git & github': GitIcon,
  'git': GitIcon,
  'github': GitIcon,
  'restful apis': Database,
  'vercel deployment': VercelIcon,
  'vercel': VercelIcon,
  'ahrefs audit': AhrefsIcon,
  'ahrefs': AhrefsIcon,
  'google search console': GscIcon,
  'google business profile': GbpIcon,
  'google analytics (ga4)': Ga4Icon,
  'ga4': Ga4Icon,
  'ai assistant workflow': Cpu,
}

function getIcon(name) {
  return ICON_MAP[name.toLowerCase()] || Zap
}

const HOVER_STYLES = {
  cyan: {
    border: 'hover:border-cyan-500/50',
    text: 'group-hover:text-cyan-500 dark:group-hover:text-cyan-400',
  },
  emerald: {
    border: 'hover:border-emerald-500/50',
    text: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400',
  },
  purple: {
    border: 'hover:border-purple-500/50',
    text: 'group-hover:text-purple-500 dark:group-hover:text-purple-400',
  },
}

function MarqueeRow({ items, direction = 'forward', hoverColor = 'cyan' }) {
  const tripled = [...items, ...items, ...items]
  const styles = HOVER_STYLES[hoverColor] || HOVER_STYLES.cyan

  return (
    <div className="relative overflow-hidden py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60">
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
      <div className={direction === 'reverse' ? 'animate-marquee-reverse gap-3.5 sm:gap-4 px-2' : 'animate-marquee gap-3.5 sm:gap-4 px-2'}>
        {tripled.map((item, idx) => {
          const Icon = getIcon(item.name)
          return (
            <div
              key={idx}
              className={`flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shrink-0 ${styles.border} shadow-sm hover:shadow-md transition-all cursor-pointer group`}
            >
              <div className={`p-2.5 rounded-xl border ${item.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 ${styles.text} transition-colors`}>
                  {item.name}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {item.desc}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Skills() {
  const [lang] = useLanguage()
  const { content, skillItems } = usePortfolio()
  const t = (content && content[lang]?.skills) || translations[lang].skills

  const frontend = skillItems?.frontend || []
  const backend = skillItems?.backend || []
  const seo = skillItems?.seo || []

  return (
    <Section
      id="skills"
      icon={Cpu}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="space-y-6 sm:space-y-8">
        {/* 1. FRONTEND SLIDER */}
        <div className="p-5 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-500">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{t.catFrontend}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.subFrontend}</p>
            </div>
          </div>
          {frontend.length > 0 ? (
            <MarqueeRow items={frontend} direction="forward" hoverColor="cyan" />
          ) : (
            <p className="text-xs text-slate-400 italic">Belum ada item. Tambahkan di Admin → Skills.</p>
          )}
        </div>

        {/* 2. BACKEND & DATABASE SLIDER */}
        <div className="p-5 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{t.catBackend}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.subBackend}</p>
            </div>
          </div>
          {backend.length > 0 ? (
            <MarqueeRow items={backend} direction="reverse" hoverColor="emerald" />
          ) : (
            <p className="text-xs text-slate-400 italic">Belum ada item. Tambahkan di Admin → Skills.</p>
          )}
        </div>

        {/* 3. SEO & WORKFLOW TOOLS SLIDER */}
        <div className="p-5 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-500">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{t.catSeo}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.subSeo}</p>
            </div>
          </div>
          {seo.length > 0 ? (
            <MarqueeRow items={seo} direction="forward" hoverColor="purple" />
          ) : (
            <p className="text-xs text-slate-400 italic">Belum ada item. Tambahkan di Admin → Skills.</p>
          )}
        </div>
      </div>
    </Section>
  )
}
