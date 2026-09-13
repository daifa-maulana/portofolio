import { useState } from 'react'

export default function Card({ children, accent = 'var(--blue)', style = {} }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card)',
        border: `1px solid ${hovered ? accent + '44' : 'var(--border)'}`,
        borderRadius: 20,
        padding: 28,
        marginBottom: 16,
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px ${accent}22` : 'none',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        ...style,
      }}
    >
      {/* Glow top-left */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 160, height: 160,
        background: `radial-gradient(circle at 0 0, ${accent}18, transparent 70%)`,
        borderRadius: '0 0 100% 0',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />
      {children}
    </div>
  )
}
