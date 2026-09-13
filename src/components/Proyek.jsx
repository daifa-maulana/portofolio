import { useState } from 'react'
import Section from './Section'

const Tag = ({ children, color }) => (
  <span style={{
    fontFamily: 'var(--mono)', fontSize: 10, padding: '4px 12px',
    borderRadius: 8, border: '1px solid ' + color + '44',
    color: color, background: color + '11', letterSpacing: 0.5,
  }}>{children}</span>
)

const proyek = [
  {
    title: 'Web Toko Sarung', sub: 'Proyek Mandiri • 2024', num: '01',
    desc: 'Website manajemen toko sarung dengan fitur tambah, edit, dan hapus produk secara real-time.',
    tags: [
      { label: 'Next.js', color: '#f1f5f9' },
      { label: 'TypeScript', color: '#4f8ef7' },
      { label: 'Tailwind', color: '#00d4ff' },
      { label: 'Supabase', color: '#34d399' },
    ],
    link: 'https://toko-sarung.vercel.app', accent: '#4f8ef7',
  },
  {
    title: 'Web Kelas', sub: 'Proyek Kampus • 2026', num: '02',
    desc: 'Aplikasi web profil dan manajemen data kelas dengan sistem login admin.',
    tags: [
      { label: 'React.js', color: '#00d4ff' },
      { label: 'JSX', color: '#4f8ef7' },
      { label: 'Tailwind', color: '#00d4ff' },
      { label: 'Supabase', color: '#34d399' },
    ],
    link: 'https://web-rennaissans13.vercel.app', accent: '#00d4ff',
  },
  {
    title: 'MyReminder', sub: 'Proyek Pribadi • 2026', num: '03',
    desc: 'Aplikasi pengingat berbasis web dengan fitur alarm, notifikasi, dan jadwal waktu sholat.',
    tags: [
      { label: 'HTML', color: '#fb923c' },
      { label: 'CSS', color: '#4f8ef7' },
      { label: 'JavaScript', color: '#4f8ef7' },
      { label: 'Median.co', color: '#a78bfa' },
    ],
    link: 'https://capable-lily-d11ffc.netlify.app', accent: '#a78bfa',
  },
  {
    title: 'Web Kantin Kampus', sub: 'Proyek Kampus • 2025', num: '04',
    desc: 'Sistem informasi kantin berbasis web untuk menampilkan menu harian kampus.',
    tags: [
      { label: 'HTML', color: '#fb923c' },
      { label: 'CSS', color: '#4f8ef7' },
      { label: 'PHP', color: '#a78bfa' },
    ],
    link: null, accent: '#fb923c',
  },
  {
    title: 'Kasir Online', sub: 'Proyek Kampus • 2025', num: '05',
    desc: 'Aplikasi kasir web sederhana dengan fitur pencatatan transaksi menggunakan PHP.',
    tags: [
      { label: 'HTML', color: '#fb923c' },
      { label: 'CSS', color: '#4f8ef7' },
      { label: 'PHP', color: '#a78bfa' },
    ],
    link: null, accent: '#34d399',
  },
  {
    title: 'Web Karang Taruna', sub: 'Proyek Komunitas • 2025', num: '06',
    desc: 'Website profil organisasi Karang Taruna sebagai sarana informasi warga sekitar.',
    tags: [
      { label: 'HTML', color: '#fb923c' },
      { label: 'CSS', color: '#4f8ef7' },
      { label: 'PHP', color: '#a78bfa' },
    ],
    link: null, accent: '#f472b6',
  },
]

export default function Proyek() {
  const [hovered, setHovered] = useState(null)

  return (
    <Section id="proyek" num="04" title="Proyek">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {proyek.map((p, i) => (
          <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ background: 'var(--card)', border: '1px solid ' + (hovered === i ? p.accent + '55' : 'var(--border)'), borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden', transform: hovered === i ? 'translateY(-8px)' : 'translateY(0)', boxShadow: hovered === i ? '0 24px 48px rgba(0,0,0,0.5)' : 'none', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}>

            <div style={{ position: 'absolute', top: -10, right: 16, fontSize: 80, fontWeight: 900, lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px ' + p.accent + (hovered === i ? '33' : '11'), fontFamily: 'var(--mono)', userSelect: 'none', transition: 'all 0.4s ease' }}>{p.num}</div>

            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, ' + p.accent + ', transparent)', opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s' }} />

            <div style={{ position: 'absolute', top: 0, left: 0, width: hovered === i ? 150 : 60, height: hovered === i ? 150 : 60, background: 'radial-gradient(circle at 0 0, ' + p.accent + '18, transparent 70%)', transition: 'all 0.5s ease' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, position: 'relative' }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: p.accent, letterSpacing: 0.5 }}>{p.sub}</div>
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 10, padding: '5px 12px', background: p.accent + '18', border: '1px solid ' + p.accent + '44', borderRadius: 100, color: p.accent, textDecoration: 'none', whiteSpace: 'nowrap' }}>LIVE ↗</a>
              )}
            </div>

            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {p.tags.map((t, j) => <Tag key={j} color={t.color}>{t.label}</Tag>)}
            </div>

            <div style={{ height: 1, background: 'linear-gradient(90deg, ' + p.accent + ', transparent)', transform: hovered === i ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} />
          </div>
        ))}
      </div>
    </Section>
  )
}