import { useState, useEffect } from 'react'

const links = [
  { label: 'Profil', href: '#profil' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Organisasi', href: '#organisasi' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '16px 40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(26,26,46,0.8)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <span style={{
        fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--blue)',
        letterSpacing: 2, fontWeight: 500,
      }}>DM.cv</span>
      <div style={{ display: 'flex', gap: 32 }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)',
            textDecoration: 'none', letterSpacing: 1,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{l.label}</a>
        ))}
      </div>
    </nav>
  )
}
