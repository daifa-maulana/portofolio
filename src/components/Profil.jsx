import Section from './Section'

export default function Profil() {
  return (
    <Section id="profil" num="01" title="Profil">
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 20, padding: 40, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,142,247,0.08), transparent 70%)',
        }} />
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 80, lineHeight: 1,
          color: 'var(--blue)', opacity: 0.08,
          position: 'absolute', top: 10, left: 24,
          pointerEvents: 'none', userSelect: 'none',
        }}>"</div>
        <p style={{
          fontSize: 17, color: '#94a3b8', lineHeight: 2,
          position: 'relative', zIndex: 1, maxWidth: 700,
        }}>
          Mahasiswa aktif Program Studi Informatika semester 3 dengan{' '}
          <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>IPK 3,78</span>{' '}
          yang memiliki ketertarikan untuk belajar lebih dalam di bidang web maintenance.
          Pernah mengerjakan beberapa proyek web berbasis HTML, CSS, PHP, dan JavaScript
          sebagai bagian dari pembelajaran. Terbiasa memanfaatkan{' '}
          <span style={{ color: 'var(--purple)', fontWeight: 700 }}>AI sebagai alat bantu</span>{' '}
          belajar dan eksplorasi, serta aktif berorganisasi dengan semangat belajar
          dan kontribusi yang tinggi.
        </p>
      </div>
    </Section>
  )
}
