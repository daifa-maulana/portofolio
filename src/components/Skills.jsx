import { useState } from 'react'
import Section from './Section'

const skills = [
  { icon: '🌐', name: 'HTML & CSS', level: 'Dasar', color: '#fb923c', pct: 55 },
  { icon: '⚡', name: 'JavaScript', level: 'Dasar', color: '#4f8ef7', pct: 45 },
  { icon: '⚛️', name: 'React.js', level: 'Dasar', color: '#00d4ff', pct: 40 },
  { icon: '🎨', name: 'Tailwind CSS', level: 'Dasar', color: '#4f8ef7', pct: 50 },
  { icon: '🐘', name: 'PHP', level: 'Dasar', color: '#a78bfa', pct: 45 },
  { icon: '☕', name: 'Java', level: 'Dasar', color: '#fb923c', pct: 35 },
  { icon: '🗄️', name: 'MySQL', level: 'Dasar', color: '#4f8ef7', pct: 45 },
  { icon: '⚡', name: 'Supabase', level: 'Dasar', color: '#34d399', pct: 40 },
  { icon: '🤖', name: 'AI-Assisted Dev', level: 'Aktif', color: '#00d4ff', pct: 75 },
  { icon: '🔧', name: 'Web Debugging', level: 'Dasar', color: '#a78bfa', pct: 40 },
]

export default function Skills() {
  const [hovered, setHovered] = useState(null)
  const [active, setActive] = useState(null)

  return (
    <Section id="skills" num="03" title="Familiar Dengan">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
      }}>
        {skills.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActive(active === i ? null : i)}
            style={{
              background: hovered === i || active === i
                ? `linear-gradient(135deg, rgba(${hexToRgb(s.color)},0.12), var(--card))`
                : 'var(--card)',
              border: `1px solid ${hovered === i || active === i ? s.color + '55' : 'var(--border)'}`,
              borderRadius: 20, padding: '24px 20px',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              transform: hovered === i ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: hovered === i ? `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${s.color}20` : 'none',
              transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Top glow */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
              opacity: hovered === i || active === i ? 1 : 0,
              transition: 'opacity 0.3s',
            }}/>

            <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
              {s.name}
            </div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 10,
              color: hovered === i ? s.color : 'var(--muted)',
              letterSpacing: 1, marginBottom: 14,
              transition: 'color 0.3s',
            }}>{s.level.toUpperCase()}</div>

            {/* Progress bar */}
            <div style={{
              height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', borderRadius: 2,
                background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`,
                width: hovered === i || active === i ? `${s.pct}%` : '0%',
                transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: `0 0 8px ${s.color}`,
              }}/>
            </div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 9, color: s.color,
              marginTop: 4, textAlign: 'right',
              opacity: hovered === i || active === i ? 1 : 0,
              transition: 'opacity 0.3s',
            }}>{s.pct}%</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  return `${r},${g},${b}`
}