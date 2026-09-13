import Section from './Section'
import { Cpu, Star, Layers, Sparkles, Code } from 'lucide-react'

const tiers = [
  {
    label: 'Utama & Paling Sering Dipakai',
    icon: Star,
    badge: 'Core Stack',
    style: 'border-accent/40 dark:border-accent-dark/40 bg-gradient-to-b from-blue-50/40 via-white/80 to-white/80 dark:from-blue-950/20 dark:via-slate-900/80 dark:to-slate-900/80 shadow-md',
    chipStyle: 'bg-accent dark:bg-accent-dark text-white font-semibold shadow-sm shadow-blue-500/20',
    items: ['React.js', 'Supabase', 'Tailwind CSS', 'Technical SEO', 'JavaScript (ES6+)'],
  },
  {
    label: 'Pernah Dikerjakan / Berpengalaman',
    icon: Layers,
    badge: 'Familiar Stack',
    style: 'border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/80',
    chipStyle: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/70',
    items: ['PHP', 'HTML5 & CSS3', 'MySQL', 'Next.js', 'Vercel Deployment', 'Git & GitHub'],
  },
  {
    label: 'AI-Assisted & Terus Dieksplorasi',
    icon: Sparkles,
    badge: 'Learning / AI-Powered',
    style: 'border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/80',
    chipStyle: 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60',
    items: ['Prompt Engineering & AI Coding', 'TypeScript', 'Laravel', 'Java (OOP)', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <Section
      id="skills"
      icon={Cpu}
      title="Keahlian & Penguasaan Teknologi"
      subtitle="Teknologi dan tools yang rutin saya gunakan dalam pengembangan web"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t, i) => {
          const Icon = t.icon
          return (
            <div
              key={i}
              className={`p-6 rounded-3xl border ${t.style} backdrop-blur-xl space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-accent-dark">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {t.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  {t.label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {t.items.map((s, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium ${t.chipStyle}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
