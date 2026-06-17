'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpotifySign from '@/components/SpotifySign'

const quotes = [
  {
    text: "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.",
    author: "Arnold Schwarzenegger",
    sport: "Bodybuilding",
    font: 'Bebas Neue, sans-serif',
  },
  {
    text: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
    author: "Muhammad Ali",
    sport: "Boxing",
    font: 'Georgia, serif',
  },
  {
    text: "The body achieves what the mind believes.",
    author: "Ronnie Coleman",
    sport: "Bodybuilding (8x Mr. Olympia)",
    font: 'Impact, sans-serif',
  },
  {
    text: "Pain is temporary. It may last a minute, or an hour, or a day, or a year, but eventually it will subside and something else will take its place.",
    author: "Lance Armstrong",
    sport: "Cycling",
    font: 'Georgia, serif',
  },
  {
    text: "You have to push past your perceived limits, push past that point you thought was as far as you can go.",
    author: "Drew Brees",
    sport: "American Football",
    font: 'Bebas Neue, sans-serif',
  },
  {
    text: "To be number one, you have to train like you're number two.",
    author: "Michael Phelps",
    sport: "Swimming (23x Olympic Gold)",
    font: 'Georgia, serif',
  },
  {
    text: "Champions keep playing until they get it right.",
    author: "Billie Jean King",
    sport: "Tennis",
    font: 'Bebas Neue, sans-serif',
  },
]

export default function QuotesSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % quotes.length)
    }, 13000)
    return () => clearInterval(timer)
  }, [])

  const quote = quotes[current]

  return (
    <section
      id="quotes"
      className="relative py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0B0F10 0%, #090C0E 50%, #0B0F10 100%)',
      }}
    >
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Neon light anchor — bottom left neon phrase */}
      <div className="absolute bottom-16 left-8 hidden lg:block">
        <div
          className="text-4xl font-black neon-sign-red select-none"
          style={{ fontFamily: 'Bebas Neue, sans-serif', writingMode: 'vertical-lr', transform: 'rotate(180deg)', letterSpacing: '0.15em', opacity: 0.6 }}
        >
          NO PROTEIN
        </div>
      </div>
      <div className="absolute bottom-16 right-8 hidden lg:block">
        <div
          className="text-4xl font-black neon-sign-green select-none"
          style={{ fontFamily: 'Bebas Neue, sans-serif', writingMode: 'vertical-lr', letterSpacing: '0.15em', opacity: 0.6 }}
        >
          NO PROGRESS
        </div>
      </div>

      {/* Large decorative quote mark */}
      <div
        className="absolute top-12 left-12 text-[18rem] leading-none text-white/3 font-black select-none pointer-events-none"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        &ldquo;
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="w-12 h-px bg-white/15" />
          <span
            className="text-white/25 text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Fuel Your Mind
          </span>
          <div className="w-12 h-px bg-white/15" />
        </div>

        {/* Quote display */}
        <div className="relative min-h-[260px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <blockquote
                className="text-2xl md:text-3xl lg:text-[2.6rem] font-black text-white leading-tight max-w-4xl mx-auto"
                style={{ fontFamily: quote.font, lineHeight: 1.2 }}
              >
                &ldquo;{quote.text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-px bg-brand-red mx-auto" />
                <div
                  className="text-brand-red font-bold tracking-[0.12em] mt-2"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {quote.author}
                </div>
                <div
                  className="text-[11px] text-white/25 tracking-[0.28em] uppercase"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {quote.sport}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots nav */}
        <div className="flex items-center justify-center gap-2.5 mt-14">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 focus-visible:outline-none ${
                i === current
                  ? 'w-8 h-1.5 bg-brand-red shadow-neon-red-sm'
                  : 'w-1.5 h-1.5 bg-white/15 hover:bg-white/35 rounded-full'
              }`}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-5 max-w-xs mx-auto h-px bg-white/8 overflow-hidden">
          <motion.div
            key={current}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 13, ease: 'linear' }}
            className="h-full bg-brand-red"
          />
        </div>
      </div>

      {/* Spotify neon sign */}
      <SpotifySign />
    </section>
  )
}
