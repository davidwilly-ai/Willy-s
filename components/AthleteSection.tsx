'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const panels = [
  {
    src: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fit woman athletic pose gym',
    heading: 'TRAIN HARD.',
    sub: 'Recover well.',
    accent: '#FF4D4D',
    filter: 'contrast(1.1) saturate(0.85)',
  },
  {
    src: 'https://images.pexels.com/photos/3621869/pexels-photo-3621869.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Muscular man training heavy weights',
    heading: 'HIGH PROTEIN.',
    sub: 'Transparent ingredients.',
    accent: '#00FFC6',
    filter: 'contrast(1.2) saturate(0.7)',
  },
  {
    src: 'https://images.pexels.com/photos/4498603/pexels-photo-4498603.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Strong woman fitness confident pose',
    heading: 'FRESHLY MIXED.',
    sub: 'Right in your gym.',
    accent: '#FFB84D',
    filter: 'contrast(1.1) saturate(0.9)',
  },
  {
    src: 'https://images.pexels.com/photos/4164514/pexels-photo-4164514.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Male athlete gym training',
    heading: 'NO FILLER.',
    sub: 'What\'s in it is on the label.',
    accent: '#FF4D4D',
    filter: 'contrast(1.15) saturate(0.65)',
  },
]

export default function AthleteSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: '#060809' }}>
      {/* Full-bleed 4-panel image grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.heading}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative overflow-hidden"
            style={{ aspectRatio: '3/4' }}
          >
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 25vw"
              style={{ filter: panel.filter }}
            />
            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            {/* Color wash on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(to top, ${panel.accent}20 0%, transparent 60%)` }}
            />

            {/* Copy overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              className="absolute bottom-0 left-0 right-0 p-5 lg:p-6"
            >
              {/* Accent line */}
              <div
                className="w-8 h-0.5 mb-3"
                style={{ backgroundColor: panel.accent, boxShadow: `0 0 8px ${panel.accent}` }}
              />
              <p
                className="text-white/95 font-black leading-tight mb-1"
                style={{
                  fontFamily: 'Bebas Neue, Impact, sans-serif',
                  fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
                  textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                }}
              >
                {panel.heading}
              </p>
              <p
                className="text-sm font-bold"
                style={{
                  color: panel.accent,
                  fontFamily: 'JetBrains Mono, monospace',
                  textShadow: `0 0 12px ${panel.accent}60`,
                }}
              >
                {panel.sub}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom brand bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative border-t border-white/5 py-6 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/10 font-black tracking-[-0.02em] select-none"
            style={{
              fontFamily: 'Bebas Neue, Impact, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            WILLY&apos;S — FRESH. HIGH PROTEIN. TRANSPARENT.
          </p>
          <div className="flex gap-8">
            {['LOW-FAT QUARK', 'WHEY / ISOCLEAR', 'CREATINE'].map((word) => (
              <span
                key={word}
                className="text-[9px] tracking-[0.4em] text-white/12 uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
