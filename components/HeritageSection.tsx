'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useT } from '@/context/LanguageContext'
import type { TKey } from '@/context/LanguageContext'

const pillars = [
  {
    num: '01',
    titleKey: 'her_pillar_1' as TKey,
    bodyKey: 'her_pillar_1_body' as TKey,
    accent: '#FF4D4D',
  },
  {
    num: '02',
    titleKey: 'her_pillar_2' as TKey,
    bodyKey: 'her_pillar_2_body' as TKey,
    accent: '#00FFC6',
  },
  {
    num: '03',
    titleKey: 'her_pillar_3' as TKey,
    bodyKey: 'her_pillar_3_body' as TKey,
    accent: '#FFB84D',
  },
]

const stmtKeys = ['her_stmt_1', 'her_stmt_2', 'her_stmt_3'] as TKey[]

export default function HeritageSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useT()

  return (
    <section
      id="heritage"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: '#0B0F10' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/15 to-transparent" />

      {/* Split-screen layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Left panel: image with angled cut + text overlay */}
        <div
          className="relative lg:w-[48%] min-h-[55vh] lg:min-h-screen overflow-hidden flex-shrink-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0 100%)' }}
        >
          <Image
            src="/gym-1.png"
            alt="Training at Willy's gym"
            fill
            className="object-cover"
            style={{ filter: 'saturate(0.70) brightness(0.72) contrast(1.08)' }}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          {/* Red color wash */}
          <div
            className="absolute inset-0 mix-blend-screen"
            style={{ background: 'linear-gradient(180deg, rgba(255,77,77,0.08) 0%, rgba(255,77,77,0.15) 100%)' }}
          />
          {/* Dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />

          {/* Large overlaid heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 left-10 right-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brand-red" />
              <span
                className="text-brand-red text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t('her_label')}
              </span>
            </div>
            <h2
              className="text-[4rem] md:text-[6rem] font-black leading-none text-white text-glow-red"
              style={{ fontFamily: 'Bebas Neue, Impact, sans-serif', letterSpacing: '-0.02em' }}
            >
              BORN IN
              <br />
              THE GYM.
            </h2>
            <div className="mt-6 flex gap-3">
              <div className="w-12 h-0.5 bg-brand-red mt-2" />
              <p
                className="text-white/40 text-xs leading-relaxed max-w-xs"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t('her_origin')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right panel: story content */}
        <div className="flex-1 flex items-center py-24 lg:py-32 px-8 lg:px-20 lg:pl-28">
          <div className="max-w-lg">
            {/* Story paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-5 mb-12"
            >
              {([
                ['her_p1', 0.6],
                ['her_p2', 0.5],
                ['her_p3', 0.4],
              ] as [TKey, number][]).map(([key, opacity]) => (
                <p
                  key={key}
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.75,
                    fontSize: '1rem',
                    color: `rgba(255,255,255,${opacity})`,
                  }}
                >
                  {t(key)}
                </p>
              ))}
            </motion.div>

            {/* Philosophy statements */}
            <div className="space-y-4 mb-12">
              {stmtKeys.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-px h-10 bg-gradient-to-b from-brand-red to-transparent flex-shrink-0 mt-0.5" />
                  <p
                    className="text-white/45 italic text-sm"
                    style={{ fontFamily: 'Georgia, serif', lineHeight: 1.55 }}
                  >
                    {t(key)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Gym accent image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden mb-10"
              style={{ aspectRatio: '16/7' }}
            >
              <Image
                src="/gym-2.png"
                alt="Inside Willy's gym"
                fill
                className="object-cover"
                style={{ filter: 'saturate(0.65) brightness(0.68) contrast(1.08)' }}
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              {/* Red tint wash */}
              <div
                className="absolute inset-0 mix-blend-screen"
                style={{ background: 'linear-gradient(180deg, rgba(255,77,77,0.06) 0%, rgba(255,77,77,0.12) 100%)' }}
              />
              {/* Gradient fade bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F10]/80 via-transparent to-transparent" />
              {/* Thin red border top */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,77,77,0.3)' }} />
            </motion.div>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-5 border border-brand-border"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15,16,14,0.9) 0%, rgba(11,15,16,0.6) 100%)',
                  }}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: pillar.accent }}
                  />
                  <div className="flex items-start gap-4">
                    <div
                      className="text-2xl font-black flex-shrink-0 mt-0.5 opacity-25 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ fontFamily: 'Bebas Neue, sans-serif', color: pillar.accent }}
                    >
                      {pillar.num}
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-white mb-1.5"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.03em' }}
                      >
                        {t(pillar.titleKey)}
                      </h3>
                      <p
                        className="text-white/40 text-sm leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}
                      >
                        {t(pillar.bodyKey)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  )
}
