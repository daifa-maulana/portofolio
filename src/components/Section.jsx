import useInView from '../hooks/useInView'

export default function Section({ id, num, title, children }) {
  const [ref, visible] = useInView(0.1)

  return (
    <section id={id} ref={ref} style={{
      maxWidth: 1000, margin: '0 auto', padding: '80px 40px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(50px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48
      }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--blue)',
          letterSpacing: 3, opacity: 0.7,
        }}>{num}</span>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: 'var(--text)' }}>{title}</h2>
        <div style={{
          flex: 1, height: 1,
          background: 'linear-gradient(90deg, var(--border), transparent)',
        }} />
      </div>
      {children}
    </section>
  )
}
