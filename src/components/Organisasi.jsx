import { useState } from 'react'
import Section from './Section'

const org = [
  { role: 'Staff Departemen SDM', org: 'Himpunan Mahasiswa Informatika', period: '2025–Sekarang', desc: 'Pengelolaan dan pengembangan sumber daya mahasiswa himpunan.', accent: '#4f8ef7', icon: '🏛️' },
  { role: 'Ketua Pelaksana', org: 'Seminar "English Confident Mindset"', period: '2024', desc: 'Memimpin dan mengkoordinasikan seluruh pelaksanaan seminar.', accent: '#00d4ff', icon: '🎤' },
  { role: 'Panitia Humas', org: 'Seminar Statistika Bisnis — Analisis Risiko', period: '2026', desc: 'Publikasi dan hubungan masyarakat untuk promosi acara seminar.', accent: '#a78bfa', icon: '📢' },
  { role: 'Panitia Humas', org: 'Seminar Statistika Bisnis — Dunia Kerja', period: '2026', desc: 'Publikasi dan hubungan masyarakat untuk promosi acara seminar.', accent: '#a78bfa', icon: '📢' },
  { role: 'Ketua Pelaksana', org: 'Pengabdian Masyarakat', period: '2026', desc: 'Memimpin program pengabdian masyarakat lingkungan sekitar kampus.', accent: '#34d399', icon: '🤝' },
  { role: 'Panitia Logistik', org: 'Ospek Jurusan Informatika', period: '2025', desc: 'Mengelola kebutuhan logistik selama kegiatan orientasi mahasiswa baru.', accent: '#fb923c', icon: '📦' },
]

export default function Organisasi() {
  const [hovered, setHovered] = useState(null)
  const [expanded, setExpanded] = useState(null)

  return (
    <Section id="organisasi" num="05" title="Organisasi & Kepanitiaan">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {org.map((o, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setExpanded(expanded === i ? null : i)}
            style={{
              background: hovered === i || expanded === i
                ? `linear-gradient(135deg, rgba(${hexToRgb(o.accent)},0.08), var(--card))`
                : 'var(--card)',
              border: `1px solid ${hovered === i || expanded === i ? o.accent + '44' : 'var(--border)'}`,
              borderRadius: 16,
              overflow: 'hidden',
              transform: hovered === i ? 'translateX(6px)' : 'translateX(0)',
              boxShadow: hovered === i ? `0 8px 32px rgba(0,0,0,0.3), -4px 0 0 ${o.accent}` : 'none',
              transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
              cursor: 'pointer',
            }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', gap: 16, padding: '20px 24px',
              flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: `rgba(${hexToRgb(o.accent)},0.1)`,
                  border: `1px solid ${o.accent}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20,
                  transform: hovered === i ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}>{o.icon}</div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 3 }}>
                    {o.role}
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: 11, color: o.accent,
                  }}>{o.org}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 11,
                  padding: '5px 14px', borderRadius: 100,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  color: 'var(--muted)', whiteSpace: 'nowrap',
                }}>{o.period}</span>
                <div style={{
                  width: 20, height: 20, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: 'var(--muted)',
                  transform: expanded === i ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease',
                  fontSize: 12,
                }}>▼</div>
              </div>
            </div>

            {/* Expandable desc */}
            <div style={{
              maxHeight: expanded === i ? 80 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}>
              <div style={{
                padding: '0 24px 20px 84px',
                fontSize: 14, color: 'var(--muted)', lineHeight: 1.7,
                borderTop: `1px solid ${o.accent}22`,
                paddingTop: 16,
              }}>{o.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function hexToRgb(hex) {
  if (hex.startsWith('var')) return '79,142,247'
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  return `${r},${g},${b}`
}