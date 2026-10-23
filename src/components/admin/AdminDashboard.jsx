import { useState, useRef, useMemo } from 'react'
import { usePortfolio, ACCENT_PALETTES } from '../../context/PortfolioContext'
import useTheme from '../../hooks/useTheme'
import {
  LayoutDashboard,
  FolderGit2,
  Briefcase,
  User,
  Palette,
  GraduationCap,
  Users2,
  Mail,
  Download,
  Upload,
  RotateCcw,
  Eye,
  Plus,
  Trash2,
  Edit2,
  ArrowUp,
  ArrowDown,
  Check,
  Lock,
  Sparkles,
  Search,
  ExternalLink,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Sliders,
  Layers,
  HelpCircle,
  X,
  Sun,
  Moon
} from 'lucide-react'

export default function AdminDashboard() {
  const [theme, toggleTheme] = useTheme()
  const {
    content,
    projects,
    orgs,
    heroContacts,
    heroTechTags,
    skillItems,
    settings,
    closeAdmin,
    updateSection,
    addProject,
    updateProject,
    deleteProject,
    moveProject,
    addOrg,
    updateOrg,
    deleteOrg,
    addSkillItem,
    updateSkillItem,
    deleteSkillItem,
    updateHeroContacts,
    updateHeroTechTags,
    updateSettings,
    resetToDefaults,
    exportDataJSON,
    importDataJSON,
  } = usePortfolio()

  // PIN Protection (default PIN: 1717)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('daifa_admin_auth') === 'true'
  })
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState(false)

  // Navigation & Search
  const [activeTab, setActiveTab] = useState('hero')
  const [editLang, setEditLang] = useState('id') // 'id' | 'en'
  const [searchQuery, setSearchQuery] = useState('')
  const [showSavedToast, setShowSavedToast] = useState(false)

  // Project Modal Form
  const [editingProjectIndex, setEditingProjectIndex] = useState(null)
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'web',
    featured: false,
    role: '',
    desc: '',
    descEn: '',
    tags: '',
    links: [],
  })
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  // Org Modal Form
  const [editingOrgIndex, setEditingOrgIndex] = useState(null)
  const [orgForm, setOrgForm] = useState({
    titleId: '',
    titleEn: '',
    orgId: '',
    orgEn: '',
    period: '',
    descId: '',
    descEn: '',
  })
  const [isOrgModalOpen, setIsOrgModalOpen] = useState(false)

  // Skill Item Modal Form
  const [editingSkill, setEditingSkill] = useState(null) // { category: 'frontend'|'backend'|'seo', index: number } | null
  const [skillModalCategory, setSkillModalCategory] = useState('frontend')
  const [skillForm, setSkillForm] = useState({
    name: '',
    desc: '',
    color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
  })
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false)

  // New Bullet input state for Experience
  const [newHighlightText, setNewHighlightText] = useState('')

  // New Tech Tag input state for Hero
  const [newTagName, setNewTagName] = useState('')

  const fileInputRef = useRef(null)

  const handleLogin = (e) => {
    e.preventDefault()
    if (pinInput === '1717' || pinInput === 'admin') {
      setIsAuthenticated(true)
      sessionStorage.setItem('daifa_admin_auth', 'true')
      setPinError(false)
    } else {
      setPinError(true)
    }
  }

  // Trigger feedback toast
  const notifySaved = () => {
    setShowSavedToast(true)
    setTimeout(() => setShowSavedToast(false), 2000)
  }

  // Projects Modal Handlers
  const handleOpenAddProject = () => {
    setEditingProjectIndex(null)
    setProjectForm({
      title: '',
      category: 'web',
      featured: false,
      role: 'Solo · 2026',
      desc: '',
      descEn: '',
      tags: 'React.js, Tailwind CSS',
      links: [{ label: 'Live Demo', href: 'https://' }],
    })
    setIsProjectModalOpen(true)
  }

  const handleOpenEditProject = (index) => {
    const p = projects[index]
    setEditingProjectIndex(index)
    setProjectForm({
      title: p.title || '',
      category: p.category || 'web',
      featured: !!p.featured,
      role: p.role || '',
      desc: p.desc || '',
      descEn: p.descEn || '',
      tags: Array.isArray(p.tags) ? p.tags.join(', ') : '',
      links: p.links ? [...p.links] : [],
    })
    setIsProjectModalOpen(true)
  }

  const handleSaveProject = (e) => {
    e.preventDefault()
    const formatted = {
      ...projectForm,
      tags: projectForm.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      links: projectForm.links.filter((l) => l.label && l.href),
    }

    if (editingProjectIndex !== null) {
      updateProject(editingProjectIndex, formatted)
    } else {
      addProject(formatted)
    }
    setIsProjectModalOpen(false)
    notifySaved()
  }

  // Org Modal Handlers
  const handleOpenAddOrg = () => {
    setEditingOrgIndex(null)
    setOrgForm({
      titleId: '',
      titleEn: '',
      orgId: '',
      orgEn: '',
      period: '2026',
      descId: '',
      descEn: '',
    })
    setIsOrgModalOpen(true)
  }

  const handleOpenEditOrg = (index) => {
    const o = orgs[index]
    setEditingOrgIndex(index)
    setOrgForm({ ...o })
    setIsOrgModalOpen(true)
  }

  const handleSaveOrg = (e) => {
    e.preventDefault()
    if (editingOrgIndex !== null) {
      updateOrg(editingOrgIndex, orgForm)
    } else {
      addOrg(orgForm)
    }
    setIsOrgModalOpen(false)
    notifySaved()
  }

  // Skill Items Preset Colors & Handlers
  const SKILL_COLOR_PRESETS = [
    { label: 'Cyan', value: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30', dot: 'bg-cyan-500' },
    { label: 'Sky', value: 'text-sky-500 bg-sky-500/10 border-sky-500/30', dot: 'bg-sky-500' },
    { label: 'Emerald', value: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30', dot: 'bg-emerald-500' },
    { label: 'Green', value: 'text-green-500 bg-green-500/10 border-green-500/30', dot: 'bg-green-500' },
    { label: 'Purple', value: 'text-purple-500 bg-purple-500/10 border-purple-500/30', dot: 'bg-purple-500' },
    { label: 'Indigo', value: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30', dot: 'bg-indigo-500' },
    { label: 'Amber', value: 'text-amber-500 bg-amber-500/10 border-amber-500/30', dot: 'bg-amber-500' },
    { label: 'Orange', value: 'text-orange-500 bg-orange-500/10 border-orange-500/30', dot: 'bg-orange-500' },
    { label: 'Blue', value: 'text-blue-500 bg-blue-500/10 border-blue-500/30', dot: 'bg-blue-500' },
    { label: 'Rose', value: 'text-rose-500 bg-rose-500/10 border-rose-500/30', dot: 'bg-rose-500' },
    { label: 'Slate', value: 'text-slate-800 dark:text-white bg-slate-500/10 border-slate-500/30', dot: 'bg-slate-400' },
  ]

  const handleOpenAddSkill = (category) => {
    setSkillModalCategory(category)
    setEditingSkill(null)
    const defaultColor =
      category === 'frontend'
        ? 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30'
        : category === 'backend'
          ? 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30'
          : 'text-purple-500 bg-purple-500/10 border-purple-500/30'
    setSkillForm({
      name: '',
      desc: '',
      color: defaultColor,
    })
    setIsSkillModalOpen(true)
  }

  const handleOpenEditSkill = (category, index) => {
    const item = skillItems?.[category]?.[index]
    if (!item) return
    setSkillModalCategory(category)
    setEditingSkill({ category, index })
    setSkillForm({
      name: item.name || '',
      desc: item.desc || '',
      color: item.color || 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
    })
    setIsSkillModalOpen(true)
  }

  const handleSaveSkill = (e) => {
    e.preventDefault()
    if (!skillForm.name.trim()) return
    if (editingSkill) {
      updateSkillItem(editingSkill.category, editingSkill.index, {
        name: skillForm.name.trim(),
        desc: skillForm.desc.trim(),
        color: skillForm.color || 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
      })
    } else {
      addSkillItem(skillModalCategory, {
        name: skillForm.name.trim(),
        desc: skillForm.desc.trim(),
        color: skillForm.color || 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
      })
    }
    setIsSkillModalOpen(false)
    notifySaved()
  }

  const handleDeleteSkill = (category, index) => {
    if (confirm('Hapus item skill ini dari marquee?')) {
      deleteSkillItem(category, index)
      notifySaved()
    }
  }

  // File import
  const handleImportFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      importDataJSON(event.target.result)
    }
    reader.readAsText(file)
  }

  // Experience highlights helper
  const highlights = content[editLang]?.pengalaman?.highlights || []
  const handleAddHighlight = () => {
    if (!newHighlightText.trim()) return
    const updated = [...highlights, newHighlightText.trim()]
    updateSection(editLang, 'pengalaman', { highlights: updated })
    setNewHighlightText('')
    notifySaved()
  }

  const handleDeleteHighlight = (idx) => {
    const updated = highlights.filter((_, i) => i !== idx)
    updateSection(editLang, 'pengalaman', { highlights: updated })
    notifySaved()
  }

  // Hero tech tag helper
  const handleAddHeroTechTag = () => {
    if (!newTagName.trim()) return
    const colors = [
      'text-cyan-500 dark:text-cyan-400',
      'text-emerald-500 dark:text-emerald-400',
      'text-blue-500 dark:text-blue-400',
      'text-indigo-500 dark:text-indigo-400',
      'text-amber-500 dark:text-amber-400',
    ]
    const randomColor = colors[heroTechTags.length % colors.length]
    updateHeroTechTags([...heroTechTags, { name: newTagName.trim(), color: randomColor }])
    setNewTagName('')
    notifySaved()
  }

  const handleDeleteHeroTechTag = (idx) => {
    updateHeroTechTags(heroTechTags.filter((_, i) => i !== idx))
    notifySaved()
  }

  const currentLangContent = content[editLang] || content.id

  const tabs = [
    { id: 'hero', label: 'Hero & Identitas', badge: 'Utama', icon: LayoutDashboard },
    { id: 'profil', label: 'Profil & 3 Pilar', badge: 'Narasi', icon: User },
    { id: 'proyek', label: `Proyek Showcase (${projects.length})`, badge: 'Katalog', icon: FolderGit2 },
    { id: 'pengalaman', label: 'Pengalaman & Poin', badge: 'Karier', icon: Briefcase },
    { id: 'skills', label: 'Keahlian & Stack', badge: 'Tools', icon: Code2 },
    { id: 'pendidikan', label: 'Pendidikan & Sertifikasi', badge: 'Google', icon: GraduationCap },
    { id: 'organisasi', label: `Organisasi (${orgs.length})`, badge: 'Leadership', icon: Users2 },
    { id: 'kontak', label: 'Kontak & Sosmed', badge: 'Hubungi', icon: Mail },
    { id: 'tampilan', label: 'Desain, Warna & Card', badge: 'Design System', icon: Palette },
  ]

  // Filter tabs by search
  const filteredTabs = useMemo(() => {
    if (!searchQuery.trim()) return tabs
    const q = searchQuery.toLowerCase()
    return tabs.filter((t) => t.label.toLowerCase().includes(q))
  }, [searchQuery, tabs])

  if (!isAuthenticated) {
    return (
      <div className="admin-cms min-h-screen bg-slate-100 dark:bg-[#080d1a] flex items-center justify-center p-6 text-slate-900 dark:text-white selection:bg-blue-500/20 transition-colors">
        <div className="w-full max-w-md p-8 rounded-3xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl text-center space-y-6 relative">
          {/* Quick theme toggle on login screen */}
          <button
            type="button"
            onClick={toggleTheme}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
          </button>

          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 mx-auto flex items-center justify-center shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Portfolio Admin CMS</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Masukkan PIN Admin untuk mengatur konten publik &amp; kartu portofolio.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Masukkan PIN (Default: 1717)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center font-mono text-xl tracking-widest text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-rose-500 dark:text-rose-400 mt-2 font-medium">
                  PIN salah! Coba gunakan PIN default: <span className="font-bold underline">1717</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
            >
              Buka Panel Admin
            </button>
          </form>

          <button
            onClick={closeAdmin}
            className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            ← Kembali ke Website Publik
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-cms min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-500/20 antialiased transition-colors">
      {/* Toast Notifikasi Tersimpan */}
      {showSavedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-950/90 border border-emerald-800 text-emerald-300 text-xs font-bold shadow-2xl backdrop-blur-md animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Perubahan otomatis tersimpan!</span>
        </div>
      )}

      {/* Top Glass Navbar */}
      <header className="admin-header sticky top-0 z-40 bg-white/90 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 px-6 py-3.5 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-mono font-black text-white text-sm shadow-md shadow-blue-500/25">
              DM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">
                  Portfolio Content Management System
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  Auto-Save Active
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Semua bagian halaman publik &amp; kartu dapat diatur secara menyeluruh
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Theme Toggle (Terang / Gelap) */}
            <button
              type="button"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 transition-all active:scale-95"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Terang</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-blue-500" />
                  <span className="hidden sm:inline">Gelap</span>
                </>
              )}
            </button>

            {/* Bahasa */}
            <div className="inline-flex rounded-xl bg-slate-900 border border-slate-800 p-1">
              <button
                onClick={() => setEditLang('id')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  editLang === 'id'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🇮🇩 ID
              </button>
              <button
                onClick={() => setEditLang('en')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  editLang === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Backup & Restore */}
            <button
              onClick={exportDataJSON}
              title="Unduh backup konfigurasi JSON lengkap"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Export</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              title="Unggah backup konfigurasi JSON"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 transition-all active:scale-95"
            >
              <Upload className="w-3.5 h-3.5 text-emerald-400" />
              <span>Import</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportFile}
              accept=".json"
              className="hidden"
            />

            <button
              onClick={resetToDefaults}
              title="Reset data ke konfigurasi asli"
              className="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/40 border border-slate-800 hover:border-rose-800/60 text-slate-400 hover:text-rose-300 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Buka Web Publik */}
            <button
              onClick={closeAdmin}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition-all"
            >
              <Eye className="w-4 h-4" />
              <span>Lihat Website Publik</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-3 sm:p-6 grid lg:grid-cols-12 gap-5 sm:gap-8 items-start">
        {/* Mobile Swipeable Tab Bar (visible on screens < 1024px) */}
        <div className="lg:hidden col-span-12 w-full overflow-x-auto no-scrollbar scrollbar-none flex items-center gap-2 py-2 sticky top-[62px] z-30 bg-slate-50/95 dark:bg-[#080d1a]/95 backdrop-blur-md -mt-1 -mx-3 px-3 border-b border-slate-200 dark:border-slate-800">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{tab.label.split('(')[0].trim()}</span>
              </button>
            )
          })}
        </div>

        {/* Desktop Sidebar Nav (visible only on lg+ screens) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-3 sticky top-20">
          {/* Quick Search Tab */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Cari bagian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-1">
            {filteredTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold text-left transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 translate-x-1'
                      : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span className="truncate">{tab.label}</span>
                  </div>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800/80 text-slate-500'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 text-xs text-slate-400">
            <div className="font-bold text-slate-300 flex items-center gap-1.5 text-xs">
              <Sliders className="w-3.5 h-3.5 text-blue-400" />
              <span>Info Status Proyek</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Total {projects.length} kartu proyek aktif. Anda bisa menambah, mengedit, atau mengubah urutannya kapan saja.
            </p>
          </div>
        </aside>

        {/* Central Editor Panel */}
        <main className="admin-panel-main col-span-12 lg:col-span-9 bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-xl space-y-6 min-h-[500px] transition-colors">
          {/* TAB 1: HERO & IDENTITAS */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5 text-blue-400" />
                  <span>Hero Section &amp; Identitas</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Atur seluruh konten landing: salam, nama, peran, biografi, badge status, kontak kilat, dan cuplikan developer.ts.
                </p>
              </div>

              {/* Status Badge Toggle */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <label className="text-sm font-bold text-white block">
                      Tampilkan Badge Status di Atas Judul
                    </label>
                    <p className="text-xs text-slate-400">
                      Saat ini tulisan "Sedang magang @ Geometri Indonesia" telah dinonaktifkan sesuai permintaan. Anda dapat menyalakannya kembali dengan teks kustom kapan saja.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.showHeroBadge}
                      onChange={(e) => {
                        updateSettings({ showHeroBadge: e.target.checked })
                        notifySaved()
                      }}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                {settings.showHeroBadge && (
                  <div className="space-y-3 pt-3 border-t border-slate-800">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Teks Badge Status</label>
                      <input
                        type="text"
                        value={currentLangContent.hero.badge || ''}
                        onChange={(e) => {
                          updateSection(editLang, 'hero', { badge: e.target.value })
                          notifySaved()
                        }}
                        placeholder="Contoh: Web Developer & Technical SEO Specialist"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Foto / Avatar Hero Selector */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
                <div>
                  <label className="text-sm font-bold text-white block">
                    Foto / Avatar Hero
                  </label>
                  <p className="text-xs text-slate-400">
                    Pilih gambar yang ditampilkan pada tab Foto di card Hero sebelah kanan.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      updateSettings({ heroPhotoUrl: '/daifa.jpg' })
                      notifySaved()
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                      (!settings.heroPhotoUrl || settings.heroPhotoUrl === '/daifa.jpg')
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <img src="/daifa.jpg" alt="Foto Asli" className="w-12 h-12 rounded-lg object-cover ring-1 ring-white/10" />
                    <div>
                      <div className="text-xs font-bold text-white">Foto Asli (Default Aktif)</div>
                      <div className="text-[11px] text-slate-400">Foto profil asli Da'ifa Maulana</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      updateSettings({ heroPhotoUrl: '/avatar.png' })
                      notifySaved()
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                      settings.heroPhotoUrl === '/avatar.png'
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <img src="/avatar.png" alt="Avatar" className="w-12 h-12 rounded-lg object-contain ring-1 ring-white/10 bg-slate-950" />
                    <div>
                      <div className="text-xs font-bold text-white">Avatar Ilustrasi Karakter</div>
                      <div className="text-[11px] text-slate-400">Gambar animasi karakter mikrofon</div>
                    </div>
                  </button>
                </div>

                {/* Floating Tag di Sudut Foto */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <label className="text-xs font-semibold text-slate-300">Teks Badge Mengambang di Sudut Foto</label>
                  <input
                    type="text"
                    value={currentLangContent.hero.tagWeb || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'hero', { tagWeb: e.target.value })
                      notifySaved()
                    }}
                    placeholder="Contoh: Web Developer"
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-[11px] text-slate-500">
                    Badge kecil yang melayang di pojok kanan bawah foto Hero (misal: "Web Developer").
                  </p>
                </div>
              </div>

              {/* Salam, Nama, Role */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Teks Salam</label>
                  <input
                    type="text"
                    value={currentLangContent.hero.greeting || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'hero', { greeting: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Nama Lengkap</label>
                  <input
                    type="text"
                    value={currentLangContent.hero.name || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'hero', { name: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Peran / Subtitle Utama</label>
                <input
                  type="text"
                  value={currentLangContent.hero.role || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'hero', { role: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Biografi Singkat</label>
                <textarea
                  rows={3}
                  value={currentLangContent.hero.bio || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'hero', { bio: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* 3 Statistik Bawah Hero */}
              <div className="pt-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  3 Statistik Pencapaian di Bawah Hero
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Statistik 1</span>
                    <input
                      type="text"
                      value={currentLangContent.hero.statWeb || ''}
                      onChange={(e) => {
                        updateSection(editLang, 'hero', { statWeb: e.target.value })
                        notifySaved()
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                    />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Statistik 2</span>
                    <input
                      type="text"
                      value={currentLangContent.hero.statHealth || ''}
                      onChange={(e) => {
                        updateSection(editLang, 'hero', { statHealth: e.target.value })
                        notifySaved()
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                    />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Statistik 3</span>
                    <input
                      type="text"
                      value={currentLangContent.hero.statProjects || ''}
                      onChange={(e) => {
                        updateSection(editLang, 'hero', { statProjects: e.target.value })
                        notifySaved()
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Hero Tech Tags Manager */}
              <div className="pt-2 space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tag Teknologi di Tab Foto
                </label>
                <div className="flex flex-wrap gap-2">
                  {heroTechTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300"
                    >
                      <span>{tag.name}</span>
                      <button
                        onClick={() => handleDeleteHeroTechTag(idx)}
                        className="text-slate-500 hover:text-rose-400"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 max-w-sm">
                  <input
                    type="text"
                    placeholder="Tambah tag baru..."
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                  <button
                    onClick={handleAddHeroTechTag}
                    className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                  >
                    Tambah
                  </button>
                </div>
              </div>

              {/* Developer.ts Code Editor */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Cuplikan Kode Tab "developer.ts"
                  </label>
                  <span className="text-[11px] text-slate-500 font-mono">TypeScript / JSON</span>
                </div>
                <textarea
                  rows={7}
                  value={settings.developerCodeSnippet || ''}
                  onChange={(e) => {
                    updateSettings({ developerCodeSnippet: e.target.value })
                    notifySaved()
                  }}
                  className="w-full p-4 rounded-2xl bg-[#060912] border border-slate-800 font-mono text-xs text-cyan-300 focus:outline-none focus:border-blue-500 leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* TAB 2: PROFIL & 3 PILAR */}
          {activeTab === 'profil' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-400" />
                  <span>Profil &amp; 3 Pilar Prinsip Kerja</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Atur narasi personal, latar belakang akademis, serta 3 pilar prinsip kerja pada kartu sisi kanan.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Badge Profil</label>
                  <input
                    type="text"
                    value={currentLangContent.profil.badge || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'profil', { badge: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Fokus Keahlian</label>
                  <input
                    type="text"
                    value={currentLangContent.profil.focus || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'profil', { focus: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Judul Utama Profil</label>
                <input
                  type="text"
                  value={currentLangContent.profil.heading || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'profil', { heading: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Paragraf 1 (Latar Belakang)</label>
                <textarea
                  rows={3}
                  value={currentLangContent.profil.paragraph1 || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'profil', { paragraph1: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Paragraf 2 (Aktivitas Industri)</label>
                <textarea
                  rows={3}
                  value={currentLangContent.profil.paragraph2 || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'profil', { paragraph2: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                />
              </div>

              {/* 3 PILAR PRINSIP */}
              <div className="pt-4 border-t border-slate-800 space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Pengaturan 3 Pilar Kartu Profil (Sisi Kanan)
                </label>

                {/* Pilar 1 */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-blue-400">Pilar 1: Clean Code</span>
                  <input
                    type="text"
                    value={currentLangContent.profil.pillar1Title || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'profil', { pillar1Title: e.target.value })
                      notifySaved()
                    }}
                    placeholder="Judul Pilar 1"
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                  <textarea
                    rows={2}
                    value={currentLangContent.profil.pillar1Desc || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'profil', { pillar1Desc: e.target.value })
                      notifySaved()
                    }}
                    placeholder="Deskripsi Pilar 1"
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                </div>

                {/* Pilar 2 */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-purple-400">Pilar 2: AI Workflow</span>
                  <input
                    type="text"
                    value={currentLangContent.profil.pillar2Title || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'profil', { pillar2Title: e.target.value })
                      notifySaved()
                    }}
                    placeholder="Judul Pilar 2"
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                  <textarea
                    rows={2}
                    value={currentLangContent.profil.pillar2Desc || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'profil', { pillar2Desc: e.target.value })
                      notifySaved()
                    }}
                    placeholder="Deskripsi Pilar 2"
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                </div>

                {/* Pilar 3 */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-400">Pilar 3: Technical SEO</span>
                  <input
                    type="text"
                    value={currentLangContent.profil.pillar3Title || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'profil', { pillar3Title: e.target.value })
                      notifySaved()
                    }}
                    placeholder="Judul Pilar 3"
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                  <textarea
                    rows={2}
                    value={currentLangContent.profil.pillar3Desc || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'profil', { pillar3Desc: e.target.value })
                      notifySaved()
                    }}
                    placeholder="Deskripsi Pilar 3"
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROYEK (SHOWCASE CARDS) */}
          {activeTab === 'proyek' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-blue-400" />
                    <span>Manajemen Kartu Proyek ({projects.length})</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Tambah, edit, ubah urutan (naik/turun), atau hapus kartu proyek publik.
                  </p>
                </div>
                <button
                  onClick={handleOpenAddProject}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Proyek Baru</span>
                </button>
              </div>

              {/* List Kartu Proyek */}
              <div className="space-y-3">
                {projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {proj.featured && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 uppercase tracking-wider">
                          {proj.category}
                        </span>
                        <span className="text-xs text-slate-500">{proj.role}</span>
                      </div>
                      <h3 className="font-bold text-base text-white truncate">{proj.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {editLang === 'en' && proj.descEn ? proj.descEn : proj.desc}
                      </p>
                      {proj.tags && proj.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {proj.tags.map((t, ti) => (
                            <span
                              key={ti}
                              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 self-end md:self-center">
                      <button
                        onClick={() => {
                          moveProject(idx, -1)
                          notifySaved()
                        }}
                        disabled={idx === 0}
                        title="Geser ke atas"
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                      >
                        <ArrowUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          moveProject(idx, 1)
                          notifySaved()
                        }}
                        disabled={idx === projects.length - 1}
                        title="Geser ke bawah"
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleOpenEditProject(idx)}
                        title="Edit kartu ini"
                        className="p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Hapus proyek "${proj.title}"?`)) {
                            deleteProject(idx)
                            notifySaved()
                          }
                        }}
                        title="Hapus proyek"
                        className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PENGALAMAN & HIGHLIGHTS */}
          {activeTab === 'pengalaman' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span>Pengalaman Kerja &amp; Poin Pencapaian</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Atur riwayat karier dan daftar butir pencapaian (checklist highlights) secara leluasa.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Posisi / Role</label>
                  <input
                    type="text"
                    value={currentLangContent.pengalaman.role || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'pengalaman', { role: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Nama Perusahaan / Organisasi</label>
                  <input
                    type="text"
                    value={currentLangContent.pengalaman.company || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'pengalaman', { company: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Badge Status</label>
                  <input
                    type="text"
                    value={currentLangContent.pengalaman.status || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'pengalaman', { status: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Periode</label>
                  <input
                    type="text"
                    value={currentLangContent.pengalaman.period || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'pengalaman', { period: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Ringkasan Tugas</label>
                <textarea
                  rows={3}
                  value={currentLangContent.pengalaman.desc || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'pengalaman', { desc: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                />
              </div>

              {/* Interactive Highlights Manager */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Daftar Poin Pencapaian / Tanggung Jawab ({highlights.length})
                </label>
                <div className="space-y-2">
                  {highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-start gap-2 flex-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{h}</span>
                      </div>
                      <button
                        onClick={() => handleDeleteHighlight(hIdx)}
                        className="text-slate-500 hover:text-rose-400 p-1"
                        title="Hapus butir ini"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-1">
                  <input
                    type="text"
                    placeholder="Tulis butir pencapaian baru..."
                    value={newHighlightText}
                    onChange={(e) => setNewHighlightText(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                  <button
                    onClick={handleAddHighlight}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                  >
                    Tambah Poin
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SKILLS & STACK */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span>Keahlian &amp; Stack Teknologi</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Atur judul, deskripsi, dan butir teknologi bergerak (Marquee Slider) untuk Frontend, Backend, dan SEO.
                </p>
              </div>

              {/* Section Header Inputs */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Judul Bagian</label>
                  <input
                    type="text"
                    value={currentLangContent.skills.title || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'skills', { title: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Subtitle</label>
                  <input
                    type="text"
                    value={currentLangContent.skills.subtitle || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'skills', { subtitle: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* 3 Categories Section with Card Items & Add buttons */}
              <div className="space-y-6 pt-4 border-t border-slate-800">
                {/* 1. FRONTEND */}
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Kategori 1: Frontend UI</span>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Judul Kategori (Frontend UI)"
                          value={currentLangContent.skills.catFrontend || ''}
                          onChange={(e) => {
                            updateSection(editLang, 'skills', { catFrontend: e.target.value })
                            notifySaved()
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Deskripsi Subtitle"
                          value={currentLangContent.skills.subFrontend || ''}
                          onChange={(e) => {
                            updateSection(editLang, 'skills', { subFrontend: e.target.value })
                            notifySaved()
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOpenAddSkill('frontend')}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/40 text-xs font-semibold shrink-0 transition-colors self-start sm:self-center"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Item Frontend</span>
                    </button>
                  </div>

                  {/* Frontend Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                    {(skillItems?.frontend || []).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`w-3.5 h-3.5 rounded-full shrink-0 border ${item.color}`} />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-white truncate">{item.name}</p>
                            <p className="text-[10px] text-slate-400 truncate">{item.desc}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 ml-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditSkill('frontend', idx)}
                            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteSkill('frontend', idx)}
                            className="p-1 rounded-lg hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                            title="Hapus"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {(!skillItems?.frontend || skillItems.frontend.length === 0) && (
                      <div className="col-span-full py-4 text-center text-xs text-slate-500 italic">
                        Belum ada item frontend. Klik tombol di atas untuk menambah.
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. BACKEND */}
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Kategori 2: Backend &amp; Database</span>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Judul Kategori (Backend & Data Pipeline)"
                          value={currentLangContent.skills.catBackend || ''}
                          onChange={(e) => {
                            updateSection(editLang, 'skills', { catBackend: e.target.value })
                            notifySaved()
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Deskripsi Subtitle"
                          value={currentLangContent.skills.subBackend || ''}
                          onChange={(e) => {
                            updateSection(editLang, 'skills', { subBackend: e.target.value })
                            notifySaved()
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOpenAddSkill('backend')}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold shrink-0 transition-colors self-start sm:self-center"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Item Backend</span>
                    </button>
                  </div>

                  {/* Backend Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                    {(skillItems?.backend || []).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`w-3.5 h-3.5 rounded-full shrink-0 border ${item.color}`} />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-white truncate">{item.name}</p>
                            <p className="text-[10px] text-slate-400 truncate">{item.desc}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 ml-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditSkill('backend', idx)}
                            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteSkill('backend', idx)}
                            className="p-1 rounded-lg hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                            title="Hapus"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {(!skillItems?.backend || skillItems.backend.length === 0) && (
                      <div className="col-span-full py-4 text-center text-xs text-slate-500 italic">
                        Belum ada item backend. Klik tombol di atas untuk menambah.
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. SEO & WORKFLOW TOOLS */}
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Kategori 3: SEO &amp; Workflow Tools</span>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Judul Kategori (SEO & Optimization Tools)"
                          value={currentLangContent.skills.catSeo || ''}
                          onChange={(e) => {
                            updateSection(editLang, 'skills', { catSeo: e.target.value })
                            notifySaved()
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Deskripsi Subtitle"
                          value={currentLangContent.skills.subSeo || ''}
                          onChange={(e) => {
                            updateSection(editLang, 'skills', { subSeo: e.target.value })
                            notifySaved()
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOpenAddSkill('seo')}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/40 text-xs font-semibold shrink-0 transition-colors self-start sm:self-center"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Item SEO Tool</span>
                    </button>
                  </div>

                  {/* SEO Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                    {(skillItems?.seo || []).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`w-3.5 h-3.5 rounded-full shrink-0 border ${item.color}`} />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-white truncate">{item.name}</p>
                            <p className="text-[10px] text-slate-400 truncate">{item.desc}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 ml-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditSkill('seo', idx)}
                            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteSkill('seo', idx)}
                            className="p-1 rounded-lg hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                            title="Hapus"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {(!skillItems?.seo || skillItems.seo.length === 0) && (
                      <div className="col-span-full py-4 text-center text-xs text-slate-500 italic">
                        Belum ada item SEO tool. Klik tombol di atas untuk menambah.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PENDIDIKAN & SERTIFIKASI */}
          {activeTab === 'pendidikan' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <span>Pendidikan &amp; Sertifikasi Resmi</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Atur riwayat studi universitas dan sertifikasi Google for Education Gemini.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Gelar &amp; Jurusan</label>
                  <input
                    type="text"
                    value={currentLangContent.pendidikan.degree || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'pendidikan', { degree: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Nama Kampus</label>
                  <input
                    type="text"
                    value={currentLangContent.pendidikan.campus || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'pendidikan', { campus: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>

              {/* Sertifikasi Google */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Detail Sertifikasi Resmi
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400">Nama Sertifikat</label>
                    <input
                      type="text"
                      value={currentLangContent.pendidikan.certName || ''}
                      onChange={(e) => {
                        updateSection(editLang, 'pendidikan', { certName: e.target.value })
                        notifySaved()
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400">Penerbit Sertifikat</label>
                    <input
                      type="text"
                      value={currentLangContent.pendidikan.certIssuer || ''}
                      onChange={(e) => {
                        updateSection(editLang, 'pendidikan', { certIssuer: e.target.value })
                        notifySaved()
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400">Masa Berlaku / Tanggal</label>
                  <input
                    type="text"
                    value={currentLangContent.pendidikan.certDate || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'pendidikan', { certDate: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400">Deskripsi Kompetensi</label>
                  <textarea
                    rows={2}
                    value={currentLangContent.pendidikan.certDesc || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'pendidikan', { certDesc: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: ORGANISASI */}
          {activeTab === 'organisasi' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Users2 className="w-5 h-5 text-blue-400" />
                    <span>Pengalaman Organisasi &amp; Kepanitiaan ({orgs.length})</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Tambah, edit, atau hapus peran organisasi &amp; kepanitiaan event Anda.
                  </p>
                </div>
                <button
                  onClick={handleOpenAddOrg}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Organisasi</span>
                </button>
              </div>

              <div className="space-y-3">
                {orgs.map((org, oIdx) => (
                  <div
                    key={oIdx}
                    className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-400">
                          {editLang === 'id' ? org.titleId : org.titleEn}
                        </span>
                        <span className="text-xs text-slate-500">· {org.period}</span>
                      </div>
                      <h4 className="font-bold text-white text-sm">
                        {editLang === 'id' ? org.orgId : org.orgEn}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {editLang === 'id' ? org.descId : org.descEn}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleOpenEditOrg(oIdx)}
                        className="p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400"
                        title="Edit organisasi ini"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('Hapus peran organisasi ini?')) {
                            deleteOrg(oIdx)
                            notifySaved()
                          }
                        }}
                        className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: KONTAK & SOSMED */}
          {activeTab === 'kontak' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>Informasi Kontak &amp; Sosmed</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Atur alamat email resmi, nomor WhatsApp, lokasi, serta judul ajakan kolaborasi.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Email Resmi</label>
                  <input
                    type="text"
                    value={currentLangContent.kontak.emailValue || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'kontak', { emailValue: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Nomor Telepon / WhatsApp</label>
                  <input
                    type="text"
                    value={currentLangContent.kontak.phoneValue || ''}
                    onChange={(e) => {
                      updateSection(editLang, 'kontak', { phoneValue: e.target.value })
                      notifySaved()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Lokasi / Domisili</label>
                <input
                  type="text"
                  value={currentLangContent.kontak.locationValue || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'kontak', { locationValue: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Judul Ajakan Kontak</label>
                <input
                  type="text"
                  value={currentLangContent.kontak.title || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'kontak', { title: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Subtitle Kontak</label>
                <textarea
                  rows={2}
                  value={currentLangContent.kontak.subtitle || ''}
                  onChange={(e) => {
                    updateSection(editLang, 'kontak', { subtitle: e.target.value })
                    notifySaved()
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white"
                />
              </div>
            </div>
          )}

          {/* TAB 9: TAMPILAN & WARNA CARD */}
          {activeTab === 'tampilan' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-blue-400" />
                  <span>Kustomisasi Desain &amp; Palet Warna Kartu</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Atur tema tampilan terang/gelap, palet aksen warna dinamis, sudut kelengkungan kartu, dan gaya background dot grid sesuai patokan di{' '}
                  <code className="text-blue-400 font-mono">design.md</code>.
                </p>
              </div>

              {/* Pilihan Tema Dashboard & Website: Terang vs Gelap */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tema Tampilan Utama (Dark / Light Mode)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Mode Terang */}
                  <button
                    type="button"
                    onClick={() => {
                      if (theme !== 'light') toggleTheme()
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      theme === 'light'
                        ? 'border-blue-500 bg-white shadow-md ring-2 ring-blue-500/30'
                        : 'border-slate-800 bg-slate-950/40 opacity-70 hover:opacity-100 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <Sun className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Mode Terang (Clean Light)</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Latar putih bersih, kontras teks tajam &amp; scannable</div>
                      </div>
                    </div>
                    {theme === 'light' && (
                      <span className="p-1 rounded-full bg-blue-600 text-white">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </button>

                  {/* Mode Gelap */}
                  <button
                    type="button"
                    onClick={() => {
                      if (theme !== 'dark') toggleTheme()
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      theme === 'dark'
                        ? 'border-blue-500 bg-slate-950 shadow-md ring-2 ring-blue-500/30'
                        : 'border-slate-800 bg-slate-950/40 opacity-70 hover:opacity-100 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Moon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Mode Gelap (Cyber Dark)</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Estetika futuristik malam, aksen glow elegan</div>
                      </div>
                    </div>
                    {theme === 'dark' && (
                      <span className="p-1 rounded-full bg-blue-600 text-white">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Pilihan 6 Aksen Warna */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Palet Aksen Warna Website
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(ACCENT_PALETTES).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => {
                        updateSettings({ accentColor: key })
                        notifySaved()
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        settings.accentColor === key
                          ? 'border-blue-500 bg-slate-950 ring-2 ring-blue-500/30'
                          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span
                          className="w-4 h-4 rounded-full shadow-sm shrink-0"
                          style={{ backgroundColor: val.primary }}
                        />
                        <span className="text-xs font-bold text-white">{val.label}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                        <span>{val.primary}</span>
                        <span>·</span>
                        <span>{val.dark}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pilihan Border Radius */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Kelengkungan Sudut Kartu (Border Radius)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'rounded-xl', label: 'Compact (12px)', desc: 'Padat & tajam' },
                    { id: 'rounded-2xl', label: 'Modern (16px)', desc: 'Standar aplikasi web' },
                    { id: 'rounded-3xl', label: 'Soft Glass (24px)', desc: 'Rekomendasi design.md' },
                  ].map((r) => (
                    <button
                      key={r.id}
                      onClick={() => {
                        updateSettings({ cardBorderRadius: r.id })
                        notifySaved()
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        settings.cardBorderRadius === r.id
                          ? 'border-blue-500 bg-blue-500/10 text-white'
                          : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{r.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{r.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Preview Card */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Pratinjau Hasil Desain Kartu (Live Preview)
                </label>
                <div
                  className={`p-6 ${settings.cardBorderRadius} bg-slate-950/80 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-4 max-w-lg`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: ACCENT_PALETTES[settings.accentColor]?.glow || 'rgba(37,99,235,0.2)',
                        color: ACCENT_PALETTES[settings.accentColor]?.dark || '#4f8ef7',
                      }}
                    >
                      {ACCENT_PALETTES[settings.accentColor]?.label}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">design.md compliant</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">Website Pesantren Tahfidz</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Sistem informasi pesantren putra &amp; putri dengan absensi santri dan monitoring realtime.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React.js', 'Tailwind CSS', 'Supabase'].map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL PROYEK */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-lg text-white">
                {editingProjectIndex !== null ? 'Edit Kartu Proyek' : 'Tambah Proyek Baru'}
              </h3>
              <button
                onClick={() => setIsProjectModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Judul Proyek</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  placeholder="Contoh: Website E-Commerce Toko"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Kategori</label>
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                  >
                    <option value="web">Web Dev &amp; Fullstack</option>
                    <option value="magang">Magang &amp; Klien</option>
                    <option value="kampus">Kampus &amp; Tim</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Peran &amp; Tahun</label>
                  <input
                    type="text"
                    value={projectForm.role}
                    onChange={(e) => setProjectForm({ ...projectForm, role: e.target.value })}
                    placeholder="Solo · Client Project · 2026"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="featuredCheck"
                  checked={projectForm.featured}
                  onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })}
                  className="w-4 h-4 rounded accent-blue-600"
                />
                <label htmlFor="featuredCheck" className="text-xs font-semibold text-amber-400 cursor-pointer">
                  Jadikan Proyek Unggulan (Tampil di atas dengan badge Featured)
                </label>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Deskripsi (Bahasa Indonesia)</label>
                <textarea
                  rows={2}
                  required
                  value={projectForm.desc}
                  onChange={(e) => setProjectForm({ ...projectForm, desc: e.target.value })}
                  placeholder="Jelaskan fitur dan tujuan aplikasi..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Deskripsi (English - Optional)</label>
                <textarea
                  rows={2}
                  value={projectForm.descEn}
                  onChange={(e) => setProjectForm({ ...projectForm, descEn: e.target.value })}
                  placeholder="Explain features in English..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Tags Teknologi (Pisahkan koma)</label>
                <input
                  type="text"
                  value={projectForm.tags}
                  onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                  placeholder="React.js, Tailwind CSS, Supabase, Vercel"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition-all"
                >
                  Simpan Kartu Proyek
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL ORGANISASI */}
      {isOrgModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-lg text-white">
                {editingOrgIndex !== null ? 'Edit Pengalaman Organisasi' : 'Tambah Organisasi Baru'}
              </h3>
              <button
                onClick={() => setIsOrgModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveOrg} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Peran / Jabatan (ID)</label>
                <input
                  type="text"
                  required
                  value={orgForm.titleId}
                  onChange={(e) => setOrgForm({ ...orgForm, titleId: e.target.value })}
                  placeholder="Contoh: Anggota Departemen PSDM"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Nama Organisasi / Event (ID)</label>
                <input
                  type="text"
                  required
                  value={orgForm.orgId}
                  onChange={(e) => setOrgForm({ ...orgForm, orgId: e.target.value })}
                  placeholder="Contoh: Himpunan Mahasiswa Informatika"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Periode</label>
                <input
                  type="text"
                  value={orgForm.period}
                  onChange={(e) => setOrgForm({ ...orgForm, period: e.target.value })}
                  placeholder="2024 – Sekarang"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Deskripsi Tugas</label>
                <textarea
                  rows={2}
                  value={orgForm.descId}
                  onChange={(e) => setOrgForm({ ...orgForm, descId: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsOrgModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Simpan Organisasi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL SKILL ITEM */}
      {isSkillModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-base text-white">
                  {editingSkill ? 'Edit Item Teknologi' : 'Tambah Item Teknologi Baru'}
                </h3>
                <p className="text-[11px] text-slate-400">
                  Kategori:{' '}
                  <span className="font-semibold text-blue-400 capitalize">
                    {skillModalCategory}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSkillModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm p-1 rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveSkill} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Nama Stack / Alat <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: React.js, Supabase, SEMrush, Docker"
                  value={skillForm.name}
                  onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
                <p className="text-[10px] text-slate-400">
                  Ikon otomatis terpasang untuk: React, Tailwind, Next.js, JS, Supabase, PHP, MySQL, Git, Ahrefs, GSC, GBP, GA4, HTML5, CSS3, Vercel, dll.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Deskripsi / Keterangan Singkat
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Frontend UI Library, Database BaaS"
                  value={skillForm.desc}
                  onChange={(e) => setSkillForm({ ...skillForm, desc: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Color Theme Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Tema Warna Badge</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-40 overflow-y-auto pr-1">
                  {SKILL_COLOR_PRESETS.map((preset, pIdx) => {
                    const isSelected = skillForm.color === preset.value
                    return (
                      <button
                        type="button"
                        key={pIdx}
                        onClick={() => setSkillForm({ ...skillForm, color: preset.value })}
                        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border text-[11px] font-medium transition-all ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                            : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${preset.dot}`} />
                        <span className="truncate">{preset.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Live Preview */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Preview Tampilan Marquee:</span>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                  <div className={`p-2 rounded-lg border text-xs ${skillForm.color}`}>
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {skillForm.name || 'Nama Stack'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {skillForm.desc || 'Deskripsi peran'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsSkillModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition-all"
                >
                  Simpan Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
