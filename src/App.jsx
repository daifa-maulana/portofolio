import Hero from './components/Hero'
import Profil from './components/Profil'
import Pengalaman from './components/Pengalaman'
import Pendidikan from './components/Pendidikan'
import Skills from './components/Skills'
import DigitalMarketing from './components/DigitalMarketing'
import Proyek from './components/Proyek'
import Organisasi from './components/Organisasi'
import Kontak from './components/Kontak'
import Footer from './components/Footer'
import Nav from './components/Nav'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#080d1a] bg-grid-clean relative selection:bg-blue-500/20 text-slate-900 dark:text-slate-100 overflow-x-hidden">
      {/* Top subtle spotlight glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 -right-20 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 -left-20 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Profil />
        <Pengalaman />
        <Pendidikan />
        <Skills />
        <DigitalMarketing />
        <Proyek />
        <Organisasi />
        <Kontak />
      </main>
      <Footer />
    </div>
  )
}
