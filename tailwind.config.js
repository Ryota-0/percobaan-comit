const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      
      animation: {
        'spin-slow' :  'spin 3s linear infinite',
        'spin-sslow' :  'spin 5s linear infinite',
        'spin-speed' : 'spin 0.1s linear infinite',
        'goyang' : 'goyang 1s ease-in-out infinite'
      },
      keyframes: {
        goyang: {
          '0%, 100%' : {transform: 'rotate(-3deg)'}, '50%' : {transform: 'rotate(3deg)'},
        }
      },
    },
  },
  plugins: [],
}