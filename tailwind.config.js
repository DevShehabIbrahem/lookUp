/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        Astegra: ['Astegra'], 
        poppins: ['poppins'], 
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
  plugins: [],
}