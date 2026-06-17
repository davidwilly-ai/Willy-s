'use client'

import { motion } from 'framer-motion'

const phrases = [
  { text: 'NEED MONEY FOR PROTEIN', color: 'red' },
  { text: '·', color: 'dim' },
  { text: 'NO PROTEIN. NO PROGRESS.', color: 'green' },
  { text: '·', color: 'dim' },
  { text: 'FUEL BUILT ON SCIENCE', color: 'red' },
  { text: '·', color: 'dim' },
  { text: 'BUILD YOUR STACK', color: 'green' },
  { text: '·', color: 'dim' },
  { text: 'NEED MONEY FOR PROTEIN', color: 'red' },
  { text: '·', color: 'dim' },
  { text: 'NO PROTEIN. NO PROGRESS.', color: 'green' },
  { text: '·', color: 'dim' },
  { text: 'FUEL BUILT ON SCIENCE', color: 'red' },
  { text: '·', color: 'dim' },
  { text: 'BUILD YOUR STACK', color: 'green' },
  { text: '·', color: 'dim' },
]

export default function NeonStrip() {
  return (
    <div className="relative overflow-hidden py-6 bg-[#060A0B]" style={{ borderTop: '1px solid rgba(255,77,77,0.08)', borderBottom: '1px solid rgba(255,77,77,0.08)' }}>
      {/* Ambient glow behind strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/3 to-transparent pointer-events-none" />

      {/* Scrolling content */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="marquee-track flex items-center gap-8 pr-8">
          {phrases.map((phrase, i) => (
            <span
              key={i}
              className={`text-sm font-black tracking-[0.25em] select-none ${
                phrase.color === 'red'
                  ? 'neon-sign-red'
                  : phrase.color === 'green'
                  ? 'neon-sign-green'
                  : 'text-white/10'
              }`}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {phrase.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
