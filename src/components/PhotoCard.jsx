import { useEffect, useRef, useState } from 'react'

export default function PhotoCard() {
  const canvasRef = useRef()
  const containerRef = useRef()
  const photoRef = useRef()
  const [rotateY, setRotateY] = useState(0)
  const [rotateX, setRotateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [exploding, setExploding] = useState(false)
  const [easterEgg, setEasterEgg] = useState(false)
  const [hint, setHint] = useState(true)
  const dragStart = useRef({ x: 0, y: 0, ry: 0, rx: 0 })
  const autoRotate = useRef(true)
  const autoAngle = useRef(0)
  const explodeParticles = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const W = canvas.width = 420
    const H = canvas.height = 520
    let t = 0

    const orbitParticles = Array.from({ length: 80 }, (_, i) => ({
      angle: (i / 80) * Math.PI * 2,
      radius: 160 + Math.random() * 40,
      speed: 0.003 + Math.random() * 0.007,
      size: 1 + Math.random() * 2.5,
      color: ['#4f8ef7','#00d4ff','#a78bfa','#34d399','#f472b6'][Math.floor(Math.random()*5)],
      opacity: 0.4 + Math.random() * 0.6,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.01

      const g = ctx.createRadialGradient(W/2, H/2, 60, W/2, H/2, 220)
      g.addColorStop(0, 'rgba(79,142,247,0.06)')
      g.addColorStop(0.6, 'rgba(0,212,255,0.08)')
      g.addColorStop(1, 'rgba(79,142,247,0)')
      ctx.beginPath(); ctx.arc(W/2, H/2, 210, 0, Math.PI*2)
      ctx.fillStyle = g; ctx.fill()

      for (let r = 0; r < 3; r++) {
        ctx.save(); ctx.translate(W/2, H/2)
        ctx.rotate(t*(0.15+r*0.08)*(r%2?1:-1))
        ctx.beginPath(); ctx.arc(0, 0, 158+r*16, 0, Math.PI*2)
        ctx.strokeStyle = `rgba(${r===0?'79,142,247':r===1?'0,212,255':'167,139,250'},${0.12-r*0.03})`
        ctx.lineWidth=1; ctx.setLineDash([5,12]); ctx.stroke()
        ctx.setLineDash([]); ctx.restore()
      }

      ctx.save(); ctx.translate(W/2, H/2); ctx.rotate(t*0.5)
      for (let i = 0; i < 6; i++) {
        const a = (i/6)*Math.PI*2
        ctx.beginPath(); ctx.arc(0, 0, 170, a, a+0.28)
        ctx.strokeStyle = `rgba(0,212,255,${0.5+Math.sin(t*3+i)*0.5})`
        ctx.lineWidth=3; ctx.stroke()
      }
      ctx.restore()

      orbitParticles.forEach(p => {
        p.angle += p.speed
        const wobble = Math.sin(t*2+p.angle*3)*10
        const x = W/2+Math.cos(p.angle)*(p.radius+wobble)
        const y = H/2+Math.sin(p.angle)*(p.radius+wobble)*0.62
        const pulse = 0.5+Math.sin(t*4+p.angle)*0.5
        ctx.beginPath(); ctx.arc(x, y, p.size*pulse, 0, Math.PI*2)
        ctx.fillStyle=p.color; ctx.globalAlpha=p.opacity*pulse
        ctx.shadowColor=p.color; ctx.shadowBlur=8
        ctx.fill(); ctx.globalAlpha=1; ctx.shadowBlur=0
      })

      if (exploding) {
        explodeParticles.current.forEach(p => {
          p.x += p.vx; p.y += p.vy; p.vy += 0.2; p.life -= 0.02
          if (p.life > 0) {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size*p.life, 0, Math.PI*2)
            ctx.fillStyle=p.color; ctx.globalAlpha=p.life
            ctx.shadowColor=p.color; ctx.shadowBlur=12
            ctx.fill(); ctx.globalAlpha=1; ctx.shadowBlur=0
          }
        })
      }

      ctx.save(); ctx.translate(W/2, H/2); ctx.rotate(-t*0.6)
      for (let i = 0; i < 4; i++) {
        const a = (i/4)*Math.PI*2
        ctx.beginPath(); ctx.arc(Math.cos(a)*172, Math.sin(a)*172*0.62, 5, 0, Math.PI*2)
        ctx.fillStyle='#00d4ff'; ctx.shadowColor='#00d4ff'; ctx.shadowBlur=15
        ctx.fill(); ctx.shadowBlur=0
      }
      ctx.restore()

      requestAnimationFrame(draw)
    }
    draw()
  }, [exploding])

  useEffect(() => {
    if (isDragging) return
    let raf
    const animate = () => {
      if (autoRotate.current && !isDragging) {
        autoAngle.current += 0.3
        setRotateY(Math.sin(autoAngle.current * Math.PI / 180) * 15)
        setRotateX(Math.cos(autoAngle.current * Math.PI / 180) * 5)
      }
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [isDragging])

  const onMouseDown = e => {
    setIsDragging(true)
    autoRotate.current = false
    dragStart.current = { x: e.clientX, y: e.clientY, ry: rotateY, rx: rotateX }
    setHint(false)
  }
  const onMouseMove = e => {
    if (!isDragging) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    setRotateY(dragStart.current.ry + dx * 0.5)
    setRotateX(dragStart.current.rx - dy * 0.3)
  }
  const onMouseUp = () => {
    setIsDragging(false)
    setTimeout(() => { autoRotate.current = true }, 2000)
  }

  const onTouchStart = e => {
    setIsDragging(true)
    autoRotate.current = false
    const touch = e.touches[0]
    dragStart.current = { x: touch.clientX, y: touch.clientY, ry: rotateY, rx: rotateX }
    setHint(false)
  }
  const onTouchMove = e => {
    if (!isDragging) return
    const touch = e.touches[0]
    const dx = touch.clientX - dragStart.current.x
    const dy = touch.clientY - dragStart.current.y
    setRotateY(dragStart.current.ry + dx * 0.5)
    setRotateX(dragStart.current.rx - dy * 0.3)
  }

  const handleClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    explodeParticles.current = Array.from({ length: 40 }, () => ({
      x: 210, y: 260,
      vx: (Math.random()-0.5)*12,
      vy: (Math.random()-0.5)*12,
      size: 2+Math.random()*5,
      color: ['#4f8ef7','#00d4ff','#a78bfa','#34d399','#f472b6'][Math.floor(Math.random()*5)],
      life: 1,
    }))
    setExploding(true)
    setTimeout(() => setExploding(false), 1500)
    if (newCount >= 5) {
      setEasterEgg(true)
      setClickCount(0)
      setTimeout(() => setEasterEgg(false), 3000)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [isDragging, rotateY, rotateX])

  return (
    <div ref={containerRef} style={{ position:'relative', width:420, height:520, flexShrink:0 }}>
      <style>{`
        @keyframes badgeIn { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes photoFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes easterPop { 0%{opacity:0;transform:scale(0.5)} 20%{opacity:1;transform:scale(1.1)} 80%{opacity:1;transform:scale(1)} 100%{opacity:0;transform:scale(0.8)} }
        @keyframes hintPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes glitch {
          0%,90%,100%{clip-path:inset(0 0 100% 0);opacity:0}
          91%{clip-path:inset(10% 0 60% 0);transform:translate(-3px,0);opacity:0.7}
          93%{clip-path:inset(50% 0 20% 0);transform:translate(3px,0);opacity:0.7}
          95%{opacity:0}
        }
      `}</style>

      <canvas ref={canvasRef} style={{
        position:'absolute', top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
        pointerEvents:'none', zIndex:1, width:420, height:520,
      }}/>

      <div
        ref={photoRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
        onClick={handleClick}
        style={{
          position:'absolute', top:'50%', left:'50%',
          transform:`translate(-50%,-53%) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          width:230, height:290, zIndex:2,
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: isDragging ? 'none' : 'transform 0.1s ease',
          transformStyle:'preserve-3d',
          perspective:800,
          animation: isDragging ? 'none' : 'photoFloat 4s ease-in-out infinite',
          userSelect:'none',
        }}
      >
        <div style={{
          position:'absolute', inset:-30,
          background:'radial-gradient(ellipse, rgba(79,142,247,0.2) 0%, transparent 70%)',
        }}/>

        <div style={{
          width:'100%', height:'100%', position:'relative',
          clipPath:'polygon(15% 0%, 85% 0%, 100% 10%, 100% 90%, 85% 100%, 15% 100%, 0% 90%, 0% 10%)',
          overflow:'hidden',
          filter:`drop-shadow(0 0 20px rgba(79,142,247,0.5)) ${exploding?'brightness(2)':'brightness(1)'}`,
          transition:'filter 0.1s',
        }}>
          <img src="/daifa.png" alt="Da'ifa Maulana" style={{
            width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top',
            filter:'contrast(1.05) saturate(1.1)', pointerEvents:'none',
          }}/>
          <div style={{
            position:'absolute', inset:0,
            backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,212,255,0.025) 3px,rgba(0,212,255,0.025) 4px)',
          }}/>
          <div style={{
            position:'absolute', inset:0,
            background:'linear-gradient(180deg,transparent 60%,rgba(5,5,8,0.5) 100%)',
          }}/>
          <img src="/daifa.png" style={{
            position:'absolute', inset:0, width:'100%', height:'100%',
            objectFit:'cover', objectPosition:'center top',
            opacity:0.5, mixBlendMode:'screen',
            filter:'hue-rotate(180deg)',
            animation:'glitch 5s infinite', pointerEvents:'none',
          }}/>
        </div>

        <div style={{
          position:'absolute', inset:-2,
          clipPath:'polygon(15% 0%, 85% 0%, 100% 10%, 100% 90%, 85% 100%, 15% 100%, 0% 90%, 0% 10%)',
          border:'2px solid rgba(0,212,255,0.5)',
          boxSizing:'border-box', pointerEvents:'none',
          boxShadow:'0 0 20px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,212,255,0.05)',
        }}/>

        {clickCount > 0 && clickCount < 5 && (
          <div style={{
            position:'absolute', bottom:10, left:'50%', transform:'translateX(-50%)',
            fontFamily:'var(--mono)', fontSize:9, color:'var(--cyan)',
            background:'rgba(0,212,255,0.1)', border:'1px solid rgba(0,212,255,0.3)',
            borderRadius:100, padding:'3px 10px', zIndex:10, whiteSpace:'nowrap',
          }}>{5-clickCount} more clicks... ✨</div>
        )}
      </div>

      {hint && (
        <div style={{
          position:'absolute', bottom:15, left:'50%', transform:'translateX(-50%)',
          fontFamily:'var(--mono)', fontSize:10, color:'var(--muted)',
          whiteSpace:'nowrap', zIndex:5,
          animation:'hintPulse 2s ease infinite',
        }}>⟵ drag to rotate · click for effect ⟶</div>
      )}

      {easterEgg && (
        <div style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%,-50%)',
          zIndex:10, textAlign:'center',
          animation:'easterPop 3s ease forwards',
          pointerEvents:'none',
        }}>
          <div style={{
            background:'rgba(5,5,8,0.9)', border:'1px solid var(--cyan)',
            borderRadius:16, padding:'20px 32px',
            boxShadow:'0 0 40px rgba(0,212,255,0.4)',
          }}>
            <div style={{fontSize:32, marginBottom:8}}>🎉</div>
            <div style={{fontFamily:'var(--mono)', fontSize:12, color:'var(--cyan)', marginBottom:4}}>SECRET UNLOCKED</div>
            <div style={{fontFamily:'var(--mono)', fontSize:11, color:'var(--muted)'}}>Da'ifa is awesome! 🚀</div>
          </div>
        </div>
      )}

      <div style={{
        position:'absolute', top:40, right:-10, zIndex:3,
        background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.5)',
        borderRadius:8, padding:'8px 14px',
        fontFamily:'var(--mono)', fontSize:11, color:'var(--green)',
        backdropFilter:'blur(12px)',
        animation:'badgeIn 1s ease 0.8s both, photoFloat 3.5s ease-in-out 0.5s infinite',
        boxShadow:'0 0 20px rgba(16,185,129,0.2)',
      }}>
        <div style={{fontSize:9,opacity:0.6,marginBottom:2}}>GPA_SCORE</div>
        ⭐ 3.78 / 4.00
      </div>

      <div style={{
        position:'absolute', bottom:60, left:-20, zIndex:3,
        background:'rgba(79,142,247,0.1)', border:'1px solid rgba(79,142,247,0.5)',
        borderRadius:8, padding:'8px 14px',
        fontFamily:'var(--mono)', fontSize:11, color:'var(--blue)',
        backdropFilter:'blur(12px)',
        animation:'badgeIn 1s ease 1.1s both, photoFloat 3.5s ease-in-out 1s infinite',
        boxShadow:'0 0 20px rgba(79,142,247,0.2)',
      }}>
        <div style={{fontSize:9,opacity:0.6,marginBottom:2}}>STATUS</div>
        🎓 SMT_03 · ACTIVE
      </div>

      <div style={{
        position:'absolute', top:'45%', right:-30, zIndex:3,
        background:'rgba(167,139,250,0.1)', border:'1px solid rgba(167,139,250,0.5)',
        borderRadius:8, padding:'8px 14px',
        fontFamily:'var(--mono)', fontSize:10, color:'var(--purple)',
        backdropFilter:'blur(12px)',
        animation:'badgeIn 1s ease 1.3s both, photoFloat 3.5s ease-in-out 1.5s infinite',
        boxShadow:'0 0 20px rgba(167,139,250,0.2)',
        whiteSpace:'nowrap',
      }}>
        <div style={{fontSize:9,opacity:0.6,marginBottom:2}}>LOCATION</div>
        📍 BANDUNG_ID
      </div>
    </div>
  )
}