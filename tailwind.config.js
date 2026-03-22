/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          300: '#e09898',
          500: '#c93a3a', /* crimson */
          600: '#a62b2b',
        },
        bamboo: {
          400: '#a3b899',
          neon: '#87a37a', /* matcha */
        },
        indigo: {
          cyber: '#1a1a1a',
          neon: '#c4a777' /* soft gold */
        },
        neon: {
          pink: '#e84a4a', /* bright crimson */
          cyan: '#d4b783' /* bright gold */
        },
        dark: {
          bg: '#0a0d16',
          card: '#0e121e',
          board: '#141824'
        }
      },
      animation: {
        'spin-slow-ease': 'spin 10s cubic-bezier(0.65, 0, 0.35, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      fontFamily: {
        'maven': ['"Maven Pro"', 'sans-serif'],
        'playwrite': ['"Playwrite GB S"', 'sans-serif'],
        'yomogi': ['"Yomogi"', 'cursive'],
        'inter': ['"Inter"', 'sans-serif'],
        'japanese': ['"Noto Sans JP"', 'sans-serif'],
        'kosugi': ['"Kosugi Maru"', 'sans-serif']
      },
    },
  },
  plugins: [],
};
