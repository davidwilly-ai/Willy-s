'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ripple {
  id: number
  x: number
  y: number
}

const EW = 44
const EH = 44
const SPEED = 0.55
const RIPPLE_COLORS = ['#FF4D4D', '#FF8C42', '#FFD700', '#00FFC6', '#4D79FF']

export default function DvdBounce() {
  const elementRef = useRef<HTMLDivElement>(null)
  const velRef = useRef({ x: SPEED, y: SPEED * 0.7 })
  const posRef = useRef({ x: 220, y: 180 })
  const rafRef = useRef<number>(0)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const rippleIdRef = useRef(0)

  useEffect(() => {
    const animate = () => {
      const el = elementRef.current
      if (!el) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const p = posRef.current
      const v = velRef.current
      const maxX = window.innerWidth - EW
      const maxY = window.innerHeight - EH

      let nx = p.x + v.x
      let ny = p.y + v.y
      let hitX = false
      let hitY = false

      if (nx <= 0) {
        nx = 0
        v.x = Math.abs(v.x)
        hitX = true
      } else if (nx >= maxX) {
        nx = maxX
        v.x = -Math.abs(v.x)
        hitX = true
      }

      if (ny <= 0) {
        ny = 0
        v.y = Math.abs(v.y)
        hitY = true
      } else if (ny >= maxY) {
        ny = maxY
        v.y = -Math.abs(v.y)
        hitY = true
      }

      posRef.current = { x: nx, y: ny }
      el.style.transform = `translate(${nx}px, ${ny}px)`

      // Corner hit = both axes bounce simultaneously
      if (hitX && hitY) {
        const id = ++rippleIdRef.current
        const cx = nx + EW / 2
        const cy = ny + EH / 2
        setRipples((prev) => [...prev, { id, x: cx, y: cy }])
        setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 1400)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Bouncing element */}
      <div
        ref={elementRef}
        className="fixed top-0 left-0 z-[25] pointer-events-none will-change-transform"
        style={{ width: EW, height: EH }}
        aria-hidden="true"
      >
        <div
          className="w-full h-full flex items-center justify-center rounded-full border"
          style={{
            opacity: 0.12,
            borderColor: '#00FFC6',
            background: 'transparent',
          }}
        >
          <span
            className="text-[13px] font-black"
            style={{ fontFamily: 'Bebas Neue, Impact, sans-serif', color: '#00FFC6' }}
          >
            W
          </span>
        </div>
      </div>

      {/* Corner ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <div
            key={r.id}
            className="fixed z-[24] pointer-events-none"
            style={{ left: r.x, top: r.y, transform: 'translate(-50%, -50%)' }}
            aria-hidden="true"
          >
            {RIPPLE_COLORS.map((color, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0.75 }}
                animate={{ scale: 12 + i * 5, opacity: 0 }}
                transition={{ duration: 0.9, delay: i * 0.09, ease: 'easeOut' }}
                className="absolute rounded-full border-2"
                style={{
                  width: 20,
                  height: 20,
                  left: -10,
                  top: -10,
                  borderColor: color,
                  boxShadow: `0 0 6px ${color}`,
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </>
  )
}
