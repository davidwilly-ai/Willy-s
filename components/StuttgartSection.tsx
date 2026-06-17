'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useT } from '@/context/LanguageContext'

export default function StuttgartSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useT()

  return (
    <section
      id="stuttgart"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0F10 0%, #0D1519 60%, #0B1215 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-petrol/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-3"
        >
          <div className="w-8 h-px bg-brand-petrol" />
          <span
            className="text-brand-petrol text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {t('stut_label')}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[4rem] md:text-[7rem] font-black leading-none text-white tracking-[-0.02em] mb-6"
          style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
        >
          STUTTGART.
        </motion.h2>
      </div>

      {/* Map + info layout */}
      <div className="relative">
        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden"
          style={{ height: 'clamp(360px, 55vh, 560px)' }}
        >
          <iframe
            title="Stuttgart — Königsplatz"
            width="100%"
            height="100%"
            src="https://www.openstreetmap.org/export/embed.html?bbox=9.166%2C48.7725%2C9.186%2C48.7825&layer=mapnik&marker=48.7775%2C9.1760"
            style={{
              border: 'none',
              filter: 'invert(92%) hue-rotate(180deg) saturate(0.5) brightness(0.85)',
              display: 'block',
            }}
          />
          {/* Top and bottom gradient fade */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0B0F10] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B1215] to-transparent pointer-events-none" />
          {/* Side fades */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0B0F10] to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0B1215] to-transparent pointer-events-none" />
          {/* Brand tint overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(13,21,25,0.25)' }}
          />
        </motion.div>

        {/* Info panel overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-2xl px-6"
        >
          <div
            className="p-6 border border-brand-border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(11,15,16,0.92) 0%, rgba(13,21,25,0.88) 100%)',
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {/* Coords */}
              <div>
                <div
                  className="text-[9px] tracking-[0.3em] text-brand-petrol uppercase mb-1"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  // Coordinates
                </div>
                <div
                  className="text-lg font-black text-white"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
                >
                  {t('stut_coords')}
                </div>
              </div>

              {/* Location */}
              <div>
                <div
                  className="text-[9px] tracking-[0.3em] text-brand-petrol uppercase mb-1"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  // Location
                </div>
                <div className="text-white/80 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t('stut_location')}
                </div>
                <div
                  className="text-white/35 text-[11px] mt-0.5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {t('stut_region')}
                </div>
              </div>

              {/* Body text */}
              <div>
                <p
                  className="text-white/40 text-xs leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
                >
                  {t('stut_body')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="h-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  )
}
