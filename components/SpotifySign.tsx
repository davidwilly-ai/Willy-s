'use client'

import { motion } from 'framer-motion'

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

export default function SpotifySign() {
  return (
    <div className="flex justify-center py-12 px-6">
      <motion.a
        href="https://open.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center gap-5 px-8 py-5 border border-[#1DB954]/25 focus-visible:outline-none"
        style={{
          background: 'rgba(29,185,84,0.04)',
          clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
        }}
      >
        {/* Neon glow background on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 24px rgba(29,185,84,0.12), 0 0 40px rgba(29,185,84,0.15)' }}
        />

        {/* Animated glow dot */}
        <div
          className="absolute top-2 right-3 w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: '#1DB954',
            boxShadow: '0 0 6px #1DB954, 0 0 12px rgba(29,185,84,0.6)',
            animation: 'pulse 2s infinite',
          }}
        />

        <SpotifyIcon className="w-9 h-9 text-[#1DB954] flex-shrink-0 group-hover:drop-shadow-[0_0_10px_rgba(29,185,84,0.8)] transition-all duration-300" />

        <div>
          <div
            className="font-black tracking-[0.08em] group-hover:drop-shadow-[0_0_10px_rgba(29,185,84,0.7)] transition-all duration-300"
            style={{
              fontFamily: 'Bebas Neue, Impact, sans-serif',
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              color: '#1DB954',
              textShadow: '0 0 16px rgba(29,185,84,0.4)',
            }}
          >
            FOLLOW OUR PLAYLISTS
          </div>
          <div
            className="text-[10px] tracking-[0.25em] text-white/30 uppercase mt-0.5"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Spotify · Willy&apos;s Performance
          </div>
        </div>

        <span className="text-[#1DB954]/40 group-hover:text-[#1DB954] group-hover:translate-x-1 transition-all duration-200 text-lg">
          →
        </span>
      </motion.a>
    </div>
  )
}
