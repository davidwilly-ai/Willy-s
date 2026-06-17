import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { NeonProvider } from '@/context/NeonContext'
import LightSwitch from '@/components/LightSwitch'

export const metadata: Metadata = {
  title: "Willy's — Fresh High-Protein Shakes Inside Your Gym",
  description: "Freshly mixed high-protein shakes made with low-fat quark, whey or isoclear, and optional creatine. Available directly in your gym.",
  keywords: ['protein shake', 'fitness', 'nutrition', 'gym', 'fresh shake', 'low-fat quark', 'whey', 'isoclear', 'willys'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-brand-black text-white antialiased">
        <LanguageProvider>
          <NeonProvider>
            {children}
            <LightSwitch />
          </NeonProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
