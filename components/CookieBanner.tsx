'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [visible, setVisible] = useState(true)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="bg-brand-surface border border-brand-border p-5 md:p-6 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red via-brand-neon to-brand-red" />

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-brand-red/50" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-brand-neon/50" />

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Icon + text */}
                <div className="flex items-start gap-3 flex-1">
                  <span className="text-xl mt-0.5 flex-shrink-0">🍪</span>
                  <div>
                    <div
                      className="text-xs font-bold text-white mb-1 tracking-[0.1em] uppercase"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      Cookie Notice
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed max-w-xl">
                      We use cookies to enhance your experience, analyze site traffic, and serve personalized content.
                      By clicking &quot;Accept All&quot;, you consent to our use of cookies.{' '}
                      <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-brand-neon hover:underline focus-visible:outline-none"
                      >
                        {showDetails ? 'Hide details' : 'Learn more'}
                      </button>
                    </p>

                    {/* Details */}
                    <AnimatePresence>
                      {showDetails && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pt-3 border-t border-brand-border grid grid-cols-3 gap-3">
                            {[
                              { type: 'Essential', desc: 'Required for basic functionality', required: true },
                              { type: 'Analytics', desc: 'Helps us improve the experience', required: false },
                              { type: 'Marketing', desc: 'Personalized content & ads', required: false },
                            ].map((cookie) => (
                              <div key={cookie.type} className="space-y-1">
                                <div
                                  className="text-[9px] font-bold tracking-[0.15em] uppercase"
                                  style={{
                                    fontFamily: 'JetBrains Mono, monospace',
                                    color: cookie.required ? '#00FFC6' : 'rgba(255,255,255,0.5)',
                                  }}
                                >
                                  {cookie.type}
                                  {cookie.required && ' ✓'}
                                </div>
                                <div
                                  className="text-[9px] text-white/25"
                                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                                >
                                  {cookie.desc}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => setVisible(false)}
                    className="px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase text-white/40 border border-brand-border hover:border-white/20 hover:text-white/60 transition-colors duration-200 focus-visible:outline-none"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => setVisible(false)}
                    className="px-5 py-2 bg-brand-neon text-black text-[10px] font-black tracking-[0.15em] uppercase btn-primary focus-visible:outline-none focus-visible:shadow-neon-green"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
