import Section from './Section'
import { Users2, Award, Flag, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react'

const orgs = [
  {
    icon: HeartHandshake,
    title: 'Anggota PSDM',
    org: 'Himpunan Mahasiswa Informatika',
    period: '2025 – 2026',
    desc: 'Pengembangan dan Pemberdayaan Sumber Daya Manusia (PSDM) — aktif menyusun kurikulum kaderisasi dan program pengembangan anggota.',
  },
  {
    icon: Sparkles,
    title: 'Ketua Pelaksana',
    org: 'Ramadhan Tech Care',
    period: '2026',
    desc: 'Memimpin penyelenggaraan program sosial kepedulian masyarakat terintegrasi literasi teknologi selama bulan suci Ramadhan.',
  },
  {
    icon: Flag,
    title: 'Ketua Pelaksana',
    org: 'OSPEK Jurusan Informatika',
    period: '2026',
    desc: 'Mengkoordinasi seluruh divisi kepanitiaan dalam menyukseskan masa orientasi & pengenalan kultur akademis mahasiswa baru Informatika.',
  },
]

const sertifikat = [
  'Google Gemini AI Developer Certification',
]

export default function Organisasi() {
  return (
    <Section
      id="organisasi"
      icon={Users2}
      title="Organisasi & Kepemimpinan"
      subtitle="Pengalaman manajerial, kepanitiaan kampus, dan sertifikasi keahlian"
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
          <span>Sertifikasi Resmi:</span>
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
