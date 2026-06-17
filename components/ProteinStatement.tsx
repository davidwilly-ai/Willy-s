'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ProteinStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div
      ref={ref}
      className="relative overflow-hidden border-y border-brand-border/40"
      style={{ background: 'linear-gradient(90deg, #07090B 0%, #0D1519 50%, #07090B 100%)' }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,255,198,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Side glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-neon/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-black leading-tight tracking-[-0.02em]"
          style={{
            fontFamily: 'Bebas Neue, Impact, sans-serif',
            fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
          }}
        >
          <span className="text-white">1.6 – 2.2g PROTEIN PER KG BODYWEIGHT.</span>
          {' '}
          <span
            className="text-brand-neon"
            style={{ textShadow: '0 0 40px rgba(0,255,198,0.35)' }}
          >
            THAT&apos;S THE SCIENCE.
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent mx-auto max-w-lg"
        />
      </div>
    </div>
  )
}
