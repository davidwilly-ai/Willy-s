'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '@/context/LanguageContext'
import { BASE_MACROS, SCOOP_PRICE, BASE_PRICE } from '@/data/shakes'

// --- Types & Data ---
type ProteinType = 'whey' | 'isoclear' | 'vegan'

interface AddOn {
  id: string
  label: string
  price: number
  protein: number
  note: string
}

interface LiquidOption {
  id: string
  label: string
  price: number
  protein: number
  carbs: number
  fat: number
  kcal: number
}

const ADD_ONS: AddOn[] = [
  { id: 'creatine', label: 'Creatine', price: 0.50, protein: 0, note: '+5g / day' },
  { id: 'vitamins', label: 'Vitamins', price: 0.80, protein: 0, note: 'Full complex' },
  { id: 'minerals', label: 'Minerals', price: 0.70, protein: 0, note: 'Electrolytes' },
]

const LIQUIDS: LiquidOption[] = [
  { id: 'none', label: 'No Liquid', price: 0, protein: 0, carbs: 0, fat: 0, kcal: 0 },
  { id: 'cow', label: 'Cow Milk', price: 0.30, protein: 7, carbs: 10, fat: 8, kcal: 140 },
  { id: 'soy', label: 'Soy Milk', price: 0.40, protein: 6, carbs: 4, fat: 4, kcal: 80 },
  { id: 'oat', label: 'Oat Milk', price: 0.35, protein: 3, carbs: 14, fat: 3, kcal: 80 },
  { id: 'almond', label: 'Almond Milk', price: 0.30, protein: 1, carbs: 3, fat: 1, kcal: 25 },
]

const PROTEIN_TYPES: Record<ProteinType, {
  label: string
  scoop: { protein: number; carbs: number; fat: number; kcal: number }
  priceModifier: number
  note: string
  color: string
}> = {
  whey: {
    label: 'Whey',
    scoop: { protein: 24, carbs: 3, fat: 1, kcal: 120 },
    priceModifier: 0,
    note: 'Fast absorb',
    color: '#00FFC6',
  },
  isoclear: {
    label: 'ISOclear',
    scoop: { protein: 27, carbs: 1, fat: 0, kcal: 110 },
    priceModifier: 0.30,
    note: 'Ultra pure',
    color: '#FFB84D',
  },
  vegan: {
    label: 'Vegan',
    scoop: { protein: 21, carbs: 5, fat: 2, kcal: 115 },
    priceModifier: 0.20,
    note: 'Pea protein',
    color: '#4ADE80',
  },
}

const FLAVORS: Record<ProteinType, string[]> = {
  whey: ['Vanilla', 'Chocolate', 'Salted Caramel'],
  isoclear: ['Peach', 'Blueberry', 'Lime', 'Coconut'],
  vegan: ['Vanilla', 'Chocolate'],
}

function getShakeName(proteinType: string, flavor: string, addOns: Record<string, boolean>): string {
  const base = `${proteinType === 'isoclear' ? 'ISOclear' : proteinType === 'vegan' ? 'Vegan' : 'Whey'} ${flavor}`
  const extras: string[] = []
  if (addOns.creatine) extras.push('Creatine')
  if (addOns.vitamins) extras.push('Vitamins')
  if (addOns.minerals) extras.push('Minerals')
  return extras.length > 0 ? `${base} + ${extras.join(', ')}` : base
}

// --- Shaker SVG Component ---
// Black paper cup visual matching Willy's brand (vision pictures)
function CupVisual({ fillLevel, color }: { fillLevel: number; color: string }) {
  // Cream swirl height scales with fill level (8px min → 38px max)
  const creamH = Math.max(8, (fillLevel / 100) * 38)
  // Lid sits at y=58; cream floats above it
  const creamBaseY = 58
  const creamTopY = creamBaseY - creamH
  const uid = color.replace('#', '')

  return (
    <svg viewBox="0 0 120 225" className="w-full h-full" fill="none">
      <defs>
        {/* Cup body gradient — dark left to darker right */}
        <linearGradient id={`cup-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#1a1a1a" />
          <stop offset="40%"  stopColor="#0d0d0d" />
          <stop offset="100%" stopColor="#080808" />
        </linearGradient>
        {/* Cream gradient */}
        <radialGradient id={`cream-${uid}`} cx="40%" cy="30%" r="60%">
          <stop offset="0%"   stopColor="white"  stopOpacity="0.95" />
          <stop offset="60%"  stopColor={color}  stopOpacity="0.85" />
          <stop offset="100%" stopColor={color}  stopOpacity="0.7"  />
        </radialGradient>
        {/* Lid gradient */}
        <linearGradient id={`lid-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#333" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
      </defs>

      {/* ── Straw ── */}
      <rect x="72" y="5" width="5" height="62" rx="2.5" fill="#0d0d0d" />
      <rect x="73" y="5" width="2" height="62" rx="1"   fill="#1e1e1e" />

      {/* ── Cream swirl on top (above lid) ── */}
      {fillLevel > 5 && (
        <motion.g
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main cream body */}
          <motion.ellipse
            cx="57" cy={creamBaseY - creamH * 0.5}
            animate={{ ry: creamH * 0.55, rx: 36 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            fill={`url(#cream-${uid})`}
          />
          {/* Left swirl bump */}
          <motion.ellipse
            cx="40" animate={{ cy: creamTopY + 2, rx: 15, ry: creamH * 0.35 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            fill={color} fillOpacity="0.88"
          />
          {/* Right peak */}
          <motion.ellipse
            cx="70" animate={{ cy: creamTopY + 3, rx: 11, ry: creamH * 0.28 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            fill={color} fillOpacity="0.75"
          />
          {/* Cream highlight */}
          <ellipse cx="44" cy={creamTopY + 4} rx="9" ry="3.5" fill="white" fillOpacity="0.30" />
        </motion.g>
      )}

      {/* ── Lid ── */}
      {/* Outer rim */}
      <ellipse cx="60" cy="60" rx="43" ry="9"  fill={`url(#lid-${uid})`} />
      {/* Top dome */}
      <ellipse cx="60" cy="57" rx="41" ry="7"  fill="#252525" />
      {/* Centre dome highlight */}
      <ellipse cx="60" cy="55" rx="28" ry="4"  fill="#2e2e2e" />
      {/* Rim highlight line */}
      <ellipse cx="60" cy="52" rx="35" ry="2.5" fill="white" fillOpacity="0.06" />
      {/* Straw hole */}
      <ellipse cx="74" cy="55" rx="4"  ry="3"   fill="#0d0d0d" />

      {/* ── Cup body ── */}
      {/* Trapezoid: wide at top (~86px), narrow at bottom (~68px) */}
      <path
        d="M17 62 L26 205 Q26 213 34 213 L86 213 Q94 213 94 205 L103 62 Z"
        fill={`url(#cup-${uid})`}
      />

      {/* Left specular highlight */}
      <path
        d="M18.5 67 L26.5 192"
        stroke="white" strokeWidth="2" strokeOpacity="0.09" strokeLinecap="round"
      />
      {/* Right shadow edge */}
      <path
        d="M101 67 L93.5 192"
        stroke="black" strokeWidth="5" strokeOpacity="0.35" strokeLinecap="round"
      />
      {/* Subtle texture bands */}
      <path d="M19 110 L26 110 Q60 108 94 110 L101 110" stroke="white" strokeWidth="0.4" strokeOpacity="0.04" />
      <path d="M20 150 L27 150 Q60 148 93 150 L100 150" stroke="white" strokeWidth="0.4" strokeOpacity="0.04" />

      {/* ── Willy's Logo ── */}
      {/* White background badge behind logo */}
      <rect x="22" y="90" width="76" height="70" rx="6" fill="white" fillOpacity="0.06" />
      <image
        href="/logo.png"
        x="18" y="86"
        width="84" height="78"
        preserveAspectRatio="xMidYMid meet"
        style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))' }}
      />

      {/* ── Ground shadow ── */}
      <ellipse cx="60" cy="217" rx="30" ry="5" fill="black" fillOpacity="0.3" />
    </svg>
  )
}

function QuarkTooltip({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative group/qt inline-flex items-center">
      {children}
      <span className="absolute bottom-full left-0 mb-2 w-56 p-2.5 text-xs leading-relaxed rounded bg-[#1C2224] text-white/60 opacity-0 group-hover/qt:opacity-100 pointer-events-none transition-opacity duration-200 z-50 shadow-lg"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
        Low-fat quark (Magerquark) is a high-protein German dairy product with ~15g protein per 100g and an excellent DIAAS amino acid score.
      </span>
    </span>
  )
}

function Toggle({ checked, onChange, color = '#FF4D4D' }: { checked: boolean; onChange: (v: boolean) => void; color?: string }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="relative w-12 h-6 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
      style={{ backgroundColor: checked ? color : '#1E2628', boxShadow: checked ? `0 0 8px ${color}50` : 'none' }}
      aria-pressed={checked}
    >
      <motion.div animate={{ x: checked ? 24 : 2 }} transition={{ type: 'spring', stiffness: 500, damping: 30 }} className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-md" />
    </button>
  )
}

export default function ShakeConfigurator() {
  const { t } = useT()

  const [addOns, setAddOns] = useState<Record<string, boolean>>({ creatine: false, vitamins: false, minerals: false })
  const [liquid, setLiquid] = useState<string>('cow')
  const [thickness, setThickness] = useState<'thin' | 'thick'>('thick')
  const [extraScoops, setExtraScoops] = useState(0)
  const [proteinType, setProteinType] = useState<ProteinType>('whey')
  const [selectedFlavor, setSelectedFlavor] = useState<string>('Vanilla')

  const handleProteinTypeChange = useCallback((type: ProteinType) => {
    setProteinType(type)
    setSelectedFlavor(FLAVORS[type][0])
  }, [])

  const toggleAddOn = useCallback((id: string) => {
    setAddOns((prev) => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const scoopMacros = PROTEIN_TYPES[proteinType].scoop

  const macros = useMemo(() => {
    const liq = LIQUIDS.find((l) => l.id === liquid) || LIQUIDS[0]
    return {
      protein: BASE_MACROS.protein + liq.protein + scoopMacros.protein * extraScoops,
      carbs: BASE_MACROS.carbs + liq.carbs + scoopMacros.carbs * extraScoops + (thickness === 'thick' ? 5 : 0),
      fat: BASE_MACROS.fat + liq.fat + scoopMacros.fat * extraScoops,
      kcal: BASE_MACROS.kcal + liq.kcal + scoopMacros.kcal * extraScoops + (thickness === 'thick' ? 20 : 0),
    }
  }, [liquid, extraScoops, thickness, scoopMacros])

  const price = useMemo(() => {
    const liq = LIQUIDS.find((l) => l.id === liquid) || LIQUIDS[0]
    const addOnCost = ADD_ONS.filter((a) => addOns[a.id]).reduce((acc, a) => acc + a.price, 0)
    return BASE_PRICE + liq.price + addOnCost + extraScoops * (SCOOP_PRICE + PROTEIN_TYPES[proteinType].priceModifier)
  }, [liquid, addOns, extraScoops, proteinType])

  const fillLevel = useMemo(() => {
    let base = 40
    if (liquid !== 'none') base += 25
    if (thickness === 'thick') base += 10
    base += extraScoops * 8
    return Math.min(base, 95)
  }, [liquid, thickness, extraScoops])

  const shakerColor = PROTEIN_TYPES[proteinType].color
  const shakeName = getShakeName(proteinType, selectedFlavor, addOns)
  const isVegan = proteinType === 'vegan'

  return (
    <section
      id="configurator"
      className="relative py-10 overflow-hidden"
      style={{ background: '#0B0F10' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-neon/3 blur-[120px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,255,198,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/25 to-transparent" />

      <div className="relative w-full px-4 md:px-8 xl:px-12">
        {/* Header */}
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-5 h-px bg-brand-neon" />
            <span className="text-brand-neon text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_label')}</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-black leading-none text-white tracking-[-0.02em]" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            SHAKE <span className="text-brand-neon" style={{ textShadow: '0 0 16px rgba(0,255,198,0.4)' }}>CONFIGURATOR</span>
          </h2>
          <p className="text-white/30 text-xs tracking-[0.1em] hidden md:block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_tagline')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* ── Column 1: Options ── */}
          <div className="grid grid-cols-2 gap-3 content-start">
            {/* Protein Type — spans both cols */}
            <div className="col-span-2 p-4 bg-brand-surface">
              <div className="text-xs tracking-[0.3em] text-white/35 uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_protein_type')}</div>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(PROTEIN_TYPES) as ProteinType[]).map((type) => {
                  const pt = PROTEIN_TYPES[type]
                  const isActive = proteinType === type
                  return (
                    <button key={type} onClick={() => handleProteinTypeChange(type)}
                      className="py-3 text-sm font-medium border transition-all duration-200 focus-visible:outline-none flex flex-col items-center gap-1"
                      style={{ fontFamily: 'JetBrains Mono, monospace', borderColor: isActive ? pt.color : 'rgba(255,255,255,0.08)', backgroundColor: isActive ? `${pt.color}12` : 'transparent', color: isActive ? pt.color : 'rgba(255,255,255,0.40)' }}>
                      {type === 'vegan' && <span className="text-sm">🌱</span>}
                      <span className="tracking-[0.05em] uppercase font-bold">{pt.label}</span>
                      <span className="text-xs opacity-55">{pt.note}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Flavor — spans both cols */}
            <div className="col-span-2 p-4 bg-brand-surface">
              <div className="text-xs tracking-[0.3em] text-white/35 uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_flavor')}</div>
              <div className="flex flex-wrap gap-2">
                {FLAVORS[proteinType].map((flavor) => (
                  <button key={flavor} onClick={() => setSelectedFlavor(flavor)}
                    className="px-3 py-2 text-sm font-medium tracking-[0.06em] border transition-all duration-200 focus-visible:outline-none"
                    style={{ fontFamily: 'JetBrains Mono, monospace', borderColor: selectedFlavor === flavor ? (isVegan ? '#4ADE80' : '#FF4D4D') : 'rgba(255,255,255,0.08)', backgroundColor: selectedFlavor === flavor ? (isVegan ? '#4ADE8012' : '#FF4D4D12') : 'transparent', color: selectedFlavor === flavor ? (isVegan ? '#4ADE80' : '#FF4D4D') : 'rgba(255,255,255,0.40)' }}>
                    {flavor}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-Ons — spans both cols */}
            <div className="col-span-2 p-4 bg-brand-surface">
              <div className="text-xs tracking-[0.3em] text-white/35 uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_addons')}</div>
              <div className="grid grid-cols-3 gap-3">
                {ADD_ONS.map((addon) => (
                  <div key={addon.id} className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white truncate">{addon.label}</div>
                      <div className="text-xs text-white/30" style={{ fontFamily: 'JetBrains Mono, monospace' }}>+{addon.price.toFixed(2)}€</div>
                    </div>
                    <Toggle checked={addOns[addon.id]} onChange={() => toggleAddOn(addon.id)} color="#FF4D4D" />
                  </div>
                ))}
              </div>
            </div>

            {/* Liquid */}
            <div className="p-4 bg-brand-surface">
              <div className="text-xs tracking-[0.3em] text-white/35 uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_liquid')}</div>
              <div className="space-y-1.5">
                {LIQUIDS.map((liq) => (
                  <button key={liq.id} onClick={() => setLiquid(liq.id)}
                    className={`w-full px-3 py-2 text-sm font-medium tracking-[0.06em] uppercase border transition-all duration-200 focus-visible:outline-none text-left ${liquid === liq.id ? 'border-brand-neon bg-brand-neon/10 text-brand-neon' : 'border-brand-border text-white/40 hover:border-white/20 hover:text-white/60'}`}
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {liq.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Consistency + Scoops stacked */}
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-brand-surface">
                <div className="text-xs tracking-[0.3em] text-white/35 uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_consistency')}</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['thin', 'thick'] as const).map((th) => (
                    <button key={th} onClick={() => setThickness(th)}
                      className={`py-2 text-xs font-medium tracking-[0.1em] uppercase border transition-all duration-200 focus-visible:outline-none ${thickness === th ? 'border-brand-red bg-brand-red/10 text-brand-red' : 'border-brand-border text-white/40 hover:border-white/20 hover:text-white/60'}`}
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {th === 'thin' ? t('conf_thin') : t('conf_thick')}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-brand-surface flex-1">
                <div className="text-xs tracking-[0.3em] text-white/35 uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_extra_scoops')}</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setExtraScoops(Math.max(0, extraScoops - 1))} className="w-9 h-9 border border-brand-border text-white/50 hover:border-brand-red hover:text-brand-red transition-colors duration-200 flex items-center justify-center text-base focus-visible:outline-none">−</button>
                  <div className="flex-1 text-center">
                    <span className="text-2xl font-black text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{extraScoops}</span>
                    <div className="text-xs text-white/25 leading-none" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_extra_scoops_label')}</div>
                  </div>
                  <button onClick={() => setExtraScoops(Math.min(4, extraScoops + 1))} className="w-9 h-9 border border-brand-border text-white/50 hover:border-brand-neon hover:text-brand-neon transition-colors duration-200 flex items-center justify-center text-base focus-visible:outline-none">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Column 2: Shaker visual ── */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative" style={{ width: '220px', height: '330px' }}>
              <div className="absolute inset-0 rounded-full blur-3xl opacity-25" style={{ backgroundColor: shakerColor }} />
              <CupVisual fillLevel={fillLevel} color={shakerColor} />
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={shakeName + selectedFlavor + proteinType} initial={{ opacity: 0, y: 6, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.95 }} transition={{ duration: 0.25 }} className="text-center">
                <div className="text-base font-bold leading-tight max-w-[200px] mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: shakerColor }}>{shakeName}</div>
                <div className="text-xs text-white/20 tracking-[0.25em] mt-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_your_shake')}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Column 3: Summary ── */}
          <div className="space-y-3">
            {/* Stack summary */}
            <div className="p-4 bg-brand-surface">
              <div className="text-xs tracking-[0.3em] text-white/35 uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_your_stack')}</div>
              <div className="space-y-1.5 mb-3">
                <div className="text-xs text-brand-neon/55 tracking-[0.15em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_base_included')}</div>
                {[{ text: '500g low-fat quark', tooltip: true }, { text: `1 Scoop ${PROTEIN_TYPES[proteinType].label} (30g)`, tooltip: false }].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-neon flex-shrink-0" />
                    {item.tooltip ? (
                      <QuarkTooltip>
                        <span className="text-white/60 text-xs underline decoration-dotted decoration-white/25 cursor-help">{item.text} ⓘ</span>
                      </QuarkTooltip>
                    ) : (
                      <span className="text-white/60 text-xs">{item.text}</span>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/20 flex-shrink-0" /><span className="text-white/30 text-sm italic">{selectedFlavor} flavor</span></div>
                {isVegan && <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#4ADE80] flex-shrink-0" /><span className="text-[#4ADE80]/70 text-sm">🌱 Vegan — Pea Protein</span></div>}
              </div>
              {Object.entries(addOns).some(([, v]) => v) && (
                <div className="space-y-1.5 mb-3">
                  <div className="text-xs text-brand-red/55 tracking-[0.15em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_addons_label')}</div>
                  {ADD_ONS.filter((a) => addOns[a.id]).map((addon) => (
                    <div key={addon.id} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-red flex-shrink-0" /><span className="text-white/60 text-sm">{addon.label}</span></div>
                  ))}
                </div>
              )}
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/20 flex-shrink-0" /><span className="text-white/40 text-sm capitalize">{LIQUIDS.find((l) => l.id === liquid)?.label}</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white/20 flex-shrink-0" /><span className="text-white/40 text-sm capitalize">{thickness} consistency</span></div>
                {extraScoops > 0 && <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-red flex-shrink-0" /><span className="text-white/60 text-sm">+{extraScoops} extra scoop{extraScoops > 1 ? 's' : ''}</span></div>}
              </div>
              <div className="border-t border-brand-border" />
            </div>

            {/* Live macros */}
            <div className="p-4 bg-brand-surface">
              <div className="text-xs tracking-[0.3em] text-white/35 uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_live_macros')}</div>
              <div className="space-y-2.5">
                {[
                  { label: 'Protein', value: macros.protein, unit: 'g', color: '#00FFC6', max: 150 },
                  { label: 'Kcal', value: macros.kcal, unit: '', color: '#FF4D4D', max: 900 },
                  { label: 'Carbs', value: macros.carbs, unit: 'g', color: '#FFB84D', max: 100 },
                  { label: 'Fat', value: macros.fat, unit: 'g', color: '#A78BFA', max: 30 },
                ].map((macro) => (
                  <div key={macro.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs tracking-[0.15em] text-white/40 uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{macro.label}</span>
                      <AnimatePresence mode="wait">
                        <motion.span key={macro.value} initial={{ opacity: 0, y: -2 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 2 }} transition={{ duration: 0.15 }} className="text-sm font-bold" style={{ color: macro.color, fontFamily: 'JetBrains Mono, monospace' }}>{macro.value}{macro.unit}</motion.span>
                      </AnimatePresence>
                    </div>
                    <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                      <motion.div animate={{ width: `${Math.min((macro.value / macro.max) * 100, 100)}%` }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="h-full rounded-full" style={{ backgroundColor: macro.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + Order */}
            <div className="p-4 bg-brand-red/10 border border-brand-red/30">
              <div className="text-xs tracking-[0.25em] text-brand-red/60 uppercase mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t('conf_total_price')}</div>
              <AnimatePresence mode="wait">
                <motion.div key={price.toFixed(2)} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.2 }} className="flex items-end gap-1">
                  <span className="text-5xl font-black text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{price.toFixed(2)}</span>
                  <span className="text-2xl text-brand-red mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>€</span>
                </motion.div>
              </AnimatePresence>
              <button className="mt-3 w-full py-3 bg-brand-red text-white font-bold tracking-[0.2em] uppercase text-xs btn-primary clip-corner focus-visible:outline-none focus-visible:shadow-neon-red" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {t('conf_order')} {shakeName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
