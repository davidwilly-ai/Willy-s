'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useT } from '@/context/LanguageContext'
import PremiumShaker from '@/components/PremiumShaker'
import { DOUBLE_WILLY } from '@/data/shakes'

const shake = DOUBLE_WILLY

const nutrition = [
  { label: 'Calories', value: String(shake.macros.kcal),    unit: 'kcal', color: '#FF4D4D', pct: Math.round((shake.macros.kcal / 900) * 100) },
  { label: 'Protein',  value: String(shake.macros.protein), unit: 'g',    color: '#00FFC6', pct: 100 },
  { label: 'Carbs',    value: String(shake.macros.carbs),   unit: 'g',    color: '#FFB84D', pct: Math.round((shake.macros.carbs / 100) * 100) },
  { label: 'Fat',      value: String(shake.macros.fat),     unit: 'g',    color: '#A78BFA', pct: Math.round((shake.macros.fat / 30) * 100) },
]

export default function SignatureProduct() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t }  = useT()

  return (
    <section
      id="signature"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #080C0E 0%, #0D1C21 45%, #0B1215 100%)',
      }}
    >
      {/* Stage lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,77,77,0.22) 0%, rgba(255,77,77,0.10) 28%, rgba(15,42,46,0.14) 55%, transparent 72%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,77,77,0.18) 0%, transparent 70%)', filter: 'blur(28px)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-brand-red/25 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-petrol/30 to-transparent" />

      <div className="relative max-w-[1600px] mx-auto px-6 py-24 flex flex-col h-full">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-8 h-px bg-brand-red" />
          <span className="text-brand-red text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {t('sig_label')}
          </span>
        </motion.div>

        {/* Three-column hero layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">

          {/* LEFT: Product identity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="font-black leading-none tracking-[-0.02em] text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, Impact, sans-serif', fontSize: 'clamp(4rem, 8vw, 9rem)' }}
            >
              {shake.name[0]}
              {shake.name[1] && (
                <>
                  <br />
                  <span className="text-brand-red" style={{ textShadow: '0 0 60px rgba(255,77,77,0.4), 0 0 120px rgba(255,77,77,0.15)' }}>
                    {shake.name[1]}
                  </span>
                </>
              )}
            </div>

            {/* Protein */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-brand-neon text-lg tracking-[0.25em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {shake.macros.protein}g PROTEIN
              </span>
            </div>

            {/* Ingredients */}
            <div className="space-y-0">
              {shake.ingredients.map((ing, i) => (
                <motion.div
                  key={ing.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="flex items-center gap-3 py-3 border-b border-brand-border/40 last:border-0"
                >
                  <span className="text-xl w-8 text-center">{ing.icon}</span>
                  <span className="text-white/75 text-sm font-medium flex-1">{ing.label}</span>
                  <span className="text-white/25 text-xs tracking-[0.1em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {ing.note}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 inline-flex items-end gap-2 p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(255,77,77,0.1) 0%, rgba(15,18,20,0.95) 70%)',
                border: '1px solid rgba(255,77,77,0.2)',
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              }}
            >
              <div>
                <div className="text-xs tracking-[0.3em] text-white/30 uppercase mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {t('sig_daily_cost')}
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-6xl font-black text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', textShadow: '0 0 30px rgba(255,77,77,0.25)' }}>
                    {shake.pricePerDay.toFixed(2)}
                  </span>
                  <span className="text-2xl text-brand-red mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>€</span>
                </div>
                <div className="text-[9px] text-brand-neon/70 tracking-[0.2em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {t('sig_best_value')}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CENTER: Hero shaker */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col items-center justify-center relative"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-12 bg-brand-red/20 blur-2xl rounded-full" />
            <div
              className="relative"
              style={{ height: 'clamp(460px, 78vh, 760px)', aspectRatio: '1 / 2' }}
            >
              <div className="absolute inset-0 bg-brand-red/8 blur-3xl rounded-full scale-75 translate-y-10" />
              <PremiumShaker
                inView={inView}
                accentColor={shake.accentColor}
                proteinLabel={`${shake.macros.protein}g`}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute left-0 bottom-32"
            >
              <div className="px-3 py-1.5 bg-brand-red text-white text-[10px] font-black tracking-[0.15em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {shake.pricePerDay.toFixed(2)}€ / DAY
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Nutrition stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="p-7" style={{
              background: 'linear-gradient(135deg, rgba(15,26,30,0.7) 0%, rgba(11,15,16,0.9) 100%)',
            }}>
              <div className="text-xs tracking-[0.35em] text-white/30 uppercase mb-7" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {t('sig_nutrition_label')}
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
                    <div className="w-full h-1.5 bg-brand-border rounded-full overflow-hidden">
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
              <div className="my-6 border-t border-brand-border" />
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-[0.15em] text-white/30 uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {t('sig_total_protein')}
                </span>
                <span className="text-3xl font-black text-brand-neon" style={{ fontFamily: 'Bebas Neue, sans-serif', textShadow: '0 0 16px rgba(0,255,198,0.5)' }}>
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
