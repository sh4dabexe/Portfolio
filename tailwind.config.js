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
          DEFAULT: '#0a0a0f',
          deep: '#07070a',
        },
        surface: {
          DEFAULT: '#111118',
          2: '#181822',
          3: '#222230',
        },
        ink: '#111411',
        paper: {
          DEFAULT: '#fdf1e1',
          hover: '#f5e4cd',
          dark: '#e9d6be',
        },
        muted: '#8888a8',
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(255, 255, 255, 0.14)',
        },
        accent: {
          pink: '#ff3366',
          magenta: '#e60067',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
}
