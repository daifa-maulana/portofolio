export default function Footer() {
  return (
    <footer style={{
      maxWidth: 1000, margin: '0 auto', padding: '40px 40px 60px',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 16,
    }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
        ✦ Da'ifa Maulana — 2025
      </span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
        Built with React + Vite
      </span>
    </footer>
  )
}
