'use client'

import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [visible])

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s ease',
        willChange: 'transform',
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal arms */}
        <line x1="0" y1="12" x2="8" y2="12" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
        <line x1="16" y1="12" x2="24" y2="12" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
        {/* Vertical arms */}
        <line x1="12" y1="0" x2="12" y2="8" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
        <line x1="12" y1="16" x2="12" y2="24" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
        {/* Center dot */}
        <circle cx="12" cy="12" r="1.5" fill="#00FFC6" />
      </svg>
    </div>
  )
}
