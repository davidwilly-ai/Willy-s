'use client'

import { motion } from 'framer-motion'
import { useNeon } from '@/context/NeonContext'
import { useT } from '@/context/LanguageContext'

export default function LightSwitch() {
  const { neonOn, toggle } = useNeon()
  const { t } = useT()

  return (
    <div className="fixed bottom-8 right-8 z-40 select-none" style={{ perspective: '500px' }}>
      {/* Outer housing — cast gunmetal panel */}
      <div
        className="relative flex flex-col items-center rounded-[8px]"
        style={{
          width: '72px',
          paddingTop: '12px',
          paddingBottom: '10px',
          gap: '8px',
          background: [
            'linear-gradient(160deg,',
            '#3e4145 0%,',
            '#2c2f33 25%,',
            '#1f2124 55%,',
            '#17191c 100%)',
          ].join(' '),
          boxShadow: [
            '0 8px 24px rgba(0,0,0,0.85)',
            '0 2px 6px rgba(0,0,0,0.5)',
            'inset 0 1px 0 rgba(255,255,255,0.12)',
            'inset 0 -2px 0 rgba(0,0,0,0.7)',
            'inset 1px 0 0 rgba(255,255,255,0.06)',
            'inset -1px 0 0 rgba(0,0,0,0.5)',
          ].join(', '),
          border: '1px solid rgba(0,0,0,0.6)',
          outline: '1px solid rgba(255,255,255,0.07)',
          outlineOffset: '1px',
        }}
      >
        {/* Embossed top edge highlight */}
        <div
          className="absolute top-0 left-2 right-2 h-px rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.14)' }}
        />

        {/* NEON label — stencil */}
        <div
          className="text-[7px] tracking-[0.4em] uppercase font-bold pointer-events-none"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: 'rgba(190,195,200,0.35)',
          }}
        >
          NEON
        </div>

        {/* LED indicator with bezel */}
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: '14px',
            height: '14px',
            background: 'linear-gradient(145deg, #1a1c1f 0%, #111315 100%)',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.05)',
            border: '1px solid rgba(0,0,0,0.7)',
          }}
        >
          <motion.div
            animate={{
              backgroundColor: neonOn ? '#00FFC6' : '#FF4D4D',
              boxShadow: neonOn
                ? '0 0 5px 2px rgba(0,255,198,0.9), 0 0 14px rgba(0,255,198,0.5)'
                : '0 0 4px 2px rgba(255,77,77,0.8), 0 0 10px rgba(255,77,77,0.4)',
            }}
            transition={{ duration: 0.25 }}
            className="rounded-full"
            style={{ width: '6px', height: '6px' }}
          />
        </div>

        {/* Lever switch area */}
        <button
          onClick={toggle}
          aria-label={neonOn ? t('neon_on') : t('neon_off_label')}
          className="relative flex items-end justify-center focus-visible:outline-none"
          style={{ width: '48px', height: '56px' }}
        >
          {/* Back-plate recess — the panel cutout the lever sits in */}
          <div
            className="absolute inset-x-2 inset-y-0 rounded-[4px]"
            style={{
              background: 'linear-gradient(180deg, #0d0e10 0%, #111315 100%)',
              boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.9), inset 0 -1px 2px rgba(255,255,255,0.04)',
              border: '1px solid rgba(0,0,0,0.8)',
            }}
          />

          {/* Pivot collar / mounting bushing */}
          <div
            className="absolute bottom-[6px] left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: '16px',
              height: '16px',
              background: 'linear-gradient(135deg, #4a4e54 0%, #32363b 45%, #26292d 100%)',
              boxShadow: [
                'inset 0 2px 3px rgba(0,0,0,0.8)',
                'inset 0 -1px 1px rgba(255,255,255,0.08)',
                '0 1px 3px rgba(0,0,0,0.6)',
              ].join(', '),
              border: '1px solid rgba(0,0,0,0.6)',
              zIndex: 3,
            }}
          />
          {/* Inner collar ring */}
          <div
            className="absolute bottom-[9px] left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: '10px',
              height: '10px',
              background: 'linear-gradient(135deg, #2a2d31 0%, #1c1e22 100%)',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.9)',
              border: '1px solid rgba(0,0,0,0.7)',
              zIndex: 4,
            }}
          />

          {/* Lever arm — bat toggle */}
          <motion.div
            animate={{ rotate: neonOn ? -42 : 42 }}
            transition={{ type: 'spring', stiffness: 520, damping: 20, mass: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '50%',
              marginLeft: '-5px',
              width: '10px',
              height: '42px',
              transformOrigin: 'bottom center',
              zIndex: 5,
            }}
          >
            {/* Lever shaft — cylindrical metallic bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: '12px',
                borderRadius: '4px 4px 2px 2px',
                background: [
                  'linear-gradient(90deg,',
                  'rgba(255,255,255,0.22) 0%,',
                  '#606469 6%,',
                  '#44474c 22%,',
                  '#333638 45%,',
                  '#44474c 68%,',
                  '#606469 94%,',
                  'rgba(255,255,255,0.14) 100%)',
                ].join(' '),
                boxShadow: [
                  '1px 0 3px rgba(0,0,0,0.6)',
                  '-1px 0 3px rgba(0,0,0,0.4)',
                  '0 2px 6px rgba(0,0,0,0.7)',
                  'inset 0 1px 0 rgba(255,255,255,0.18)',
                ].join(', '),
              }}
            />
            {/* Ball cap */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: [
                  'radial-gradient(circle at 35% 30%,',
                  'rgba(255,255,255,0.28) 0%,',
                  '#5a5e65 25%,',
                  '#3e4248 55%,',
                  '#2a2d32 80%,',
                  '#1e2024 100%)',
                ].join(' '),
                boxShadow: [
                  '0 3px 8px rgba(0,0,0,0.8)',
                  '0 1px 3px rgba(0,0,0,0.5)',
                  'inset 0 1px 0 rgba(255,255,255,0.22)',
                ].join(', '),
                border: '1px solid rgba(0,0,0,0.5)',
              }}
            />
          </motion.div>
        </button>

        {/* State label */}
        <motion.div
          animate={{ color: neonOn ? '#00FFC6' : 'rgba(255,90,90,0.55)' }}
          transition={{ duration: 0.25 }}
          className="text-[7px] tracking-[0.35em] font-bold uppercase pointer-events-none"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {neonOn ? 'ON' : 'OFF'}
        </motion.div>

        {/* Bottom edge shadow line */}
        <div
          className="absolute bottom-0 left-2 right-2 h-px rounded-full pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.8)' }}
        />
      </div>
    </div>
  )
}
