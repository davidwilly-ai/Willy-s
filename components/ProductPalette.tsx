'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 'esn-whey',
    name: 'ESN Whey',
    brand: 'ESN',
    category: 'Protein',
    protein: '24g / serving',
    flavor: 'Chocolate',
    price: '34.90',
    badge: 'PARTNER',
    badgeColor: '#00FFC6',
    accent: '#00FFC6',
    image: '/esn-logo.webp',
    isLogo: true,
    tags: ['Whey', 'Low Carb', 'Fast Absorb'],
  },
  {
    id: 'more-whey',
    name: 'More Whey',
    brand: 'More Nutrition',
    category: 'Protein',
    protein: '25g / serving',
    flavor: 'Vanilla',
    price: '32.90',
    badge: 'PARTNER',
    badgeColor: '#FF4D4D',
    accent: '#FF4D4D',
    image: null,
    tags: ['Whey', 'Zero Fat', 'High Protein'],
  },
  {
    id: 'isoclear',
    name: 'IsoClear',
    brand: 'ESN',
    category: 'Isolate',
    protein: '27g / serving',
    flavor: 'Lemon',
    price: '39.90',
    badge: 'PREMIUM',
    badgeColor: '#FFB84D',
    accent: '#FFB84D',
    image: null,
    tags: ['Isolate', 'Ultra Pure', 'Clear'],
  },
  {
    id: 'vegan',
    name: 'Vegan Pro',
    brand: 'More Nutrition',
    category: 'Plant-Based',
    protein: '21g / serving',
    flavor: 'Strawberry',
    price: '29.90',
    badge: 'VEGAN',
    badgeColor: '#4ADE80',
    accent: '#4ADE80',
    image: null,
    tags: ['Pea Protein', 'Hemp', 'Organic'],
  },
  {
    id: 'preworkout',
    name: 'Pre-Workout',
    brand: 'ESN',
    category: 'Booster',
    protein: '0g',
    flavor: 'Watermelon',
    price: '24.90',
    badge: 'BOOST',
    badgeColor: '#FF4D4D',
    accent: '#FF4D4D',
    image: null,
    tags: ['Caffeine', 'Beta-Alanine', 'Focus'],
  },
  {
    id: 'creatine',
    name: 'Creatine',
    brand: 'More Nutrition',
    category: 'Performance',
    protein: '0g',
    flavor: 'Neutral',
    price: '19.90',
    badge: 'ESSENTIAL',
    badgeColor: '#A78BFA',
    accent: '#A78BFA',
    image: null,
    tags: ['Monohydrate', 'Pure', 'Micronized'],
  },
]

export default function ProductPalette() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="palette"
      ref={ref}
      className="relative py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0B1215 0%, #0D1820 50%, #0B1215 100%)',
      }}
    >
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-petrol/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-pixel-grid bg-grid-40 opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-petrol/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span
              className="text-brand-red text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Product Palette
            </span>
          </div>
          <h2
            className="text-[4rem] md:text-[7rem] font-black leading-none text-white tracking-[-0.02em]"
            style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
          >
            THE
            <br />
            <span className="text-brand-red text-glow-red">STACK</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group relative bg-brand-surface border border-brand-border card-hover overflow-hidden cursor-pointer focus-within:border-brand-red/50">
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${product.accent}12 0%, transparent 70%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ backgroundColor: product.accent }}
      />

      <div className="p-6">
        {/* Badge */}
        <div className="flex justify-between items-start mb-4">
          <span
            className="px-2 py-0.5 text-[9px] font-black tracking-[0.2em]"
            style={{
              color: product.badgeColor,
              border: `1px solid ${product.badgeColor}40`,
              backgroundColor: `${product.badgeColor}10`,
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {product.badge}
          </span>
          <span
            className="text-[10px] text-white/25 tracking-[0.15em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {product.category}
          </span>
        </div>

        {/* Product image / placeholder */}
        <div className="relative w-full h-44 mb-4 flex items-center justify-center bg-brand-border/30 overflow-hidden">
          {product.isLogo && product.image ? (
            <div className="relative w-40 h-28">
              <Image
                src={product.image}
                alt={product.brand}
                fill
                className="object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ) : (
            <div className="text-center">
              <div
                className="font-black opacity-25 group-hover:opacity-55 transition-opacity duration-300"
                style={{
                  fontFamily: 'Bebas Neue, Impact, sans-serif',
                  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                  color: product.accent,
                  letterSpacing: '-0.02em',
                  textShadow: `0 0 20px ${product.accent}30`,
                }}
              >
                {product.brand.toUpperCase()}
              </div>
              <div className="text-[11px] text-white/25 mt-1 tracking-[0.2em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {product.category.toUpperCase()}
              </div>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/60 to-transparent pointer-events-none" />
        </div>

        {/* Name & brand */}
        <div className="mb-3">
          <h3
            className="text-2xl font-black text-white tracking-[-0.01em] group-hover:text-glow-red transition-all duration-300"
            style={{ fontFamily: 'Bebas Neue, sans-serif', color: 'white' }}
          >
            {product.name}
          </h3>
          <div
            className="text-xs text-white/30 tracking-[0.15em] uppercase mt-0.5"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            by {product.brand}
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-4 mb-4">
          <div>
            <div
              className="text-xs font-bold"
              style={{ color: product.accent, fontFamily: 'JetBrains Mono, monospace' }}
            >
              {product.protein}
            </div>
            <div
              className="text-[9px] text-white/25 tracking-[0.1em]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              PROTEIN
            </div>
          </div>
          <div>
            <div
              className="text-xs font-bold text-white/60"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {product.flavor}
            </div>
            <div
              className="text-[9px] text-white/25 tracking-[0.1em]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              FLAVOR
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[9px] text-white/30 border border-brand-border tracking-[0.1em]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span
            className="text-2xl font-black text-white"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {product.price}€
          </span>
          <button
            className="px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase border transition-all duration-200 focus-visible:outline-none group-hover:opacity-100"
            style={{
              borderColor: product.accent + '60',
              color: product.accent,
              fontFamily: 'JetBrains Mono, monospace',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = product.accent + '15'
              e.currentTarget.style.borderColor = product.accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = product.accent + '60'
            }}
          >
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  )
}
