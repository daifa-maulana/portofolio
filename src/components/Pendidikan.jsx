import Section from './Section'
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react'

export default function Pendidikan() {
  return (
    <Section
      id="pendidikan"
      icon={GraduationCap}
      title="Pendidikan Formal"
      subtitle="Riwayat akademis dan pencapaian studi"
    >
      <div className="space-y-4">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-xl hover:shadow-xl transition-all">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-accent-dark/10 text-accent dark:text-accent-dark text-xs font-bold mb-2">
                <Award className="w-3.5 h-3.5" />
                S1 · Mahasiswa Aktif (Semester 5)
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                S1 Teknik Informatika
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium text-sm mt-0.5">
                Universitas Teknologi Digital, Bandung
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-950/40 dark:to-indigo-950/40 px-6 py-3.5 rounded-2xl border border-blue-200/60 dark:border-blue-800/60 shadow-inner">
              <div className="text-right">
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Indeks Prestasi Kumulatif
                </div>
                <div className="text-2xl font-black text-accent dark:text-accent-dark">
                  3.78
                  <span className="text-sm font-normal text-slate-400 dark:text-slate-500"> / 4.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-3xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md flex flex-col md:flex-row justify-between md:items-center gap-2 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                Pendidikan Menengah
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Madrasah Aliyah (MA) · Jurusan IPS
              </h3>
            </div>
          </div>
          <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit">
            Lulus 2024
          </div>
        </div>
      </div>
    </Section>
  )
}
