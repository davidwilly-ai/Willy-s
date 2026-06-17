'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface NeonCtx {
  neonOn: boolean
  toggle: () => void
}

const NeonContext = createContext<NeonCtx>({ neonOn: true, toggle: () => {} })

export function NeonProvider({ children }: { children: ReactNode }) {
  const [neonOn, setNeonOn] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('neon-off', !neonOn)
  }, [neonOn])

  return (
    <NeonContext.Provider value={{ neonOn, toggle: () => setNeonOn(v => !v) }}>
      {children}
    </NeonContext.Provider>
  )
}

export const useNeon = () => useContext(NeonContext)
