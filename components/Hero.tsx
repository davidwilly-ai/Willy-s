'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

function MilkyWay() {
  return (
    <svg
      viewBox="0 0 1200 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mw-core" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ece4ff" stopOpacity="0.75" />
          <stop offset="15%" stopColor="#c8a8f0" stopOpacity="0.45" />
          <stop offset="35%" stopColor="#8a5fd4" stopOpacity="0.22" />
          <stop offset="65%" stopColor="#3a2a6e" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mw-warm" cx="42%" cy="54%" r="46%">
          <stop offset="0%" stopColor="#fff6e8" stopOpacity="0.38" />
          <stop offset="25%" stopColor="#e8b870" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#8a5020" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mw-blue" cx="60%" cy="43%" r="42%">
          <stop offset="0%" stopColor="#c0e0ff" stopOpacity="0.30" />
          <stop offset="35%" stopColor="#5090e0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mw-purple" cx="35%" cy="58%" r="35%">
          <stop offset="0%" stopColor="#d080ff" stopOpacity="0.20" />
          <stop offset="45%" stopColor="#7030a0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mw-haze" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8060c8" stopOpacity="0.14" />
          <stop offset="50%" stopColor="#402880" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <filter id="mw-blur-heavy">
          <feGaussianBlur stdDeviation="42" />
        </filter>
        <filter id="mw-blur-soft">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <filter id="mw-blur-mid">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <filter id="mw-blur-glow">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Vast outer haze */}
      <ellipse cx="600" cy="600" rx="580" ry="380" fill="url(#mw-haze)" filter="url(#mw-blur-heavy)" transform="rotate(-32 600 600)" />

      {/* Secondary wide haze layer */}
      <ellipse cx="600" cy="600" rx="520" ry="200" fill="url(#mw-core)" filter="url(#mw-blur-heavy)" transform="rotate(-32 600 600)" opacity="0.5" />

      {/* Main diagonal band */}
      <ellipse cx="600" cy="600" rx="500" ry="155" fill="url(#mw-core)" filter="url(#mw-blur-soft)" transform="rotate(-32 600 600)" />

      {/* Warm golden cluster — offset from centre */}
      <ellipse cx="560" cy="630" rx="240" ry="85" fill="url(#mw-warm)" filter="url(#mw-blur-soft)" transform="rotate(-32 560 630)" />

      {/* Blue nebula arm */}
      <ellipse cx="660" cy="555" rx="200" ry="65" fill="url(#mw-blue)" filter="url(#mw-blur-soft)" transform="rotate(-32 660 555)" />

      {/* Purple nebula arm — opposite side */}
      <ellipse cx="480" cy="670" rx="180" ry="55" fill="url(#mw-purple)" filter="url(#mw-blur-mid)" transform="rotate(-32 480 670)" />

      {/* Dense core spine */}
      <ellipse cx="600" cy="600" rx="130" ry="40" fill="#f4eeff" fillOpacity="0.22" filter="url(#mw-blur-mid)" transform="rotate(-32 600 600)" />
      <ellipse cx="600" cy="600" rx="55" ry="16" fill="#ffffff" fillOpacity="0.30" filter="url(#mw-blur-glow)" transform="rotate(-32 600 600)" />
      <ellipse cx="600" cy="600" rx="18" ry="5" fill="#ffffff" fillOpacity="0.45" filter="url(#mw-blur-glow)" transform="rotate(-32 600 600)" />

      {/* ── Star field — more stars, extended across full viewBox ── */}
      {/* Core band — dense */}
      <circle cx="360" cy="700" r="1.4" fill="white" fillOpacity="0.55" />
      <circle cx="388" cy="682" r="0.9" fill="white" fillOpacity="0.42" />
      <circle cx="412" cy="668" r="1.6" fill="white" fillOpacity="0.68" />
      <circle cx="436" cy="652" r="0.8" fill="white" fillOpacity="0.35" />
      <circle cx="458" cy="638" r="1.3" fill="white" fillOpacity="0.58" />
      <circle cx="480" cy="624" r="1.0" fill="white" fillOpacity="0.48" />
      <circle cx="505" cy="610" r="1.7" fill="white" fillOpacity="0.72" />
      <circle cx="528" cy="596" r="0.7" fill="white" fillOpacity="0.32" />
      <circle cx="552" cy="582" r="1.2" fill="white" fillOpacity="0.55" />
      <circle cx="576" cy="568" r="1.5" fill="white" fillOpacity="0.65" />
      <circle cx="600" cy="553" r="0.9" fill="white" fillOpacity="0.44" />
      <circle cx="625" cy="539" r="1.4" fill="white" fillOpacity="0.60" />
      <circle cx="648" cy="525" r="0.8" fill="white" fillOpacity="0.38" />
      <circle cx="672" cy="511" r="1.1" fill="white" fillOpacity="0.50" />
      <circle cx="696" cy="497" r="1.3" fill="white" fillOpacity="0.57" />
      <circle cx="720" cy="483" r="0.7" fill="white" fillOpacity="0.30" />
      <circle cx="745" cy="468" r="1.0" fill="white" fillOpacity="0.44" />
      <circle cx="770" cy="454" r="1.2" fill="white" fillOpacity="0.52" />
      {/* Off-band upper row */}
      <circle cx="340" cy="668" r="0.7" fill="white" fillOpacity="0.22" />
      <circle cx="375" cy="650" r="0.9" fill="white" fillOpacity="0.30" />
      <circle cx="415" cy="635" r="0.6" fill="white" fillOpacity="0.18" />
      <circle cx="455" cy="615" r="1.0" fill="white" fillOpacity="0.35" />
      <circle cx="500" cy="595" r="0.7" fill="white" fillOpacity="0.25" />
      <circle cx="545" cy="574" r="0.8" fill="white" fillOpacity="0.28" />
      <circle cx="590" cy="553" r="0.6" fill="white" fillOpacity="0.20" />
      <circle cx="636" cy="532" r="0.9" fill="white" fillOpacity="0.32" />
      <circle cx="682" cy="510" r="0.7" fill="white" fillOpacity="0.22" />
      <circle cx="728" cy="490" r="0.8" fill="white" fillOpacity="0.27" />
      <circle cx="772" cy="470" r="0.6" fill="white" fillOpacity="0.20" />
      {/* Off-band lower row */}
      <circle cx="355" cy="726" r="0.7" fill="white" fillOpacity="0.20" />
      <circle cx="395" cy="710" r="0.9" fill="white" fillOpacity="0.30" />
      <circle cx="438" cy="694" r="0.6" fill="white" fillOpacity="0.17" />
      <circle cx="480" cy="678" r="1.0" fill="white" fillOpacity="0.35" />
      <circle cx="524" cy="660" r="0.7" fill="white" fillOpacity="0.24" />
      <circle cx="570" cy="642" r="0.8" fill="white" fillOpacity="0.28" />
      <circle cx="616" cy="623" r="0.6" fill="white" fillOpacity="0.18" />
      <circle cx="660" cy="605" r="0.9" fill="white" fillOpacity="0.30" />
      <circle cx="706" cy="586" r="0.7" fill="white" fillOpacity="0.22" />
      <circle cx="750" cy="568" r="0.8" fill="white" fillOpacity="0.25" />
      {/* Far-left extension */}
      <circle cx="220" cy="770" r="1.0" fill="white" fillOpacity="0.28" />
      <circle cx="255" cy="752" r="0.7" fill="white" fillOpacity="0.22" />
      <circle cx="290" cy="736" r="1.2" fill="white" fillOpacity="0.35" />
      <circle cx="325" cy="718" r="0.6" fill="white" fillOpacity="0.18" />
      {/* Far-right extension */}
      <circle cx="808" cy="438" r="0.9" fill="white" fillOpacity="0.28" />
      <circle cx="845" cy="422" r="0.7" fill="white" fillOpacity="0.20" />
      <circle cx="880" cy="407" r="1.1" fill="white" fillOpacity="0.32" />
      <circle cx="916" cy="390" r="0.6" fill="white" fillOpacity="0.18" />
      {/* Scattered background stars */}
      <circle cx="180" cy="300" r="0.6" fill="white" fillOpacity="0.15" />
      <circle cx="280" cy="180" r="0.8" fill="white" fillOpacity="0.12" />
      <circle cx="900" cy="200" r="0.7" fill="white" fillOpacity="0.14" />
      <circle cx="980" cy="680" r="0.6" fill="white" fillOpacity="0.12" />
      <circle cx="120" cy="820" r="0.5" fill="white" fillOpacity="0.10" />
      <circle cx="1050" cy="420" r="0.6" fill="white" fillOpacity="0.12" />
      {/* Bright accent stars with glow */}
      <circle cx="505" cy="610" r="2.4" fill="white" fillOpacity="0.85" />
      <circle cx="505" cy="610" r="6.0" fill="white" fillOpacity="0.10" filter="url(#mw-blur-glow)" />
      <circle cx="576" cy="568" r="2.0" fill="#f0f4ff" fillOpacity="0.80" />
      <circle cx="576" cy="568" r="5.0" fill="#d0e8ff" fillOpacity="0.10" filter="url(#mw-blur-glow)" />
      <circle cx="648" cy="525" r="1.8" fill="#fff8e8" fillOpacity="0.78" />
      <circle cx="436" cy="652" r="1.8" fill="#f8eeff" fillOpacity="0.75" />
      <circle cx="720" cy="483" r="1.6" fill="white" fillOpacity="0.72" />
      <circle cx="370" cy="694" r="1.5" fill="#e8f8ff" fillOpacity="0.68" />
    </svg>
  )
}

// Same silhouette as ShakerVisual in ShakeConfigurator
function BackgroundShaker({
  color,
  size = 56,
  opacity = 0.22,
}: {
  color: string
  size?: number
  opacity?: number
}) {
  const height = Math.round(size * (220 / 120))
  return (
    <svg width={size} height={height} viewBox="0 0 120 220" fill="none" style={{ opacity }}>
      <rect x="38" y="6" width="44" height="26" rx="5" fill={color} opacity="0.4" />
      <rect x="44" y="13" width="32" height="4" rx="2" fill={color} opacity="0.7" />
      <rect x="50" y="2" width="20" height="10" rx="3" fill={color} opacity="0.25" />
      <path
        d="M22 38 Q18 42 18 48 L18 188 Q18 200 30 200 L90 200 Q102 200 102 188 L102 48 Q102 42 98 38 Z"
        fill={color}
        opacity="0.18"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.35"
      />
      <path d="M24 50 Q26 44 32 42 L36 42 Q30 54 28 74 Z" fill="white" opacity="0.09" />
      <line x1="19" y1="160" x2="28" y2="160" stroke={color} strokeWidth="0.6" opacity="0.3" />
      <line x1="19" y1="140" x2="28" y2="140" stroke={color} strokeWidth="0.6" opacity="0.3" />
      <line x1="19" y1="120" x2="28" y2="120" stroke={color} strokeWidth="0.6" opacity="0.3" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#000000', minHeight: '100vh' }}
    >
      {/* Milky Way — large, centered behind logo */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 'clamp(900px, 130vw, 1800px)',
          height: 'clamp(900px, 130vw, 1800px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <MilkyWay />
      </div>

      {/* Floating background shakers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
        <motion.div
          className="absolute hidden lg:block"
          style={{ left: '7%', top: '22%' }}
          animate={{ y: [0, -18, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BackgroundShaker color="#FF6B9D" size={64} opacity={0.28} />
        </motion.div>
        <motion.div
          className="absolute hidden lg:block"
          style={{ right: '8%', top: '30%' }}
          animate={{ y: [0, 14, 0], rotate: [3, -3, 3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        >
          <BackgroundShaker color="#00FFC6" size={52} opacity={0.22} />
        </motion.div>
        <motion.div
          className="absolute hidden lg:block"
          style={{ left: '14%', bottom: '18%' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
        >
          <BackgroundShaker color="#FF8C42" size={44} opacity={0.18} />
        </motion.div>
      </div>

      {/* Logo + Slogan — centered together as one block */}
      <div
        className="absolute left-0 right-0 flex flex-col items-center pointer-events-none"
        style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{
            width: 'clamp(220px, 32vw, 440px)',
            height: 'clamp(220px, 32vw, 440px)',
          }}
        >
          <Image
            src="/logo.png"
            alt="Willy's"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

      </div>

      {/* Bottom content — tagline, stats, CTAs */}
      <div
        className="absolute left-0 right-0 flex flex-col items-center text-center px-6 pb-10"
        style={{ bottom: '6vh', zIndex: 10 }}
      >
        {/* Product description */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mb-3 max-w-sm"
        >
          <p className="text-white/80 text-base font-medium leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
            Fresh high-protein shakes mixed inside your gym.
          </p>
          <p className="text-white/35 text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            Low-fat quark · Whey or Isoclear · Optional creatine
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-8 mb-7"
        >
          {[
            { label: 'Protein', value: '110g' },
            { label: 'Kcal', value: '695' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white/80" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.3em] text-white/30 uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#configurator"
            className="btn-primary relative group px-8 py-3.5 bg-brand-red text-white font-bold tracking-[0.18em] uppercase text-sm clip-corner focus-visible:outline-none focus-visible:shadow-neon-red"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span className="relative z-10">Build Your Shake</span>
            <div className="absolute inset-0 bg-brand-red blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          </a>
          <a
            href="/signature"
            className="px-8 py-3.5 border border-brand-border text-white/60 font-bold tracking-[0.18em] uppercase text-sm clip-corner hover:border-brand-neon hover:text-brand-neon transition-colors duration-200 focus-visible:outline-none focus-visible:border-brand-neon focus-visible:text-brand-neon"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Signature Shakes
          </a>
          <a
            href="#gym-owners"
            className="px-8 py-3.5 border border-white/10 text-white/35 font-bold tracking-[0.18em] uppercase text-sm clip-corner hover:border-white/25 hover:text-white/55 transition-colors duration-200 focus-visible:outline-none"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            For Gym Owners
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute flex flex-col items-center gap-2 opacity-40"
        style={{ bottom: '2vh', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-16 h-16 border-t-2 border-l-2 border-brand-red/30 pointer-events-none" style={{ zIndex: 10 }} />
      <div className="absolute top-20 right-8 w-16 h-16 border-t-2 border-r-2 border-brand-red/30 pointer-events-none" style={{ zIndex: 10 }} />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-brand-neon/20 pointer-events-none" style={{ zIndex: 10 }} />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-brand-neon/20 pointer-events-none" style={{ zIndex: 10 }} />
    </section>
  )
}
