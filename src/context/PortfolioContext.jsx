import { createContext, useContext, useState, useEffect } from 'react'
import { translations as defaultTranslations } from '../data/translations'

const defaultProjects = [
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

const defaultOrgs = [
  {
    titleId: 'Anggota Departemen PSDM',
    titleEn: 'HRD Department Member',
    orgId: 'Himpunan Mahasiswa Informatika',
    orgEn: 'Informatics Student Association',
    period: '2024 – Sekarang',
    descId: 'Berperan aktif dalam perencanaan pelatihan kepemimpinan, pengembangan potensi anggota, serta koordinasi program kerja himpunan.',
    descEn: 'Actively contributed to leadership training and organization programs.',
  },
  {
    titleId: 'Ketua Pelaksana & Divisi Teknologi',
    titleEn: 'Lead Organizing Committee',
    orgId: 'Kepanitiaan Event & Workshop Kampus',
    orgEn: 'Campus Workshop Committee',
    period: '2025',
    descId: 'Memimpin tim pelaksanaan workshop web development, mengelola registrasi peserta digital, dan publikasi media.',
    descEn: 'Led web development workshop team, handled digital attendee registration and media publication.',
  },
  {
    titleId: 'Ketua Pelaksana',
    titleEn: 'Project Leader',
    orgId: 'Ramadhan Tech Care',
    orgEn: 'Ramadhan Tech Care Initiative',
    period: '2026',
    descId: 'Memimpin program kepedulian masyarakat terintegrasi literasi teknologi & digitalisasi.',
    descEn: 'Spearheaded community service program integrated with digital literacy.',
  },
]

const defaultHeroContacts = [
  { type: 'email', label: 'daifamaul17@gmail.com', href: 'mailto:daifamaul17@gmail.com' },
  { type: 'phone', label: '0895-2539-7093', href: 'tel:089525397093' },
  { type: 'github', label: 'github.com/daifa17', href: 'https://github.com/daifa17' },
  { type: 'location', label: 'Bandung, Indonesia', href: '' },
]

const defaultHeroTechTags = [
  { name: 'React.js', color: 'text-cyan-500 dark:text-cyan-400' },
  { name: 'Supabase', color: 'text-emerald-500 dark:text-emerald-400' },
  { name: 'Technical SEO', color: 'text-blue-500 dark:text-blue-400' },
  { name: 'Tailwind CSS', color: 'text-indigo-500 dark:text-indigo-400' },
]

const defaultSkillItems = {
  frontend: [
    { name: 'React.js', desc: 'Frontend UI Library', color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30' },
    { name: 'Tailwind CSS', desc: 'Utility-First Styling', color: 'text-sky-500 bg-sky-500/10 border-sky-500/30' },
    { name: 'JavaScript ES6+', desc: 'Core Web Logic', color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' },
    { name: 'Next.js', desc: 'React Framework', color: 'text-slate-800 dark:text-white bg-slate-500/10 border-slate-500/30' },
    { name: 'HTML5', desc: 'Semantic Markup', color: 'text-orange-500 bg-orange-500/10 border-orange-500/30' },
    { name: 'CSS3', desc: 'Layout & Animations', color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' },
  ],
  backend: [
    { name: 'Supabase', desc: 'Postgres & Auth BaaS', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' },
    { name: 'PHP', desc: 'Server-Side Scripting', color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30' },
    { name: 'MySQL', desc: 'Relational Database', color: 'text-blue-500 bg-blue-500/10 border-blue-500/30' },
    { name: 'Git & GitHub', desc: 'Version Control', color: 'text-orange-600 bg-orange-600/10 border-orange-600/30' },
    { name: 'RESTful APIs', desc: 'Backend Integration', color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30' },
  ],
  seo: [
    { name: 'Ahrefs Audit', desc: 'Site Health 100/100', color: 'text-blue-600 bg-blue-600/10 border-blue-600/30' },
    { name: 'Google Search Console', desc: 'Indexing & Crawling', color: 'text-sky-500 bg-sky-500/10 border-sky-500/30' },
    { name: 'Google Business Profile', desc: 'Local SEO Optimization', color: 'text-rose-500 bg-rose-500/10 border-rose-500/30' },
    { name: 'Google Analytics (GA4)', desc: 'Traffic Analytics', color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' },
    { name: 'Vercel Deployment', desc: 'Automated CI/CD', color: 'text-slate-800 dark:text-slate-200 bg-slate-400/10 border-slate-400/30' },
    { name: 'AI Assistant Workflow', desc: 'Accelerated Coding', color: 'text-purple-500 bg-purple-500/10 border-purple-500/30' },
  ],
}

const defaultSettings = {
  showHeroBadge: false, // Default false: "Sedang magang @ Geometri Indonesia" dihilangkan sesuai permintaan
  heroBadgeText: 'Web Developer & Technical SEO Specialist',
  badgePulseColor: 'emerald', // 'emerald' | 'blue' | 'amber' | 'rose'
  heroPhotoUrl: '/daifa.jpg',
  accentColor: 'blue', // 'blue' | 'cyan' | 'emerald' | 'violet' | 'rose' | 'amber'
  cardBorderRadius: 'rounded-3xl',
  cardStyle: 'glass', // 'glass' | 'matte' | 'bordered'
  gridDensity: 'normal', // 'normal' | 'dense' | 'hide'
  developerCodeSnippet: `const developer = {
  name: "Da'ifa Maulana",
  role: "Web Dev & Technical SEO",
  focus: "React, Modern Web & Ahrefs 100/100",
  education: "Teknik Informatika (UTD Bandung)",
  location: "Bandung, Indonesia",
  openToOpportunities: true,
};`,
}

export const ACCENT_PALETTES = {
  blue: {
    label: 'Classic Royal Blue',
    primary: '#2563eb',
    dark: '#4f8ef7',
    glow: 'rgba(37, 99, 235, 0.25)',
  },
  cyan: {
    label: 'Cyber Cyan',
    primary: '#0891b2',
    dark: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
  emerald: {
    label: 'Emerald Growth',
    primary: '#059669',
    dark: '#10b981',
    glow: 'rgba(16, 185, 129, 0.25)',
  },
  violet: {
    label: 'Electric Violet',
    primary: '#7c3aed',
    dark: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.25)',
  },
  rose: {
    label: 'Sunset Rose',
    primary: '#e11d48',
    dark: '#f43f5e',
    glow: 'rgba(244, 63, 94, 0.25)',
  },
  amber: {
    label: 'Amber Gold',
    primary: '#d97706',
    dark: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.25)',
  },
}

const PortfolioContext = createContext(null)

const STORAGE_KEYS = {
  CONTENT: 'daifa_portfolio_content_v2',
  PROJECTS: 'daifa_portfolio_projects_v2',
  ORGS: 'daifa_portfolio_orgs_v2',
  CONTACTS: 'daifa_portfolio_contacts_v2',
  TECH_TAGS: 'daifa_portfolio_techtags_v2',
  SETTINGS: 'daifa_portfolio_settings_v2',
  SKILL_ITEMS: 'daifa_portfolio_skillitems_v2',
}

export function PortfolioProvider({ children }) {
  // 1. Data Content / Translations
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTENT)
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('Gagal membaca content:', e)
    }
    return defaultTranslations
  })

  // 2. Projects Data
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS)
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('Gagal membaca projects:', e)
    }
    return defaultProjects
  })

  // 3. Organization list
  const [orgs, setOrgs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ORGS)
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('Gagal membaca orgs:', e)
    }
    return defaultOrgs
  })

  // 4. Hero Contacts
  const [heroContacts, setHeroContacts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTACTS)
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('Gagal membaca hero contacts:', e)
    }
    return defaultHeroContacts
  })

  // 5. Hero Tech Tags
  const [heroTechTags, setHeroTechTags] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TECH_TAGS)
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('Gagal membaca hero tech tags:', e)
    }
    return defaultHeroTechTags
  })

  // 6. Settings & Theme
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.heroPhotoUrl === '/avatar.png') {
          parsed.heroPhotoUrl = '/daifa.jpg'
          try { localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({ ...defaultSettings, ...parsed })) } catch (_) {}
        }
        return { ...defaultSettings, ...parsed }
      }
    } catch (e) {
      console.warn('Gagal membaca settings:', e)
    }
    return defaultSettings
  })

  // 7b. Skill Items (individual skill cards per category)
  const [skillItems, setSkillItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILL_ITEMS)
      if (saved) return JSON.parse(saved)
    } catch (e) {
      console.warn('Gagal membaca skill items:', e)
    }
    return defaultSkillItems
  })

  // 7. Admin View Route State
  const [isAdminView, setIsAdminView] = useState(() => {
    const hash = window.location.hash
    const path = window.location.pathname
    return hash === '#/admin' || path === '/admin'
  })

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CONTENT, JSON.stringify(content))
  }, [content])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORGS, JSON.stringify(orgs))
  }, [orgs])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(heroContacts))
  }, [heroContacts])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TECH_TAGS, JSON.stringify(heroTechTags))
  }, [heroTechTags])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings))
  }, [settings])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SKILL_ITEMS, JSON.stringify(skillItems))
  }, [skillItems])

  // Apply CSS custom variables dynamically based on accentColor setting
  useEffect(() => {
    const colorKey = settings.accentColor || 'blue'
    const palette = ACCENT_PALETTES[colorKey] || ACCENT_PALETTES.blue
    document.documentElement.style.setProperty('--color-accent', palette.primary)
    document.documentElement.style.setProperty('--color-accent-dark', palette.dark)
    document.documentElement.style.setProperty('--accent-glow', palette.glow)
  }, [settings.accentColor])

  // Hash & Popstate listener
  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash
      const path = window.location.pathname
      setIsAdminView(hash === '#/admin' || path === '/admin')
    }
    window.addEventListener('hashchange', handleRoute)
    window.addEventListener('popstate', handleRoute)
    return () => {
      window.removeEventListener('hashchange', handleRoute)
      window.removeEventListener('popstate', handleRoute)
    }
  }, [])

  // Admin Actions
  const openAdmin = () => {
    window.location.hash = '#/admin'
    setIsAdminView(true)
  }

  const closeAdmin = () => {
    window.location.hash = ''
    setIsAdminView(false)
  }

  const updateSection = (lang, sectionKey, newValues) => {
    setContent(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [sectionKey]: {
          ...prev[lang][sectionKey],
          ...newValues,
        },
      },
    }))
  }

  // Projects CRUD
  const addProject = newProj => setProjects(prev => [newProj, ...prev])
  const updateProject = (index, updated) => {
    setProjects(prev => {
      const copy = [...prev]
      copy[index] = updated
      return copy
    })
  }
  const deleteProject = index => setProjects(prev => prev.filter((_, i) => i !== index))
  const moveProject = (index, dir) => {
    setProjects(prev => {
      const copy = [...prev]
      const target = index + dir
      if (target < 0 || target >= copy.length) return prev
      const temp = copy[index]
      copy[index] = copy[target]
      copy[target] = temp
      return copy
    })
  }

  // Orgs CRUD
  const addOrg = newOrg => setOrgs(prev => [...prev, newOrg])
  const updateOrg = (index, updated) => {
    setOrgs(prev => {
      const copy = [...prev]
      copy[index] = updated
      return copy
    })
  }
  const deleteOrg = index => setOrgs(prev => prev.filter((_, i) => i !== index))

  // Skill Items CRUD (per category: 'frontend' | 'backend' | 'seo')
  const addSkillItem = (category, newItem) =>
    setSkillItems(prev => ({ ...prev, [category]: [...prev[category], newItem] }))
  const updateSkillItem = (category, index, updated) =>
    setSkillItems(prev => {
      const copy = [...prev[category]]
      copy[index] = updated
      return { ...prev, [category]: copy }
    })
  const deleteSkillItem = (category, index) =>
    setSkillItems(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }))

  // Hero Contacts & Tags
  const updateHeroContacts = newContacts => setHeroContacts(newContacts)
  const updateHeroTechTags = newTags => setHeroTechTags(newTags)

  const updateSettings = newSettings => setSettings(prev => ({ ...prev, ...newSettings }))

  const resetToDefaults = () => {
    if (window.confirm('Reset seluruh isi konten, kartu proyek, dan tema ke bawaan asli?')) {
      setContent(defaultTranslations)
      setProjects(defaultProjects)
      setOrgs(defaultOrgs)
      setHeroContacts(defaultHeroContacts)
      setHeroTechTags(defaultHeroTechTags)
      setSettings(defaultSettings)
      setSkillItems(defaultSkillItems)
      Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k))
    }
  }

  const exportDataJSON = () => {
    const fullBackup = {
      version: '2.0',
      exportedAt: new Date().toISOString(),
      content,
      projects,
      orgs,
      heroContacts,
      heroTechTags,
      settings,
      skillItems,
    }
    const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `daifa-portfolio-full-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importDataJSON = jsonString => {
    try {
      const parsed = JSON.parse(jsonString)
      if (parsed.content) setContent(parsed.content)
      if (parsed.projects) setProjects(parsed.projects)
      if (parsed.orgs) setOrgs(parsed.orgs)
      if (parsed.heroContacts) setHeroContacts(parsed.heroContacts)
      if (parsed.heroTechTags) setHeroTechTags(parsed.heroTechTags)
      if (parsed.settings) setSettings(parsed.settings)
      if (parsed.skillItems) setSkillItems(parsed.skillItems)
      alert('Data cadangan berhasil dipulihkan secara menyeluruh!')
      return true
    } catch (e) {
      alert('Format file JSON tidak valid: ' + e.message)
      return false
    }
  }

  return (
    <PortfolioContext.Provider
      value={{
        content,
        projects,
        orgs,
        heroContacts,
        heroTechTags,
        settings,
        isAdminView,
        openAdmin,
        closeAdmin,
        updateSection,
        addProject,
        updateProject,
        deleteProject,
        moveProject,
        addOrg,
        updateOrg,
        deleteOrg,
        updateHeroContacts,
        updateHeroTechTags,
        updateSettings,
        resetToDefaults,
        exportDataJSON,
        importDataJSON,
        skillItems,
        addSkillItem,
        updateSkillItem,
        deleteSkillItem,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return ctx
}
