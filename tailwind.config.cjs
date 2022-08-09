/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {
          'max': '576px'
        }
      },
      borderRadius: {
        '20px':'20px'
      },
      spacing: {
        '10px':'10px',
        '20px':'20px',
        '30px':'30px',
        '40px':'40px',
        '60px':'60px',
        '118px':'118px',
      }
    },
  },
  plugins: [],
}
