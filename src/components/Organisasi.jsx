import Section from './Section'
import { Users2, Award, Flag, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'

export default function Organisasi() {
  const [lang] = useLanguage()
  const t = translations[lang].organisasi

  const orgs = [
    {
      icon: HeartHandshake,
      title: lang === 'id' ? 'Anggota PSDM' : 'HRD Department Member',
      org: lang === 'id' ? 'Himpunan Mahasiswa Informatika' : 'Informatics Student Association',
      period: '2025 – 2026',
      desc: t.descHima,
    },
    {
      icon: Sparkles,
      title: lang === 'id' ? 'Ketua Pelaksana' : 'Project Manager',
      org: 'Ramadhan Tech Care',
      period: '2026',
      desc: lang === 'id' ? 'Memimpin penyelenggaraan program sosial kepedulian masyarakat terintegrasi literasi teknologi.' : 'Led social care and technology literacy initiative program.',
    },
    {
      icon: Flag,
      title: lang === 'id' ? 'Ketua Pelaksana' : 'Lead Organizing Committee',
      org: lang === 'id' ? 'OSPEK Jurusan Informatika' : 'Informatics Student Orientation',
      period: '2026',
      desc: lang === 'id' ? 'Mengkoordinasi seluruh divisi kepanitiaan dalam menyukseskan masa orientasi mahasiswa baru.' : 'Coordinated all divisions executing new student orientation.',
    },
  ]

  const sertifikat = [
    'Google Gemini AI Developer Certification',
  ]

  return (
    <Section
      id="organisasi"
      icon={Users2}
      title={t.title}
      subtitle={t.subtitle}
    >
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {orgs.map((o, i) => {
          const Icon = o.icon
          return (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-accent dark:text-accent-dark flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {o.title}
                </h3>
                <div className="text-xs font-semibold text-accent dark:text-accent-dark">
                  {o.org} · <span className="text-slate-400 dark:text-slate-500 font-normal">{o.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {o.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3 p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          <Award className="w-4 h-4 text-amber-500" />
          <span>{lang === 'id' ? 'Sertifikasi Resmi:' : 'Official Certifications:'}</span>
        </div>
        {sertifikat.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-accent-dark/10 border border-blue-200/60 dark:border-blue-800/60 text-accent dark:text-accent-dark shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            {s}
          </span>
        ))}
      </div>
    </Section>
  )
}
