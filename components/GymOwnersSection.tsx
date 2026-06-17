'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useT } from '@/context/LanguageContext'

const benefits = [
  {
    icon: '💰',
    titleKey: 'gym_benefit_1_title' as const,
    bodyKey: 'gym_benefit_1_body' as const,
    accent: '#00FFC6',
  },
  {
    icon: '🏋️',
    titleKey: 'gym_benefit_2_title' as const,
    bodyKey: 'gym_benefit_2_body' as const,
    accent: '#FF4D4D',
  },
  {
    icon: '🥛',
    titleKey: 'gym_benefit_3_title' as const,
    bodyKey: 'gym_benefit_3_body' as const,
    accent: '#FFB84D',
  },
  {
    icon: '⚙️',
    titleKey: 'gym_benefit_4_title' as const,
    bodyKey: 'gym_benefit_4_body' as const,
    accent: '#A78BFA',
  },
]

import type { TKey } from '@/context/LanguageContext'

export default function GymOwnersSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useT()

  return (
    <section
      id="gym-owners"
      ref={ref}
      className="relative overflow-hidden py-24 px-6"
      style={{ background: 'linear-gradient(160deg, #0B0F10 0%, #0F1A1C 50%, #0B0F10 100%)' }}
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent" />

      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,255,198,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-6 h-px bg-brand-neon" />
          <span
            className="text-brand-neon text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {t('gym_label' as TKey)}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h2
            className="text-white font-black leading-tight"
            style={{
              fontFamily: 'Bebas Neue, Impact, sans-serif',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              letterSpacing: '-0.01em',
            }}
          >
            {t('gym_headline' as TKey)}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 text-base mb-14 max-w-xl leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {t('gym_sub' as TKey)}
        </motion.p>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={b.titleKey}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 relative"
              style={{
                background: '#111518',
                border: '1px solid #1E2628',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              }}
            >
              {/* Accent line top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(to right, ${b.accent}60, transparent)` }}
              />
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{b.icon}</span>
                <div>
                  <h3
                    className="text-white font-semibold text-base mb-1.5"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t(b.titleKey as TKey)}
                  </h3>
                  <p
                    className="text-white/45 text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}
                  >
                    {t(b.bodyKey as TKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <a
            href={`mailto:david.willy@icloud.com?subject=Gym%20Partnership%20Inquiry`}
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 bg-brand-neon text-black font-bold tracking-[0.15em] uppercase text-sm clip-corner focus-visible:outline-none focus-visible:shadow-neon-green"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {t('gym_cta' as TKey)}
            <span className="text-base">→</span>
          </a>
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {t('gym_cta_sub' as TKey)}
          </p>
        </motion.div>

      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  )
}
