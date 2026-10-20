/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D15',
          900: '#101C2C', // Primary Deep Midnight Navy
          850: '#152336',
          800: '#1B2C42',
          700: '#263C57',
        },
        slate: {
          850: '#202B3B',
          800: '#2B394D',
          700: '#34465D', // Secondary Slate Blue
          600: '#465A75',
          500: '#5A6F8C',
        },
        warm: {
          50: '#FCFCFA',
          100: '#F8F8F5', // Warm White Background
          200: '#F1F1EB',
          300: '#E7E7DF',
        },
        gold: {
          200: '#F4E9D4',
          300: '#E5D3AF',
          400: '#D5BE8A',
          500: '#C6A66B', // Accent Muted Champagne Gold
          600: '#B08E51',
          700: '#8E7039',
        },
        charcoal: {
          950: '#10151D',
          900: '#202936', // Main Text Deep Charcoal
          800: '#2D3748',
          700: '#4A5568',
        },
        muted: {
          DEFAULT: '#687382', // Secondary Text Muted Gray
          light: '#8E99A8',
          dark: '#525C6A',
        },
        border: {
          light: '#F0F2F5',
          DEFAULT: '#E4E7EB', // Soft Neutral Gray Border
          dark: '#CBD2D9',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        luxury: ['"Cormorant Garamond"', 'serif'],
      },
      maxWidth: {
        'corporate': '1360px',
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'widest-caps': '0.18em',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(16, 28, 44, 0.04), 0 4px 12px rgba(16, 28, 44, 0.03)',
        'elevated': '0 10px 30px -10px rgba(16, 28, 44, 0.08), 0 4px 12px -2px rgba(16, 28, 44, 0.04)',
        'hover': '0 25px 50px -12px rgba(16, 28, 44, 0.16), 0 10px 20px -5px rgba(16, 28, 44, 0.08)',
        'nav': '0 4px 25px -2px rgba(10, 18, 30, 0.08)',
        'gold-glow': '0 0 40px -10px rgba(198, 166, 107, 0.35)',
        'dark-glow': '0 20px 60px -15px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
