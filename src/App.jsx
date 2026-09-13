import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import Profil from './components/Profil'
import Pendidikan from './components/Pendidikan'
import Skills from './components/Skills'
import Proyek from './components/Proyek'
import Organisasi from './components/Organisasi'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Background from './components/Background'
import Nav from './components/Nav'

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Cursor />
      <Background />
      <Nav />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Profil />
        <Pendidikan />
        <Skills />
        <Proyek />
        <Organisasi />
        <Footer />
      </main>
    </div>
  )
}
