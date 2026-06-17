'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useT } from '@/context/LanguageContext'
import type { TKey } from '@/context/LanguageContext'

const links: { key: TKey; href: string }[] = [
  { key: 'nav_product',      href: '#signature' },
  { key: 'nav_science',      href: '#science' },
  { key: 'nav_configurator', href: '#configurator' },
  { key: 'nav_story',        href: '#heritage' },
  { key: 'nav_signature',    href: '/signature' },
  { key: 'nav_gyms',         href: '#gym-owners' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, lang, setLang } = useT()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/90 backdrop-blur-md border-b border-brand-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <div className="relative w-[68px] h-[68px]">
            <Image src="/logo.png" alt="Willy's" fill className="object-contain drop-shadow-lg" />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 hover:text-brand-neon transition-colors duration-200 focus-visible:outline-none focus-visible:text-brand-neon"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t(link.key)}
            </a>
          ))}

          {/* Language toggle */}
          <div className="flex items-center border border-brand-border rounded-sm overflow-hidden">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1.5 text-sm leading-none transition-colors duration-200 focus-visible:outline-none ${
                lang === 'en'
                  ? 'bg-brand-surface text-white'
                  : 'text-white/30 hover:text-white/60'
              }`}
              aria-label="English"
            >
              🇬🇧
            </button>
            <div className="w-px h-4 bg-brand-border" />
            <button
              onClick={() => setLang('de')}
              className={`px-2.5 py-1.5 text-sm leading-none transition-colors duration-200 focus-visible:outline-none ${
                lang === 'de'
                  ? 'bg-brand-surface text-white'
                  : 'text-white/30 hover:text-white/60'
              }`}
              aria-label="Deutsch"
            >
              🇩🇪
            </button>
          </div>

          <a
            href="#configurator"
            className="ml-2 px-5 py-2 bg-brand-red text-white text-xs font-bold tracking-[0.15em] uppercase clip-corner hover:shadow-neon-red focus-visible:shadow-neon-red transition-shadow duration-200"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {t('nav_build')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-brand-surface border-t border-brand-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-mono tracking-[0.2em] uppercase text-white/60 hover:text-brand-neon transition-colors duration-200"
                >
                  {t(link.key)}
                </a>
              ))}
              {/* Mobile language toggle */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Lang:
                </span>
                <button
                  onClick={() => setLang('en')}
                  className={`text-sm px-2 py-1 border border-brand-border transition-colors ${lang === 'en' ? 'text-white border-white/30' : 'text-white/30'}`}
                >
                  🇬🇧 EN
                </button>
                <button
                  onClick={() => setLang('de')}
                  className={`text-sm px-2 py-1 border border-brand-border transition-colors ${lang === 'de' ? 'text-white border-white/30' : 'text-white/30'}`}
                >
                  🇩🇪 DE
                </button>
              </div>
              <a
                href="#configurator"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-brand-red text-white text-xs font-bold tracking-[0.15em] uppercase text-center"
              >
                {t('nav_build')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
