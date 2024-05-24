/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Astegra: ['Astegra'], // Add your font here
    },
    mixBlendMode:{
      'overlay': 'overlay',
      'plus-lighter': 'plus-lighter',
    }
  },
  },
  variants: {
    extend: {
      mixBlendMode: ['hover','plus-lighter'],
    },
  },
  plugins: [],
}