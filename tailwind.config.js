/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff7a7a',
          500: '#ff5a5f', // Airbnb primary red
          600: '#e63e3e',
          700: '#c62828',
          800: '#a52222',
          900: '#891f1f',
        },
        secondary: {
          50: '#e6f9f9',
          100: '#d0f4f4',
          200: '#a1e9e9',
          300: '#66dada',
          400: '#3dcccc',
          500: '#00a699', // Airbnb teal
          600: '#008489', // Airbnb dark teal
          700: '#00706c',
          800: '#005c59',
          900: '#004b48',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#919191',
          600: '#767676', // Airbnb neutral
          700: '#595959',
          800: '#404040',
          900: '#2a2a2a',
        },
      },
      fontFamily: {
        sans: [
          'Circular',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 6px 16px rgba(0, 0, 0, 0.12)',
        header: '0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'header-scrolled': '0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};