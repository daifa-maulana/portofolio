import { useEffect, useState } from 'react'
import Section from './Section'
import useInView from '../hooks/useInView'
import { Search, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, BarChart2 } from 'lucide-react'

const tools = [
  'Ahrefs SEO Audit',
  'Google Search Console',
  'Google Analytics 4',
  'Google Business Profile (GBP)'
]

function useCountUp(target, active) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const start = performance.now()
    const duration = 1000
    const step = now => {
      const p = Math.min((now - start) / duration, 1)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return n
}

export default function DigitalMarketing() {
  const [ref, visible] = useInView(0.3)
  const score = useCountUp(100, visible)

  return (
    <Section
      id="digital-marketing"
      icon={Search}
      title="Digital Marketing & Technical SEO"
      subtitle="Optimasi performa pencarian organik, site health score, dan manajemen aset digital perusahaan"
    >
      <div
        ref={ref}
        className="relative overflow-hidden p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-xl backdrop-blur-xl"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Circular Score Visual */}
          <div className="lg:col-span-5 flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 shadow-inner">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 drop-shadow-sm" viewBox="0 0 120 120">
                <circle
                  className="text-slate-200 dark:text-slate-700/70 stroke-current"
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  strokeWidth="10"
                />
                <circle
                  className="text-blue-600 dark:text-blue-400 stroke-current transition-all duration-700"
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="314.159"
                  strokeDashoffset={314.159 * (1 - score / 100)}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  {score}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3" /> Excellent
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-1">
              <div className="font-bold text-base text-slate-900 dark:text-white">
                Site Health Score
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                geo-metri.id · Ahrefs Verified
              </div>
            </div>
          </div>

          {/* Details & Impact Stats */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Menangani technical SEO dan site health untuk domain utama perusahaan (
              <span className="font-semibold text-slate-900 dark:text-white font-mono">geo-metri.id</span>
              ) selama magang di Geometri Indonesia — mengidentifikasi broken links, metadata error, dan
              masalah crawlability hingga mencapai skor sempurna.
            </p>

            {/* Impact metric badge */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  SEO Issue Fixing
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-slate-400 line-through text-sm font-semibold">33</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
                  <span className="text-lg font-black text-slate-900 dark:text-white">18</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    -45%
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Crawlability Status
                </div>
                <div className="text-lg font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-1">
                  <CheckCircle2 className="w-4 h-4" /> 100% Healthy
                </div>
              </div>
            </div>

            {/* Tools Used */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Tools & Platform yang Digunakan
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm"
                  >
                    <BarChart2 className="w-3 h-3 text-accent dark:text-accent-dark" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
