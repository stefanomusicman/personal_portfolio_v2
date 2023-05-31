/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        wiggle: 'wiggle 3s infinite linear',
        wiggleSlow: 'wiggle 2s infinite linear',
        swipeLeft: 'swipeLeft 0.5s linear',
        swipeRight: 'swipeRight 0.5s linear',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.8)',
          },
        },
        swipeLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
            visibility: 'hidden',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
            visibility: 'visible',
          },
        },
        swipeRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      }
    },
  },
  plugins: [],
}
