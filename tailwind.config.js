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
        wiggle: 'wiggle 5s infinite',
        wiggleSlow: 'wiggle 3s infinite',
        bounce: 'bounce 5s infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2)',
          },
          '50%': {
            transform: 'scale(0.8)',
          }
        },
      }
    },
  },
  plugins: [],
}
