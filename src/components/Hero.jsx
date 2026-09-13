import { useEffect, useRef } from 'react'
import PhotoCard from './PhotoCard'

export default function Hero() {
  const nameRef = useRef()

  useEffect(() => {
    const letters = nameRef.current?.querySelectorAll('.letter')
    letters?.forEach((l, i) => { l.style.animationDelay = `${0.05 * i}s` })
  }, [])

  const nameChars = "Da'ifa".split('')
  const lastChars = "Maulana".split('')

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '100px 40px 60px',
      maxWidth: 1000, margin: '0 auto',
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealUp {
          from { transform: translateY(110%); }
          to { transform: translateY(0); }
        }
        .letter {
          display: inline-block;
          animation: revealUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        .chip:hover {
          border-color: var(--cyan) !important;
          color: var(--cyan) !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 24px rgba(0,212,255,0.15) !important;
        }
        .scroll-line {
          width: 40px; height: 1px; background: var(--muted);
          animation: scrollLine 2s ease infinite;
        }
        @keyframes scrollLine {
          0%,100% { width:40px; opacity:0.4; }
          50% { width:80px; opacity:1; }
        }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column-reverse !important; }
        }
      `}</style>

      <div className="hero-inner" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        gap: 60, width: '100%', flexWrap: 'wrap',
      }}>
        {/* LEFT */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--cyan)',
            letterSpacing: 4, marginBottom: 28,
            display: 'flex', alignItems: 'center', gap: 12,
            animation: 'fadeUp 0.8s ease forwards',
          }}>
            <span style={{ width: 40, height: 1, background: 'var(--cyan)', opacity: 0.5, display: 'block' }} />
            Curriculum Vitae
            <span style={{ width: 40, height: 1, background: 'var(--cyan)', opacity: 0.5, display: 'block' }} />
          </div>

          <div style={{
            fontSize: 'clamp(44px, 9vw, 88px)',
            fontWeight: 900, lineHeight: 0.9, marginBottom: 32,
          }} ref={nameRef}>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              {nameChars.map((c, i) => (
                <span key={i} className="letter" style={{ color: 'var(--text)' }}>
                  {c === ' ' ? '\u00A0' : c}
                </span>
              ))}
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              {lastChars.map((c, i) => (
                <span key={i} className="letter" style={{
                  color: 'transparent', WebkitTextStroke: '2px var(--blue)',
                  animationDelay: `${0.05 * (i + 6)}s`,
                }}>{c}</span>
              ))}
            </span>
          </div>

          <p style={{
            fontSize: 16, color: 'var(--muted)', lineHeight: 1.8,
            marginBottom: 36, maxWidth: 420,
            animation: 'fadeUp 0.8s ease 0.5s both',
          }}>
            Mahasiswa Informatika semester 3 · Bandung<br />
            Sedang belajar web development & maintenance.<br />
            Senang eksplorasi teknologi baru dengan AI.
          </p>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 10,
            animation: 'fadeUp 0.8s ease 0.7s both',
          }}>
            {[
              { icon: '✉', label: 'daifamaul17@gmail.com', href: 'mailto:daifamaul17@gmail.com' },
              { icon: '📱', label: '089525397093', href: 'tel:089525397093' },
              { icon: '⌥', label: 'github.com/daifa17', href: 'https://github.com/daifa17' },
              { icon: '📍', label: 'Bandung', href: null },
            ].map((c, i) => (
              c.href
                ? <a key={i} href={c.href} className="chip" style={{
                    fontFamily: 'var(--mono)', fontSize: 11, padding: '9px 18px',
                    borderRadius: 100, border: '1px solid var(--border)',
                    color: 'var(--muted)', textDecoration: 'none',
                    background: 'var(--card)', transition: 'all 0.3s ease',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}
                  target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                ><span>{c.icon}</span>{c.label}</a>
                : <span key={i} style={{
                    fontFamily: 'var(--mono)', fontSize: 11, padding: '9px 18px',
                    borderRadius: 100, border: '1px solid var(--border)',
                    color: 'var(--muted)', background: 'var(--card)',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}><span>{c.icon}</span>{c.label}</span>
            ))}
          </div>

          <div style={{
            marginTop: 48, fontFamily: 'var(--mono)', fontSize: 11,
            color: 'var(--muted)', letterSpacing: 3,
            display: 'flex', alignItems: 'center', gap: 16,
            animation: 'fadeUp 0.8s ease 1s both',
          }}>
            <div className="scroll-line" />
            SCROLL
          </div>
        </div>

        {/* RIGHT — Photo */}
        <PhotoCard />
      </div>
    </section>
  )
}
