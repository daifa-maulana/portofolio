import { useState } from 'react'
import { Copy, Check, Send, Sparkles } from 'lucide-react'
import { GithubIcon, WhatsAppIcon } from './Icons'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'

const socials = [
  {
    name: 'GitHub',
    icon: GithubIcon,
    label: 'github.com/daifa17',
    href: 'https://github.com/daifa17',
  },
  {
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    label: '+62 895-2539-7093',
    href: 'https://wa.me/6289525397093',
  },
]

export default function Kontak() {
  const [copied, setCopied] = useState(false)
  const [lang] = useLanguage()
  const t = translations[lang].kontak

  const email = 'daifamaul17@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="kontak" className="max-w-4xl mx-auto px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl text-center space-y-6">
        {/* Decorative background glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-accent dark:text-accent-dark text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'id' ? 'Mari Berkolaborasi' : "Let's Collaborate"}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          {t.title}
        </h2>

        <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          {t.subtitle}
        </p>

        {/* Email & Action Box */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <div className="w-full sm:w-auto flex items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 font-mono text-sm text-slate-700 dark:text-slate-200 shadow-inner">
            <span className="truncate">{email}</span>
            <button
              onClick={copyEmail}
              className="p-1.5 rounded-lg text-accent dark:text-accent-dark hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-all active:scale-90 relative"
              title="Copy Email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500 animate-in zoom-in-50 duration-200" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <a
            href={`mailto:${email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-accent dark:bg-accent-dark text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{lang === 'id' ? 'Kirim Email Langsung' : 'Send Direct Email'}</span>
          </a>
        </div>

        {copied && (
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 animate-in fade-in duration-200">
            {lang === 'id' ? '✓ Email berhasil disalin ke clipboard!' : '✓ Email copied to clipboard!'}
          </div>
        )}

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
          {socials.map((s, i) => {
            const Icon = s.icon
            return (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark hover:-translate-y-0.5 shadow-sm transition-all"
              >
                <Icon className="w-4 h-4" />
                <span>{s.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
