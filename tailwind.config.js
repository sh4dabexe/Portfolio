/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050505',
          surface: '#0a0a0a',
          card: 'rgba(14, 14, 14, 0.78)',
          cardHover: 'rgba(22, 22, 22, 0.90)',
        },
        noir: {
          DEFAULT: '#050505',
          surface: '#0a0a0a',
          card: '#0f0f10',
          elevated: '#141416',
        },
        crimson: {
          DEFAULT: '#ef4444',
          hover: '#dc2626',
          dark: '#b91c1c',
          glow: 'rgba(239, 68, 68, 0.22)',
          dim: 'rgba(239, 68, 68, 0.10)',
          border: 'rgba(239, 68, 68, 0.35)',
        },
        accent: {
          red: '#ef4444',
          pink: '#ff3366',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.10)',
          subtle: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.22)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        bebas: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        caveat: ['"Caveat"', 'cursive'],
        editorial: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
}
