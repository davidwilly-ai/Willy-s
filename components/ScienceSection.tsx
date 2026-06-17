'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useT, translations } from '@/context/LanguageContext'
import { DOUBLE_WILLY } from '@/data/shakes'

const studies = [
  {
    source: 'ISSN',
    year: '2017',
    finding: '1.6–2.2g/kg body weight is the optimal daily protein range for muscle hypertrophy.',
    tag: 'Muscle Growth',
    accent: '#00FFC6',
  },
  {
    source: 'PubMed',
    year: '2021',
    finding: 'Creatine is the most evidence-backed ergogenic aid in sports nutrition.',
    tag: 'Performance',
    accent: '#FF4D4D',
  },
  {
    source: 'Harvard',
    year: '2020',
    finding: 'Whey protein and lean dairy (low-fat quark) rank among the highest protein quality scores (DIAAS).',
    tag: 'Metabolic Health',
    accent: '#FFB84D',
  },
]

const editorialImages = [
  {
    src: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Female athlete leggings gym training',
    study: 'ISSN 2017',
    caption: '1.6–2.2g protein /kg/day',
    accent: '#00FFC6',
    filter: 'saturate(0.9) brightness(0.85) contrast(1.1)',
  },
  {
    src: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Male athlete sweat muscles veins intense',
    study: 'PubMed 2021',
    caption: 'Creatine: #1 ergogenic aid',
    accent: '#FF4D4D',
    filter: 'saturate(0.8) brightness(0.9) contrast(1.05)',
  },
  {
    src: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Strong woman fitness confident gym pose',
    study: 'Harvard 2020',
    caption: 'DIAAS: highest quality score',
    accent: '#FFB84D',
    filter: 'saturate(1.0) brightness(0.85) contrast(1.08)',
  },
]

export default function ScienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t, lang } = useT()
  const statNotes = translations[lang].sci_stat_notes

  return (
    <section
      id="science"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1215 0%, #0D1A1E 60%, #0B1215 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/20 to-transparent" />

      {/* ── Editorial header ── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-px bg-brand-neon" />
          <span
            className="text-brand-neon text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {t('sci_label')}
          </span>
        </motion.div>

        {/* Two-column: heading + video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-start">
          {/* Left: giant heading + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="pb-10 lg:pb-0"
          >
            <h2
              className="text-[5rem] md:text-[8rem] lg:text-[9rem] font-black leading-none tracking-[-0.03em] text-white"
              style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
            >
              EVIDENCE.
              <br />
              <span
                className="text-brand-neon"
                style={{ textShadow: '0 0 40px rgba(0,255,198,0.3)' }}
              >
                {t('sci_not_hype')}
              </span>
            </h2>

            <p
              className="mt-8 text-white/50 max-w-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.75, fontSize: '1rem' }}
            >
              {t('sci_body')}
            </p>

            {/* Stat trio */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { value: '1.6–2.2g', label: 'protein/kg/day', note: statNotes[0] },
                { value: '5g', label: 'creatine daily', note: statNotes[1] },
                { value: `${DOUBLE_WILLY.macros.protein}g`, label: 'Double Willy', note: statNotes[2] },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border border-brand-neon/15 bg-brand-neon/4 p-4"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                >
                  <div
                    className="text-xl font-black text-brand-neon mb-0.5"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', textShadow: '0 0 15px rgba(0,255,198,0.4)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] text-white/50 mb-1">{s.label}</div>
                  <div
                    className="text-[9px] text-brand-neon/40 tracking-[0.1em] uppercase"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
            {/* Whey vs ISOclear infobox */}
            <div
              className="mt-8 p-5"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,198,0.04) 0%, rgba(255,184,77,0.04) 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                // Whey vs. ISOclear
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-base font-black text-brand-neon mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>WHEY</div>
                  <div className="space-y-1.5 text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div>24g protein / scoop</div>
                    <div>Fast absorption (~45 min)</div>
                    <div>Creamy texture, richer taste</div>
                    <div>Best for: post-workout</div>
                  </div>
                </div>
                <div>
                  <div className="text-base font-black text-[#FFB84D] mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>ISOCLEAR</div>
                  <div className="space-y-1.5 text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div>27g protein / scoop</div>
                    <div>90%+ purity, ultra-filtered</div>
                    <div>Light, clear texture</div>
                    <div>Best for: any time of day</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: video + editorial pull quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Video embed */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.65) brightness(0.8)' }}
              >
                <source
                  src="https://videos.pexels.com/video-files/4761421/4761421-hd_1280_720_25fps.mp4"
                  type="video/mp4"
                />
              </video>
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-brand-neon/4 pointer-events-none mix-blend-screen" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <span
                  className="px-2 py-1 text-[9px] tracking-[0.2em] uppercase bg-brand-neon/10 border border-brand-neon/20 text-brand-neon/80"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Willy&apos;s — Performance in Practice
                </span>
              </div>
            </div>

            {/* Editorial pull quote */}
            <div className="border-l-2 border-brand-neon/30 pl-5 py-1">
              <p
                className="text-white/40 text-sm leading-relaxed italic"
                style={{ fontFamily: 'Georgia, serif', lineHeight: 1.8 }}
              >
                {t('sci_editorial_intro')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Editorial image row ── */}
      <div className="relative max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {editorialImages.map((img, i) => (
            <motion.div
              key={img.study}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ filter: img.filter }}
              />
              {/* Color treatment layer */}
              <div
                className="absolute inset-0 mix-blend-screen opacity-20"
                style={{ backgroundColor: img.accent }}
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="text-[9px] tracking-[0.2em] uppercase mb-1.5"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: img.accent }}
                >
                  {img.study}
                </div>
                <p
                  className="text-white/80 text-sm font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Research references (editorial list) ── */}
      <div className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="border-t border-brand-border pt-12 mb-8">
          <span
            className="text-[10px] tracking-[0.3em] text-white/25 uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            // Research references
          </span>
        </div>
        <div className="space-y-0">
          {studies.map((study, i) => (
            <motion.div
              key={study.source + i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="group flex items-start gap-6 py-5 border-b border-brand-border/50"
            >
              <span
                className="text-[10px] tracking-[0.15em] px-2 py-1 flex-shrink-0 mt-0.5"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: study.accent,
                  border: `1px solid ${study.accent}30`,
                  background: `${study.accent}08`,
                }}
              >
                {study.source} {study.year}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="text-white/55 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}
                >
                  {study.finding}
                </p>
              </div>
              <button
                className="text-[10px] tracking-[0.2em] uppercase flex-shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus-visible:opacity-100 focus-visible:outline-none"
                style={{ color: study.accent, fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t('sci_read')} →
              </button>
            </motion.div>
          ))}
        </div>

        <p
          className="mt-12 text-center text-[10px] text-white/20"
          style={{ fontFamily: 'JetBrains Mono, monospace', lineHeight: 1.7 }}
        >
          {t('sci_disclaimer')}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-petrol/40 to-transparent" />
    </section>
  )
}
