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
        'footerBackgroundColor': '#1E1E1E',
      },
      margin:{
        "margin-Top":'2.09vh',
        "margin-left":'5.20vw'
      }
    },
  },
  plugins: [],
}
