'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import PremiumShaker from '@/components/PremiumShaker'
import { SHAKES, ShakeDef } from '@/data/shakes'

function ShakeHero({ shake, index }: { shake: ShakeDef; index: number }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const nutrition = [
    { label: 'Calories', value: shake.macros.kcal,    unit: 'kcal', color: '#FF4D4D', pct: Math.round((shake.macros.kcal    / 900)  * 100) },
    { label: 'Protein',  value: shake.macros.protein, unit: 'g',    color: '#00FFC6', pct: 100 },
    { label: 'Carbs',    value: shake.macros.carbs,   unit: 'g',    color: '#FFB84D', pct: Math.round((shake.macros.carbs   / 100)  * 100) },
    { label: 'Fat',      value: shake.macros.fat,     unit: 'g',    color: '#A78BFA', pct: Math.round((shake.macros.fat     / 30)   * 100) },
  ]

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        background: index % 2 === 0
          ? 'linear-gradient(160deg, #080C0E 0%, #0D1C21 45%, #0B1215 100%)'
          : 'linear-gradient(160deg, #0B0F10 0%, #100E15 45%, #0B0F10 100%)',
      }}
    >
      {/* Stage lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${shake.accentColor}1A 0%, ${shake.accentColor}0A 28%, transparent 65%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 blur-3xl rounded-full pointer-events-none"
        style={{ backgroundColor: `${shake.accentColor}20` }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${shake.accentColor}20, transparent)` }} />
      {index > 0 && <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${shake.accentColor}15, transparent)` }} />}

      <div className="relative max-w-[1600px] mx-auto px-6 py-24">
        {/* Shake number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-8 h-px" style={{ backgroundColor: shake.accentColor }} />
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: shake.accentColor }}
          >
            {String(index + 1).padStart(2, '0')} / SIGNATURE STACK
          </span>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="font-black leading-none tracking-[-0.02em] text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, Impact, sans-serif', fontSize: 'clamp(4rem, 8vw, 9rem)' }}
            >
              {shake.name.map((part, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === shake.name.length - 1 && shake.name.length > 1 ? (
                    <span style={{ color: shake.accentColor, textShadow: `0 0 60px ${shake.accentColor}66` }}>
                      {part}
                    </span>
                  ) : part}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-lg tracking-[0.25em]"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: shake.accentColor }}
              >
                {shake.macros.protein}g PROTEIN
              </span>
              <span
                className="text-xs tracking-[0.1em] text-white/30"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {shake.flavor}
              </span>
            </div>

            <div className="space-y-0 mb-10">
              {shake.ingredients.map((ing, i) => (
                <motion.div
                  key={ing.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-xl w-8 text-center">{ing.icon}</span>
                  <span className="text-white/75 text-sm font-medium flex-1">{ing.label}</span>
                  <span className="text-white/25 text-xs tracking-[0.1em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {ing.note}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="inline-flex items-end gap-2 p-6"
              style={{
                background: `linear-gradient(135deg, ${shake.accentColor}1A 0%, rgba(15,18,20,0.95) 70%)`,
                border: `1px solid ${shake.accentColor}33`,
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              }}
            >
              <div>
                <div className="text-xs tracking-[0.3em] text-white/30 uppercase mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Daily Cost
                </div>
                <div className="flex items-end gap-1">
                  <span
                    className="text-6xl font-black text-white"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', textShadow: `0 0 30px ${shake.accentColor}40` }}
                  >
                    {shake.pricePerDay.toFixed(2)}
                  </span>
                  <span className="text-2xl mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', color: shake.accentColor }}>€</span>
                </div>
                <div className="text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', color: `${shake.accentColor}B3` }}>
                  Best value per serving
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CENTER: Shaker */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col items-center justify-center relative"
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-12 blur-2xl rounded-full"
              style={{ backgroundColor: `${shake.accentColor}33` }}
            />
            <div className="relative" style={{ height: 'clamp(460px, 78vh, 760px)', aspectRatio: '1 / 2' }}>
              <div
                className="absolute inset-0 blur-3xl rounded-full scale-75 translate-y-10"
                style={{ backgroundColor: `${shake.accentColor}14` }}
              />
              <PremiumShaker
                inView={inView}
                accentColor={shake.accentColor}
                proteinLabel={`${shake.macros.protein}g`}
              />
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute left-0 bottom-32"
            >
              <div
                className="px-3 py-1.5 text-[10px] font-black tracking-[0.15em] text-black"
                style={{ fontFamily: 'JetBrains Mono, monospace', backgroundColor: shake.accentColor }}
              >
                {shake.pricePerDay.toFixed(2)}€ / DAY
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Nutrition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="p-7"
              style={{
                background: 'linear-gradient(135deg, rgba(15,26,30,0.7) 0%, rgba(11,15,16,0.9) 100%)',
              }}
            >
              <div
                className="text-xs tracking-[0.35em] text-white/30 uppercase mb-7"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Nutrition Facts / per Serving
              </div>
              <div className="space-y-5">
                {nutrition.map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="space-y-1.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs tracking-[0.15em] text-white/40 uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {item.label}
                      </span>
                      <span className="text-base font-black" style={{ color: item.color, fontFamily: 'JetBrains Mono, monospace' }}>
                        {item.value}<span className="text-xs ml-0.5 opacity-60 font-normal">{item.unit}</span>
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#1E2628' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.pct}%` } : {}}
                        transition={{ duration: 1.4, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}60` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="my-6 border-t" style={{ borderColor: '#1E2628' }} />
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-[0.15em] text-white/30 uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Total Protein
                </span>
                <span
                  className="text-3xl font-black"
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    color: shake.accentColor,
                    textShadow: `0 0 16px ${shake.accentColor}80`,
                  }}
                >
                  {shake.macros.protein}g
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function SignaturePage() {
  return (
    <main className="relative">
      <Navbar />
      {/* Page header */}
      <div
        className="relative pt-40 pb-20 text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #080C0E 0%, #0B0F10 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,255,198,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-brand-neon" />
            <span className="text-brand-neon text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Willy&apos;s — Signature Collection
            </span>
            <div className="w-8 h-px bg-brand-neon" />
          </div>
          <h1
            className="font-black leading-none text-white tracking-[-0.02em]"
            style={{ fontFamily: 'Bebas Neue, Impact, sans-serif', fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}
          >
            THE STACK.
            <br />
            <span className="text-brand-neon" style={{ textShadow: '0 0 40px rgba(0,255,198,0.35)' }}>
              THREE WAYS.
            </span>
          </h1>
          <p className="mt-6 text-white/40 text-base max-w-lg mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every shake is built on the same foundation: 500g low-fat quark, premium protein, and creatine.
            Three flavour profiles. One performance standard.
          </p>
        </div>
      </div>

      {SHAKES.map((shake, i) => (
        <ShakeHero key={shake.id} shake={shake} index={i} />
      ))}

      {/* Back to home */}
      <div
        className="py-16 flex justify-center"
        style={{ background: '#0B0F10', borderTop: '1px solid #1E2628' }}
      >
        <a
          href="/"
          className="inline-flex items-center gap-3 px-8 py-3.5 border border-brand-border text-white/50 text-sm font-bold tracking-[0.2em] uppercase hover:border-brand-neon hover:text-brand-neon transition-colors duration-200"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          <span>←</span>
          <span>Back to Home</span>
        </a>
      </div>
    </main>
  )
}
