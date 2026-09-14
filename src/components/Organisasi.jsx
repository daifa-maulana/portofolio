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

      {/* Certifications Section */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-xl hover:shadow-xl transition-all relative overflow-hidden group">
        {/* Subtle background glow */}
        <div className="absolute -top-12 -right-12 w-56 h-56 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

        <div className="space-y-6 relative z-10">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200/60 dark:border-emerald-800/60">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Google for Education</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                {lang === 'id' ? 'Siswa Tersertifikasi Gemini' : 'Gemini Certified Student'}
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {lang === 'id'
                  ? 'Kualifikasi Universitas · Diterbitkan: 20 Agt 2026 (Berlaku s/d 20 Agt 2029)'
                  : 'University Qualification · Issued: Aug 20, 2026 (Valid thru Aug 20, 2029)'}
              </p>
            </div>

            <a
              href={`${import.meta.env.BASE_URL}sertifikat-gemini.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 active:scale-95 shrink-0 group/btn"
            >
              <span>{lang === 'id' ? 'Buka Sertifikat PDF' : 'Open PDF Certificate'}</span>
              <ShieldCheck className="w-4 h-4 text-white/80 group-hover/btn:scale-110 transition-transform" />
            </a>
          </div>

          {/* Direct Full Certificate Preview Image */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 shadow-inner group/img">
            <a
              href={`${import.meta.env.BASE_URL}sertifikat-gemini.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <img
                src={`${import.meta.env.BASE_URL}sertifikat-gemini-full.png`}
                alt="Sertifikat Resmi Siswa Tersertifikasi Gemini - Google for Education"
                className="w-full h-auto object-cover max-h-[480px] group-hover/img:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white font-bold text-xs shadow-lg backdrop-blur-md">
                  {lang === 'id' ? 'Klik untuk memperbesar / buka PDF' : 'Click to enlarge / open PDF'}
                </span>
              </div>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {lang === 'id'
              ? 'Kualifikasi ini diberikan kepada DA\'IFA MAULANA karena telah menunjukkan pengetahuan, keterampilan, dan kompetensi dasar yang diperlukan untuk menggunakan AI Google di lingkungan pendidikan & alur kerja teknologi modern.'
              : 'This qualification was awarded to DA\'IFA MAULANA for demonstrating essential knowledge, skills, and foundational competency required to utilize Google AI in educational & modern technology workflows.'}
          </p>
        </div>
      </div>
    </Section>
  )
}
