import { useEffect, useRef } from 'react'

export default function Background() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    let t = 0
    let mouse = { x: w/2, y: h/2 }

    window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight })
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5,
      twinkle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.005,
    }))

    // Floating hex grid points
    const hexPoints = Array.from({ length: 20 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      size: 20 + Math.random() * 40,
      opacity: 0.02 + Math.random() * 0.05,
      speed: 0.1 + Math.random() * 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      t += 0.008

      // Deep space gradient
      const bg = ctx.createRadialGradient(w*0.3, h*0.2, 0, w*0.5, h*0.5, w)
      bg.addColorStop(0, 'rgba(10,10,30,0.4)')
      bg.addColorStop(0.5, 'rgba(5,5,15,0.3)')
      bg.addColorStop(1, 'rgba(0,0,5,0.5)')
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h)

      // Stars
      stars.forEach(s => {
        s.twinkle += s.speed
        const a = 0.15 + Math.sin(s.twinkle) * 0.35
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(200,220,255,${a})`
        ctx.shadowColor = '#4f8ef7'; ctx.shadowBlur = 2
        ctx.fill(); ctx.shadowBlur = 0
      })

      // Mouse-reactive orbs
      const orbs = [
        { x: mouse.x*0.1 + w*0.15, y: mouse.y*0.05 + h*0.15, r: 400, c: '79,142,247', speed: 0.25 },
        { x: w - mouse.x*0.08 - w*0.1, y: h - mouse.y*0.06 - h*0.1, r: 350, c: '167,139,250', speed: 0.3 },
        { x: w*0.5 + Math.sin(t*0.4)*100, y: h*0.5 + Math.cos(t*0.3)*80, r: 280, c: '0,212,255', speed: 0 },
      ]
      orbs.forEach(o => {
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        g.addColorStop(0, `rgba(${o.c},0.06)`); g.addColorStop(1, `rgba(${o.c},0)`)
        ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, Math.PI*2)
        ctx.fillStyle = g; ctx.fill()
      })

      // Hex grid
      hexPoints.forEach(p => {
        p.y -= p.speed
        if (p.y < -50) p.y = h + 50
        const pulse = 0.5 + Math.sin(t*2 + p.x) * 0.5
        ctx.save(); ctx.translate(p.x, p.y)
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const a = (i/6)*Math.PI*2 - Math.PI/6
          i === 0 ? ctx.moveTo(Math.cos(a)*p.size, Math.sin(a)*p.size)
                  : ctx.lineTo(Math.cos(a)*p.size, Math.sin(a)*p.size)
        }
        ctx.closePath()
        ctx.strokeStyle = `rgba(79,142,247,${p.opacity * pulse})`
        ctx.lineWidth = 0.5; ctx.stroke(); ctx.restore()
      })

      requestAnimationFrame(draw)
    }
    draw()
  }, [])

  return (
    <>
      <canvas ref={canvasRef} style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }}/>
      {/* Grid overlay */}
      <div style={{
        position:'fixed', inset:0, zIndex:1, pointerEvents:'none',
        backgroundImage:`
          linear-gradient(rgba(79,142,247,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,142,247,0.035) 1px, transparent 1px)
        `,
        backgroundSize:'64px 64px',
      }}/>
      {/* Scanline overlay */}
      <div style={{
        position:'fixed', inset:0, zIndex:2, pointerEvents:'none',
        backgroundImage:'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
      }}/>
    </>
  )
}
