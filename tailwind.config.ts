import { type Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': {
            color: 'yellow',
            opacity: '1',
          },
          '50%': {
            color: 'white',
            opacity: '0.5',
          },
        },
        snowFall: {
          '0%': {
            transform: 'translateY(-2000%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        fire: {
          '0%, 100%': {
            color: 'red',
            opacity: '1',
          },
          '50%': {
            color: 'orange',
            opacity: '0.5',
          },
        },
        water: {
          '0%, 100%': {
            color: 'blue',
            opacity: '1',
          },
          '50%': {
            color: 'lightblue',
            opacity: '0.5',
          },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        snowFall: 'snowFall 10s linear',
        fire: 'fire 3s ease-in-out infinite',
        water: 'water 5s ease-in-out infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
