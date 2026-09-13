import { useState } from 'react'
import Section from './Section'

export default function Pendidikan() {
  const [hovered, setHovered] = useState(false)

  return (
    <Section id="pendidikan" num="02" title="Pendidikan">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered
            ? 'linear-gradient(135deg, rgba(79,142,247,0.12), rgba(0,212,255,0.06))'
            : 'var(--card)',
          border: `1px solid ${hovered ? 'rgba(0,212,255,0.5)' : 'var(--border)'}`,
          borderRadius: 24, padding: '40px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 32,
          position: 'relative', overflow: 'hidden',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? '0 32px 64px rgba(0,0,0,0.5), 0 0 60px rgba(0,212,255,0.08)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          cursor: 'default',
        }}
      >
        {/* Animated corner accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: hovered ? 200 : 80, height: hovered ? 200 : 80,
          background: 'radial-gradient(circle at 0 0, rgba(0,212,255,0.15), transparent 70%)',
          transition: 'all 0.6s ease',
          borderRadius: '0 0 100% 0',
        }}/>
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: hovered ? 180 : 60, height: hovered ? 180 : 60,
          background: 'radial-gradient(circle at 100% 100%, rgba(167,139,250,0.1), transparent 70%)',
          transition: 'all 0.6s ease',
        }}/>

        {/* Scanning line */}
        {hovered && (
          <div style={{
            position: 'absolute', left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent)',
            animation: 'scanLine 1.5s ease-in-out infinite',
            pointerEvents: 'none',
          }}/>
        )}
        <style>{`
          @keyframes scanLine {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes countUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div>
          {/* Label */}
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--cyan)',
            letterSpacing: 4, marginBottom: 12, opacity: 0.7,
          }}>INSTITUTION_DATA</div>

          <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--text)', marginBottom: 8 }}>
            S1 Informatika
          </div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--blue)', marginBottom: 24,
          }}>
            Universitas Teknologi Digital
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { label: 'IPK', value: '3.78', color: 'var(--green)', icon: '⭐' },
              { label: 'SEMESTER', value: '3', color: 'var(--cyan)', icon: '📅' },
              { label: 'STATUS', value: 'AKTIF', color: 'var(--purple)', icon: '✅' },
            ].map((s, i) => (
              <div key={i} style={{
                background: `rgba(${s.color === 'var(--green)' ? '52,211,153' : s.color === 'var(--cyan)' ? '0,212,255' : '167,139,250'},0.08)`,
                border: `1px solid rgba(${s.color === 'var(--green)' ? '52,211,153' : s.color === 'var(--cyan)' ? '0,212,255' : '167,139,250'},0.3)`,
                borderRadius: 12, padding: '10px 18px', minWidth: 90,
                transform: hovered ? `translateY(${-i*2}px)` : 'translateY(0)',
                transition: `transform 0.4s ease ${i*0.05}s`,
              }}>
                <div style={{ fontSize: 9, fontFamily: 'var(--mono)', color: 'var(--muted)', marginBottom: 4 }}>
                  {s.icon} {s.label}
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — animated year */}
        <div style={{
          fontFamily: 'var(--mono)', textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{
            fontSize: 72, fontWeight: 900, lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: `1px rgba(79,142,247,${hovered ? 0.5 : 0.2})`,
            transition: 'all 0.4s ease',
            userSelect: 'none',
          }}>2024</div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)',
            letterSpacing: 3, marginTop: 4,
          }}>— SEKARANG</div>
        </div>
      </div>
    </Section>
  )
}