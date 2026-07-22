/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          deep: '#F3EDE2',
        },
        beige: {
          DEFAULT: '#EDE4D8',
          dark: '#DCCFBC',
        },
        sage: {
          50: '#F3F5F0',
          100: '#E4E9DD',
          200: '#C9D3BC',
          300: '#AEBD9B',
          400: '#8A9A7E',
          500: '#728465',
          600: '#5B6B51',
          700: '#465241',
        },
        gold: {
          50: '#F9F3E9',
          100: '#EFDFC3',
          200: '#DCC297',
          300: '#C9A66E',
          400: '#B8935F',
          500: '#9C7A49',
          600: '#7C6039',
        },
        charcoal: {
          DEFAULT: '#2B2A28',
          light: '#4A4844',
        },
        stone: {
          DEFAULT: '#E8E5E0',
        },
      },
      fontFamily: {
        display: ['"Italiana"', 'serif'],
        body: ['"Albert Sans"', 'sans-serif'],
      },
      borderRadius: {
        soft: '18px',
        card: '24px',
        lux: '28px',
      },
      boxShadow: {
        soft: '0 8px 30px -10px rgba(43, 42, 40, 0.12)',
        lifted: '0 20px 60px -15px rgba(43, 42, 40, 0.2)',
        glow: '0 0 40px -5px rgba(184, 147, 95, 0.35)',
      },
      backgroundImage: {
        'sage-gold-radial': 'radial-gradient(circle at 30% 20%, rgba(138,154,126,0.18), transparent 60%), radial-gradient(circle at 80% 80%, rgba(184,147,95,0.15), transparent 55%)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.08)', opacity: '0.8' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.8' },
          '80%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        breathe: 'breathe 6s ease-in-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        pulseRing: 'pulseRing 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
