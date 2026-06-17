'use client'

import Image from 'next/image'

const partnerLogos = [
  { name: 'ESN', src: '/esn-logo.webp', invert: false },
  { name: 'More Nutrition', src: '/more-nutrition-logo.png', invert: true },
]

export default function Footer() {
  return (
    <footer
      className="relative border-t border-brand-border overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080B0C 0%, #060809 100%)',
      }}
    >
      {/* Pixel grid */}
      <div className="absolute inset-0 bg-pixel-grid bg-grid-40 opacity-30" />

      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="Willy's" fill className="object-contain" />
              </div>
              <span
                className="text-2xl font-black text-white tracking-wider"
                style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}
              >
                WILLY&apos;S
              </span>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
            >
              Premium protein shake builder for serious athletes.
              Build your stack. Track your progress. Dominate your performance.
            </p>

            {/* Partner logos */}
            <div className="mt-10">
              <div
                className="text-[10px] tracking-[0.3em] text-white/25 uppercase mb-5"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Official Partners
              </div>
              <div className="flex items-center gap-8 flex-wrap">
                {partnerLogos.map((p) => (
                  <div key={p.name} className="opacity-55 hover:opacity-90 transition-opacity duration-200">
                    <div className="relative h-12" style={{ width: 'auto', minWidth: '90px' }}>
                      <Image
                        src={p.src}
                        alt={p.name}
                        height={48}
                        width={160}
                        className="object-contain h-12 w-auto"
                        style={p.invert ? { filter: 'brightness(0) invert(1)' } : undefined}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links column */}
          <div>
            <div
              className="text-[10px] tracking-[0.3em] text-white/25 uppercase mb-6"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Navigate
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Signature Product', href: '#signature' },
                { label: 'Configurator', href: '#configurator' },
                { label: 'Product Palette', href: '#palette' },
                { label: 'Community', href: '#quotes' },
                { label: 'Our Story', href: '#heritage' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-brand-neon transition-colors duration-200 focus-visible:outline-none focus-visible:text-brand-neon"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Impressum column */}
          <div>
            <div
              className="text-[10px] tracking-[0.3em] text-white/25 uppercase mb-6"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Impressum
            </div>
            <address
              className="text-sm text-white/40 not-italic space-y-1 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <div className="text-white/60 font-medium">David Willy</div>
              <div>Willy&apos;s GmbH</div>
              <div>Max Eyth Straße 35</div>
              <div>72116 Mössingen</div>
              <div className="pt-3 space-y-1">
                <div>
                  <span className="text-white/25 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    E:
                  </span>{' '}
                  <a
                    href="mailto:info@willys.de"
                    className="hover:text-brand-neon transition-colors duration-200"
                  >
                    info@willys.de
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            className="text-[10px] text-white/20 tracking-[0.15em]"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            © 2025 Willy&apos;s GmbH — All rights reserved
          </div>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Cookie Notice', 'Disclaimer'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] text-white/25 hover:text-white/50 transition-colors duration-200 tracking-[0.1em] focus-visible:outline-none focus-visible:text-brand-neon"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
