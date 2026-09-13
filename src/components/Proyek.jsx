import { useState } from 'react'
import Section from './Section'
import { FolderGit2, ExternalLink, Sparkles, Layout, Code2, Globe2, Briefcase, GraduationCap } from 'lucide-react'

const categories = [
  { id: 'all', label: 'Semua Proyek', icon: FolderGit2 },
  { id: 'web', label: 'Web Dev & Fullstack', icon: Code2 },
  { id: 'magang', label: 'Magang & Klien', icon: Briefcase },
  { id: 'kampus', label: 'Kampus & Tim', icon: GraduationCap },
]

const proyek = [
  {
    title: 'Website Pesantren Tahfidz Roudlotul Ulum',
    category: 'magang',
    featured: true,
    role: 'Solo · Pesanan / Klien',
    desc: 'Sistem informasi pesantren putra & putri dengan absensi santri dan monitoring realtime yang bisa diakses wali santri.',
    tags: ['React.js', 'Realtime Database', 'Tailwind', 'Vercel'],
    links: [],
  },
  {
    title: 'Website Cabang Geometri Indonesia',
    category: 'magang',
    featured: true,
    role: 'Solo · Magang Geometri',
    desc: '4 website cabang perusahaan (Papua, Jakarta, Surabaya, Balikpapan) berisi produk & blog dengan struktur yang sama serta optimasi SEO.',
    tags: ['React.js', 'CMS / Blog', 'SEO Optimized'],
    links: [
      { label: 'Papua', href: 'https://geometripapua.com' },
      { label: 'Jakarta', href: 'https://geometrijakarta.com' },
      { label: 'Surabaya', href: 'https://geometrisurabaya.com' },
      { label: 'Balikpapan', href: 'https://geometribalikpapan.com' },
    ],
  },
  {
    title: 'Web Toko Sarung',
    category: 'web',
    featured: true,
    role: 'Solo · Mandiri · 2024',
    desc: 'Website katalog & manajemen toko sarung dengan fitur tambah, edit, dan hapus produk secara real-time.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    links: [{ label: 'Live Demo', href: 'https://toko-sarung.vercel.app' }],
  },
  {
    title: 'Web Kelas Mahasiswa',
    category: 'kampus',
    role: 'Solo · Kampus · 2026',
    desc: 'Aplikasi web profil dan manajemen data kelas dengan sistem autentikasi admin dan showcase kegiatan.',
    tags: ['React.js', 'Tailwind', 'Supabase'],
    links: [{ label: 'Live Demo', href: 'https://web-rennaissans13.vercel.app' }],
  },
  {
    title: 'MyReminder App',
    category: 'web',
    role: 'Solo · Pribadi · 2026',
    desc: 'Aplikasi pengingat berbasis web responsif dengan alarm cerdas, notifikasi, dan jadwal waktu sholat otomatis.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Median.co'],
    links: [{ label: 'Live Demo', href: 'https://capable-lily-d11ffc.netlify.app' }],
  },
  {
    title: 'Kasir Online',
    category: 'kampus',
    role: 'Solo · Kampus · 2025',
    desc: 'Aplikasi kasir web dengan fitur pencatatan transaksi kasir, perhitungan kembalian, dan cetak struk menggunakan PHP.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    links: [],
  },
  {
    title: 'Monetra (Finance App)',
    category: 'kampus',
    role: 'Tim (Prototype) · Kampus',
    desc: 'Aplikasi pencatatan keuangan modern dengan grafik statistik pemasukan/pengeluaran dan kategori transaksi cerdas.',
    tags: ['UI/UX', 'Prototype', 'Team Project'],
    links: [],
  },
  {
    title: 'Web Kantin Kampus',
    category: 'kampus',
    role: 'Tim · Kampus',
    desc: 'Sistem informasi kantin terpadu berbasis web untuk menampilkan daftar menu harian dan status pemesanan makanan.',
    tags: ['PHP', 'HTML/CSS', 'Database'],
    links: [],
  },
  {
    title: 'Web Karang Taruna',
    category: 'kampus',
    role: 'Tim · Komunitas · 2025',
    desc: 'Website portal profil organisasi Karang Taruna sebagai sarana transparansi informasi dan agenda warga sekitar.',
    tags: ['PHP', 'JavaScript', 'Tailwind'],
    links: [],
  },
]

export default function Proyek() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProyek = activeTab === 'all'
    ? proyek
    : proyek.filter(p => p.category === activeTab)

  return (
    <Section
      id="proyek"
      icon={FolderGit2}
      title="Galeri Proyek"
      subtitle="Koleksi proyek web development, klien, magang, dan eksperimen yang telah saya selesaikan"
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map(c => {
          const Icon = c.icon
          const isActive = activeTab === c.id
          return (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-accent dark:bg-accent-dark text-white shadow-md shadow-blue-500/20'
                  : 'bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{c.label}</span>
              {c.id !== 'all' && (
                <span className="ml-1 opacity-75">
                  ({proyek.filter(p => p.category === c.id).length})
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProyek.map((p, i) => (
          <div
            key={i}
            className="group rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:border-accent/50 dark:hover:border-accent-dark/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-md"
          >
            <div>
              {/* Browser-like Window Header Bar */}
              <div className="px-4 py-3 bg-slate-50/90 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-1.5">
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      <Sparkles className="w-2.5 h-2.5" />
                      Featured
                    </span>
                  )}
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    {p.role}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-lg text-[11px] bg-blue-50/80 dark:bg-accent-dark/10 text-accent dark:text-accent-dark font-medium border border-blue-100/50 dark:border-accent-dark/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links footer */}
            {p.links.length > 0 && (
              <div className="p-4 pt-3 mt-auto bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2 items-center">
                {p.links.map((l, j) => (
                  <a
                    key={j}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-accent dark:text-accent-dark hover:bg-accent hover:text-white dark:hover:bg-accent-dark dark:hover:text-slate-950 transition-all shadow-sm"
                  >
                    <span>{l.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
