/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // For Vite and React components
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow-ease': 'spin 10s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
      fontFamily: {
        'maven': ['"Maven Pro"', 'sans-serif'],
        'playwrite': ['"Playwrite GB S"', 'sans-serif'],
        'yomogi': ['"Yomogi"', 'cursive'],
        'poppins': ['"Poppins"' , 'sans-serif']
      },
    },
  },
  plugins: [],
};
