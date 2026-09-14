import { useState } from 'react'
import Section from './Section'
import { FolderGit2, ExternalLink, Sparkles, Code2, Briefcase, GraduationCap, Globe } from 'lucide-react'
import useLanguage from '../hooks/useLanguage'
import { translations } from '../data/translations'

const proyekData = [
  {
    title: 'Website Pesantren Tahfidz Roudlotul Ulum',
    category: 'magang',
    featured: true,
    role: 'Solo · Client Project',
    desc: 'Sistem informasi pesantren putra & putri dengan absensi santri dan monitoring realtime yang bisa diakses wali santri.',
    descEn: 'Information system for male & female Islamic boarding school with student attendance tracking and real-time monitoring for parents.',
    tags: ['React.js', 'Realtime DB', 'Tailwind CSS', 'Vercel'],
    links: [],
  },
  {
    title: 'Website Utama Geometri Indonesia',
    category: 'magang',
    featured: true,
    role: 'Solo · Pengelolaan CMS & SEO',
    desc: 'Pengelolaan website pusat (geo-metri.id) melingkupi pemeliharaan CMS, pembaruan konten berita & profil perusahaan, serta optimasi SEO On-Page.',
    descEn: 'Management and maintenance of central website (geo-metri.id) including CMS maintenance, news updates, and On-Page SEO optimization.',
    tags: ['CMS Management', 'SEO Optimization', 'Content Ops'],
    links: [{ label: 'geo-metri.id', href: 'https://geo-metri.id' }],
  },
  {
    title: 'Website Cabang Geometri Indonesia',
    category: 'magang',
    featured: true,
    role: 'Solo · Pengelolaan Web Cabang',
    desc: 'Pengelolaan 4 website cabang perusahaan (Papua, Jakarta, Surabaya, Balikpapan) untuk memperluas jangkauan operasional regional perusahaan.',
    descEn: 'Management of 4 company branch websites (Papua, Jakarta, Surabaya, Balikpapan) to expand regional presence.',
    tags: ['Multi-site CMS', 'SEO Regional', 'Web Maintenance'],
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
    descEn: 'Catalog & store management website with real-time product CRUD features.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    links: [{ label: 'Live Demo', href: 'https://toko-sarung.vercel.app' }],
  },
  {
    title: 'Web Kelas Mahasiswa',
    category: 'kampus',
    role: 'Solo · Kampus · 2026',
    desc: 'Aplikasi web profil dan manajemen data kelas dengan sistem autentikasi admin dan showcase kegiatan.',
    descEn: 'Student class profile & data management web app featuring admin authentication and activity showcase.',
    tags: ['React.js', 'Tailwind', 'Supabase'],
    links: [{ label: 'Live Demo', href: 'https://web-rennaissans13.vercel.app' }],
  },
  {
    title: 'MyReminder App',
    category: 'web',
    role: 'Solo · Pribadi · 2026',
    desc: 'Aplikasi pengingat berbasis web responsif dengan alarm cerdas, notifikasi, dan jadwal waktu sholat otomatis.',
    descEn: 'Responsive web reminder app with smart alarm, notifications, and automated prayer times.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Median.co'],
    links: [{ label: 'Live Demo', href: 'https://capable-lily-d11ffc.netlify.app' }],
  },
  {
    title: 'Kasir Online',
    category: 'kampus',
    role: 'Solo · Kampus · 2025',
    desc: 'Aplikasi kasir web dengan fitur pencatatan transaksi kasir, perhitungan kembalian, dan cetak struk menggunakan PHP.',
    descEn: 'POS cashier web app featuring transaction records, change calculation, and receipt printing.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    links: [],
  },
  {
    title: 'Monetra (Finance App)',
    category: 'kampus',
    role: 'Tim (Prototype) · Kampus',
    desc: 'Aplikasi pencatatan keuangan modern dengan grafik statistik pemasukan/pengeluaran dan kategori transaksi cerdas.',
    descEn: 'Modern finance tracking app prototype with statistical graphs and smart transaction categorization.',
    tags: ['UI/UX', 'Prototype', 'Team Project'],
    links: [],
  },
  {
    title: 'Web Kantin Kampus',
    category: 'kampus',
    role: 'Tim · Kampus',
    desc: 'Sistem informasi kantin terpadu berbasis web untuk menampilkan daftar menu harian dan status pemesanan makanan.',
    descEn: 'Integrated campus canteen web info system showing daily menus and order statuses.',
    tags: ['PHP', 'HTML/CSS', 'Database'],
    links: [],
  },
  {
    title: 'Web Karang Taruna',
    category: 'kampus',
    role: 'Tim · Komunitas · 2025',
    desc: 'Website portal profil organisasi Karang Taruna sebagai sarana transparansi informasi dan agenda warga sekitar.',
    descEn: 'Youth organization community portal website for transparent information and neighborhood schedules.',
    tags: ['PHP', 'JavaScript', 'Tailwind'],
    links: [],
  },
]

export default function Proyek() {
  const [activeTab, setActiveTab] = useState('all')
  const [lang] = useLanguage()
  const t = translations[lang].proyek

  const categories = [
    { id: 'all', label: t.tabAll, icon: FolderGit2 },
    { id: 'web', label: t.tabWeb, icon: Code2 },
    { id: 'magang', label: t.tabMagang, icon: Briefcase },
    { id: 'kampus', label: t.tabKampus, icon: GraduationCap },
  ]

  const filteredProyek = activeTab === 'all'
    ? proyekData
    : proyekData.filter(p => p.category === activeTab)

  return (
    <Section
      id="proyek"
      icon={FolderGit2}
      title={t.title}
      subtitle={t.subtitle}
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
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${isActive
                  ? 'bg-accent dark:bg-accent-dark text-white shadow-md shadow-blue-500/20'
                  : 'bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{c.label}</span>
              {c.id !== 'all' && (
                <span className="ml-1 opacity-75">
                  ({proyekData.filter(p => p.category === c.id).length})
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProyek.map((p, i) => (
          <div
            key={i}
            className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:border-accent/40 dark:hover:border-accent-dark/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative h-full"
          >
            <div className="flex flex-col flex-1">
              {/* Header: Dots & Role */}
              <div className="px-4 py-3 bg-slate-50/80 dark:bg-slate-800/40 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-2">
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      <Sparkles className="w-2.5 h-2.5" />
                      Featured
                    </span>
                  )}
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[140px]">
                    {p.role}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {lang === 'en' && p.descEn ? p.descEn : p.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/70 dark:border-slate-700/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Links Footer */}
            <div className="p-4 pt-3 mt-auto bg-slate-50/50 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 shrink-0">
              {p.links && p.links.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2 w-full">
                  {p.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-bold text-xs border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition-all group/link"
                    >
                      <span>{l.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              ) : (
                <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  {lang === 'id' ? 'Internal Client Project' : 'Internal Client Work'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}




