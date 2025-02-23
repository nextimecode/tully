// import forms from '@tailwindcss/forms'
// import preline from 'preline/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/preline/dist/*.js'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      xs: { max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1200px'
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        card: '0 11px 34px 0 rgba(0, 0, 0, 0.65)'
      },
      colors: {
        primary: {
          DEFAULT: '#164d75',
          50: '#e0eaf2',
          100: '#bfd5e5',
          200: '#91b6d1',
          300: '#6496bc',
          400: '#3a78a6',
          500: '#164d75',
          600: '#113c5d',
          700: '#0d2d46',
          800: '#091e30',
          900: '#040f18'
        },
        secondary: {
          DEFAULT: '#9ca2a4',
          50: '#f2f4f5',
          100: '#e6e9eb',
          200: '#ccd3d6',
          300: '#b3bcc2',
          400: '#99a6ad',
          500: '#9ca2a4',
          600: '#7d8183',
          700: '#5e6162',
          800: '#3e4142',
          900: '#1f2021'
        },
        system: {
          red: '#FF453A',
          orange: '#FF9F0A',
          yellow: '#FFD60A',
          green: '#30D158',
          mint: '#63E6E2',
          teal: '#40CBE0',
          cyan: '#64D2FF',
          blue: '#0A84FF',
          indigo: '#5E5CE6',
          purple: '#BF5AF2',
          pink: '#FF375F',
          brown: '#A2845E',
          gray: '#8E8E93',
          gray2: '#636366',
          gray3: '#48484A',
          gray4: '#3A3A3C',
          gray5: '#2C2C2E',
          gray6: '#1C1C1E',
          'gray-transparent': 'hsla(0, 0%, 100%, 0.04)'
        }
      },
      animation: {
        'border-gradient': 'border-gradient 2.5s linear infinite',
        'hover-glow': 'hover-glow 2.5s ease-in-out infinite',
        'button-glow': 'button-glow 2.5s ease-in-out infinite'
      },
      keyframes: {
        'border-gradient': {
          '0%': { borderColor: '#FF375F' },
          '15%': { borderColor: '#BF5AF2' },
          '30%': { borderColor: '#5E5CE6' },
          '45%': { borderColor: '#0A84FF' },
          '60%': { borderColor: '#64D2FF' },
          '75%': { borderColor: '#30D158' },
          '90%': { borderColor: '#FFD60A' },
          '100%': { borderColor: '#FF9F0A' }
        },
        'hover-glow': {
          '0%, 100%': { boxShadow: '0 0 10px 2px #BF5AF2' },
          '50%': { boxShadow: '0 0 20px 4px #5E5CE6' }
        },
        'button-glow': {
          '0%, 100%': {
            backgroundColor: '#BF5AF2',
            boxShadow: '0 0 10px 2px #BF5AF2'
          },
          '50%': {
            backgroundColor: '#5E5CE6',
            boxShadow: '0 0 20px 4px #5E5CE6'
          }
        }
      }
    }
  },
  plugins: []
}
export default config
