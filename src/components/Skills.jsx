import Section from './Section'
import { Cpu, Code2, Database, Search } from 'lucide-react'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'
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

const frontendStack = [
  { name: 'React.js', desc: 'Frontend UI Library', icon: ReactIcon, color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30' },
  { name: 'Tailwind CSS', desc: 'Utility-First Styling', icon: TailwindIcon, color: 'text-sky-500 bg-sky-500/10 border-sky-500/30' },
  { name: 'JavaScript ES6+', desc: 'Core Web Logic', icon: JSIcon, color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' },
  { name: 'Next.js', desc: 'React Framework', icon: NextjsIcon, color: 'text-slate-800 dark:text-white bg-slate-500/10 border-slate-500/30' },
  { name: 'HTML5', desc: 'Semantic Markup', icon: Html5Icon, color: 'text-orange-500 bg-orange-500/10 border-orange-500/30' },
  { name: 'CSS3', desc: 'Layout & Animations', icon: Css3Icon, color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' },
]

const backendStack = [
  { name: 'Supabase', desc: 'Postgres & Auth BaaS', icon: SupabaseIcon, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' },
  { name: 'PHP', desc: 'Server-Side Scripting', icon: PhpIcon, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30' },
  { name: 'MySQL', desc: 'Relational Database', icon: MysqlIcon, color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' },
  { name: 'Git & GitHub', desc: 'Version Control', icon: GitIcon, color: 'text-orange-600 bg-orange-600/10 border-orange-600/30' },
  { name: 'RESTful APIs', desc: 'Backend Integration', icon: Database, color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30' },
]

const seoStack = [
  { name: 'Ahrefs Audit', desc: 'Site Health 100/100', icon: AhrefsIcon, color: 'text-blue-600 bg-blue-600/10 border-blue-600/30' },
  { name: 'Google Search Console', desc: 'Indexing & Crawling', icon: GscIcon, color: 'text-sky-500 bg-sky-500/10 border-sky-500/30' },
  { name: 'Google Business Profile', desc: 'Local SEO Optimization', icon: GbpIcon, color: 'text-rose-500 bg-rose-500/10 border-rose-500/30' },
  { name: 'Google Analytics (GA4)', desc: 'Traffic Analytics', icon: Ga4Icon, color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' },
  { name: 'Vercel Deployment', desc: 'Automated CI/CD', icon: VercelIcon, color: 'text-slate-800 dark:text-slate-200 bg-slate-400/10 border-slate-400/30' },
  { name: 'AI Assistant Workflow', desc: 'Accelerated Coding', icon: Cpu, color: 'text-purple-500 bg-purple-500/10 border-purple-500/30' },
]

export default function Skills() {
  const [lang] = useLanguage()
  const t = translations[lang].skills

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

          <div className="relative overflow-hidden py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee gap-3.5 sm:gap-4 px-2">
              {[...frontendStack, ...frontendStack, ...frontendStack].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shrink-0 hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className={`p-2.5 rounded-xl border ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
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

          <div className="relative overflow-hidden py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee-reverse gap-3.5 sm:gap-4 px-2">
              {[...backendStack, ...backendStack, ...backendStack].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shrink-0 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className={`p-2.5 rounded-xl border ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
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

          <div className="relative overflow-hidden py-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60">
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 dark:from-[#090d16] to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee gap-3.5 sm:gap-4 px-2">
              {[...seoStack, ...seoStack, ...seoStack].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shrink-0 hover:border-purple-500/50 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className={`p-2.5 rounded-xl border ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
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
        </div>
      </div>
    </Section>
  )
}
