import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef()
  const ringRef = useRef()
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', move)

    const links = document.querySelectorAll('a, button, [data-hover]')
    const enter = () => {
      dotRef.current.style.transform = 'scale(3)'
      dotRef.current.style.background = 'var(--cyan)'
      ringRef.current.style.transform = 'scale(1.8)'
      ringRef.current.style.borderColor = 'var(--cyan)'
      ringRef.current.style.opacity = '0.6'
    }
    const leave = () => {
      dotRef.current.style.transform = 'scale(1)'
      dotRef.current.style.background = 'var(--blue)'
      ringRef.current.style.transform = 'scale(1)'
      ringRef.current.style.borderColor = 'var(--blue)'
      ringRef.current.style.opacity = '1'
    }

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    let raf
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x - 5 + 'px'
        dotRef.current.style.top = pos.current.y - 5 + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x - 20 + 'px'
        ringRef.current.style.top = ring.current.y - 20 + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); observer.disconnect() }
  }, [])

  const dot = {
    position: 'fixed', width: 10, height: 10, borderRadius: '50%',
    background: 'var(--blue)', pointerEvents: 'none', zIndex: 9999,
    transition: 'transform 0.2s, background 0.2s', mixBlendMode: 'difference',
  }
  const ringStyle = {
    position: 'fixed', width: 40, height: 40, borderRadius: '50%',
    border: '1px solid var(--blue)', pointerEvents: 'none', zIndex: 9998,
    transition: 'transform 0.3s, border-color 0.3s, opacity 0.3s',
  }

  return (
    <>
      <div ref={dotRef} style={dot} />
      <div ref={ringRef} style={ringStyle} />
    </>
  )
}
