/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        Astegra: ['Astegra'], 
        poppins: ['poppins'], 
    },
    clipPath: {
      'top-left-cut': 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)',
    },
    colors:{
      sectionTitle:"#A8513A",
      grrenColor:"#05414B"
     },
     transitionProperty: {
      'left': 'left',
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
   plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-top-left': {
          'clip-path': 'polygon(48% 0, 100% 0, 100% 35%, 100% 70%, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 32%, 47% 31%)',
        },
      });
    },
  ],
}