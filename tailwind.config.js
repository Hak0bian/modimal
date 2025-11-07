/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secordary: '#404040',
        black: '#0C0C0C',
        lightgray: '#CBCBCB',
        darkblue: '#19418E',
        lightblue: '#7DC3EB',
        green: '#748C70',
        violet: '#909225',
        pink: '#D0A5EA',
        bg_green: '#5A6D57',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sansmt: ['SansMt', 'sans-serif'],
      },

      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}