import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0B0F10',
          petrol: '#0F2A2E',
          red: '#FF4D4D',
          neon: '#00FFC6',
          dark: '#080C0D',
          surface: '#111518',
          elevated: '#161B1D',
          border: '#1E2628',
        },
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'Impact', 'Arial Black', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'pixel-grid': `
          linear-gradient(rgba(0,255,198,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,198,0.04) 1px, transparent 1px)
        `,
        'pixel-grid-red': `
          linear-gradient(rgba(255,77,77,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,77,77,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-40': '40px 40px',
        'grid-20': '20px 20px',
      },
      boxShadow: {
        'neon-red': '0 0 20px rgba(255,77,77,0.4), 0 0 60px rgba(255,77,77,0.15)',
        'neon-green': '0 0 20px rgba(0,255,198,0.4), 0 0 60px rgba(0,255,198,0.15)',
        'neon-red-sm': '0 0 8px rgba(255,77,77,0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.8), 0 0 20px rgba(255,77,77,0.15)',
      },
      keyframes: {
        'pixel-shift': {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '40px 40px, 40px 40px' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'pixel-shift': 'pixel-shift 8s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'scan-line': 'scan-line 6s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
