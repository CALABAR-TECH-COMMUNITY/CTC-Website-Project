const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      'weight-300': '300',
      'weight-400': '400',
      'weight-700': '700',
    },
    extend: {
      fontSize: {
        'size-48': '48px',
        'size-72': '72px',
        'size-20': '20px',
        'size-18': '18px',
      },
     
      lineHeight: {
        'lineh-54': '54px',
        'lineh-23': '23.4px',
      },
      letterSpacing: {
        'custom1': '0.10000000149011612px',
      },
      fontFamily: {
        'comfort': ['Comfortaa'],
        'custom': ['Poppins'],
        'reem': ['Reem Kufi'],
        'robot': ['Roboto']
      }
    },
    colors: {
      transparent: 'transparent',
      'black': '#000',
      'white': '#fff',
      'red': 'red',
      'darkbtn': '#DC8700'

    },
   
  },
  plugins: [],
}
