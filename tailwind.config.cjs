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
        '60px':'60px'
      }
    },
  },
  plugins: [],
}
