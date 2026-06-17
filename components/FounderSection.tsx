'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useT } from '@/context/LanguageContext'

export default function FounderSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useT()

  return (
    <section
      id="founder"
      ref={ref}
      className="relative py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0E0F0C 0%, #111210 50%, #0B0F10 100%)',
      }}
    >
      {/* Background warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-red/4 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 items-center">

          {/* Left: large decorative number + label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-20 pb-16 lg:pb-0 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-brand-red" />
              <span
                className="text-brand-red text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t('found_label')}
              </span>
            </div>

            {/* Giant decorative "DW" monogram */}
            <div className="relative mb-8">
              <div
                className="text-[10rem] md:text-[16rem] font-black leading-none select-none text-white/4"
                style={{
                  fontFamily: 'Bebas Neue, Impact, sans-serif',
                  letterSpacing: '-0.05em',
                }}
              >
                DW
              </div>
              {/* Accent cross-hair corner decoration */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-brand-red/40" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-brand-red/40" />
            </div>

            {/* Role badge */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2 border border-brand-red/20 self-start"
              style={{
                background: 'rgba(255,77,77,0.05)',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-brand-red" style={{ boxShadow: '0 0 8px #FF4D4D' }} />
              <span
                className="text-[11px] tracking-[0.25em] uppercase text-brand-red/80"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t('found_role')}
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-brand-border mx-16 h-80" />

          {/* Right: bio content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-20"
          >
            {/* Name */}
            <h2
              className="text-[3.5rem] md:text-[5rem] font-black leading-none text-white mb-3 tracking-[-0.02em]"
              style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
            >
              DAVID
              <br />
              <span className="text-brand-red" style={{ textShadow: '0 0 30px rgba(255,77,77,0.3)' }}>
                WILLY.
              </span>
            </h2>

            {/* Age */}
            <p
              className="text-white/35 text-sm tracking-[0.1em] mb-8"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t('found_age')}
            </p>

            {/* Bio */}
            <p
              className="text-white/60 leading-relaxed mb-10 max-w-md"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8, fontSize: '1rem' }}
            >
              {t('found_bio')}
            </p>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/david-willy111/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-brand-border hover:border-brand-red hover:text-brand-red transition-colors duration-200 focus-visible:outline-none focus-visible:border-brand-red focus-visible:text-brand-red group"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {/* LinkedIn icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/40 group-hover:text-brand-red transition-colors duration-200">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-xs tracking-[0.2em] uppercase text-white/50 group-hover:text-brand-red transition-colors duration-200">
                {t('found_linkedin')}
              </span>
              <span className="text-white/25 group-hover:text-brand-red transition-colors duration-200 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  )
}
