import Section from './Section'
import { User, Bot, Search, Zap, Users2, Award, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function Profil() {
  return (
    <Section
      id="profil"
      icon={User}
      title="Tentang Saya"
      subtitle="Filosofi belajar, pencapaian akademis, dan pendekatan pengembangan sistem"
    >
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        {/* Bento 1: Main Story (Span 7) */}
        <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md transition-all backdrop-blur-xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-accent dark:text-accent-dark text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mahasiswa Informatika · Semester 5</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              Membangun Solusi Web Lewat Praktik Langsung & Problem Solving
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Saya adalah mahasiswa aktif S1 Teknik Informatika di Universitas Teknologi Digital (UTD) Bandung dengan komitmen kuat pada penulisan kode yang rapi, cepat diakses, dan ramah mesin pencari (SEO).
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Saat ini sedang menjalani magang di <strong className="text-slate-900 dark:text-white">Geometri Indonesia</strong>, mengelola 4 website cabang, meningkatkan site health hingga 100/100, dan terus bereksperimen dengan stack modern seperti React, Supabase, dan Next.js.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
              📍 Bandung, Indonesia
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
              ⚡ Fullstack & Technical SEO
            </span>
          </div>
        </div>

        {/* Bento 2: Academic IPK Highlight (Span 5) */}
        <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/90 via-white/80 to-indigo-50/80 dark:from-blue-950/40 dark:via-slate-900/80 dark:to-indigo-950/40 border border-blue-200/80 dark:border-blue-800/80 shadow-sm hover:shadow-md transition-all backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-dark">
                Performa Akademis
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold">
                Cum Laude Track
              </span>
            </div>

            <div className="my-2">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                3.78<span className="text-lg font-normal text-slate-400"> / 4.00</span>
              </div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                Indeks Prestasi Kumulatif (IPK)
              </div>
            </div>

            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mt-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full w-[94.5%]" />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">Prodi:</span> Teknik Informatika · UTD Bandung
          </div>
        </div>

        {/* Bento 3: AI-Assisted Workflow (Span 4) */}
        <div className="md:col-span-4 p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all backdrop-blur-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white">
            AI-Assisted Workflow
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Terbiasa memadukan kecerdasan AI untuk prototyping kilat, debugging, dan eksplorasi stack baru secara efisien.
          </p>
        </div>

        {/* Bento 4: Technical SEO 100 (Span 4) */}
        <div className="md:col-span-4 p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all backdrop-blur-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-accent dark:text-accent-dark flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white">
            Technical SEO Driven
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Fokus pada optimasi Google Search Console, Google Business Profile, dan perbaikan site health hingga skor sempurna 100.
          </p>
        </div>

        {/* Bento 5: Team & Community (Span 4) */}
        <div className="md:col-span-4 p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all backdrop-blur-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Users2 className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white">
            Kolaboratif & Berorganisasi
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Aktif di himpunan mahasiswa (PSDM) dan berpengalaman memimpin kepanitiaan teknologi tingkat jurusan.
          </p>
        </div>
      </div>
    </Section>
  )
}
