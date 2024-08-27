/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'mainBackgroundColor': '#D9D9D9',
        'bodyBackgroundColor': '#e9e9e9',
      },
    },
  },
  plugins: [],
}
