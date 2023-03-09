/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'headerBg': '#E5FCED',
        'footerBg': '#282828',
        'Aksiya': '#AB7A19',
        'Yangi': '#53B175',
        'headerText': '#505050',
        'auth': '#53B175',
        'header': '#a6f0c1'
        
      },
      container:{
        center: true
      }
    },
  },
  plugins: [],
}