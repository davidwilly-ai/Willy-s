'use client'

import { motion } from 'framer-motion'

interface PremiumShakerProps {
  inView: boolean
  accentColor?: string
  proteinLabel?: string
}

export default function PremiumShaker({ inView, accentColor = '#FF4D4D', proteinLabel }: PremiumShakerProps) {
  const bodyPath = 'M32 52 C22 52 18 56 18 64 L18 204 C18 214 26 220 36 220 L104 220 C114 220 122 214 122 204 L122 64 C122 56 118 52 108 52 Z'
  const fillTop = 220 - (220 - 90) * 0.6

  const accentOpacity = (op: number) => `${accentColor}${Math.round(op * 255).toString(16).padStart(2, '0')}`

  return (
    <svg viewBox="0 0 140 280" className="w-full h-full drop-shadow-2xl" fill="none">
      <defs>
        <linearGradient id={`sp-bodyMatte-${accentColor.replace('#','')}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#060809" />
          <stop offset="12%"  stopColor="#0E1314" />
          <stop offset="30%"  stopColor="#181E20" />
          <stop offset="50%"  stopColor="#1C2224" />
          <stop offset="70%"  stopColor="#181E20" />
          <stop offset="88%"  stopColor="#0E1314" />
          <stop offset="100%" stopColor="#060809" />
        </linearGradient>
        <linearGradient id={`sp-capGrad-${accentColor.replace('#','')}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#0A0C0D" />
          <stop offset="40%"  stopColor="#1A1F21" />
          <stop offset="60%"  stopColor="#1E2426" />
          <stop offset="100%" stopColor="#0A0C0D" />
        </linearGradient>
        <linearGradient id={`sp-liquidFill-${accentColor.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={accentColor} stopOpacity="0.15" />
          <stop offset="40%"  stopColor="#0F2A2E"     stopOpacity="0.7" />
          <stop offset="100%" stopColor="#06141A"     stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`sp-highlight-${accentColor.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`sp-bottomRef-${accentColor.replace('#','')}`} cx="50%" cy="100%" r="50%">
          <stop offset="0%"   stopColor={accentColor} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>
        <clipPath id={`sp-fillClip-${accentColor.replace('#','')}`}>
          <path d={bodyPath} />
        </clipPath>
      </defs>

      {/* Nozzle */}
      <rect x="58" y="2" width="24" height="14" rx="4" fill="#0C0F10" stroke="#1C2224" strokeWidth="0.5" />
      <rect x="62" y="2" width="16" height="6"  rx="3" fill="#131618" />

      {/* Cap */}
      <rect x="38" y="14" width="64" height="24" rx="6" fill={`url(#sp-capGrad-${accentColor.replace('#','')})`} stroke="#1E2628" strokeWidth="0.8" />
      <rect x="44" y="19" width="52" height="3" rx="1.5" fill={accentColor} opacity="0.55" />
      <text x="70" y="34" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="Bebas Neue, sans-serif" letterSpacing="1.5">W</text>

      {/* Shoulder */}
      <path d="M38 38 L32 52 L108 52 L102 38 Z" fill="#111618" stroke="#1A1E20" strokeWidth="0.8" />

      {/* Body */}
      <path d={bodyPath} fill={`url(#sp-bodyMatte-${accentColor.replace('#','')})`} stroke="#1A1E20" strokeWidth="1" />

      {/* Fill */}
      <g clipPath={`url(#sp-fillClip-${accentColor.replace('#','')})`}>
        <motion.rect
          x="18" width="104"
          animate={inView ? { y: fillTop, height: 220 - fillTop } : { y: 220, height: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          fill={`url(#sp-liquidFill-${accentColor.replace('#','')})`}
        />
        {inView && (
          <motion.rect
            x="19"
            animate={{ y: [fillTop - 1, fillTop + 1, fillTop - 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            width="102" height="2"
            fill={accentColor}
            opacity="0.12"
          />
        )}
      </g>

      {/* Edge highlight */}
      <path d="M22 60 L22 200 Q22 212 28 216 L24 216 Q19 212 19 200 L19 60 Z" fill={`url(#sp-highlight-${accentColor.replace('#','')})`} />

      {/* Bottom glow */}
      <path d={bodyPath} fill={`url(#sp-bottomRef-${accentColor.replace('#','')})`} />

      {/* Measurement lines */}
      {[
        { y: 100, label: '500ml' }, { y: 132, label: '350ml' },
        { y: 164, label: '200ml' }, { y: 196, label: '100ml' },
      ].map(({ y, label }) => (
        <g key={label}>
          <line x1="19" y1={y} x2="29" y2={y} stroke={accentColor} strokeWidth="0.6" opacity="0.25" />
          <text x="31" y={y + 3.5} fill={accentColor} fontSize="5.5" opacity="0.2" fontFamily="JetBrains Mono, monospace">{label}</text>
        </g>
      ))}

      <text x="70" y="155" textAnchor="middle" fill="rgba(255,255,255,0.06)" fontSize="16" fontFamily="Bebas Neue, sans-serif" letterSpacing="4">WILLY&apos;S</text>
      {proteinLabel && (
        <text x="70" y="130" textAnchor="middle" fill={accentColor} fontSize="24" fontFamily="Bebas Neue, sans-serif" fontWeight="900" opacity="0.85">{proteinLabel}</text>
      )}

      {/* Right edge shadow */}
      <path d="M119 60 L119 200 Q119 212 114 218 L116 218 Q121 212 121 200 L121 60 Z" fill="rgba(0,0,0,0.3)" />
    </svg>
  )
}
