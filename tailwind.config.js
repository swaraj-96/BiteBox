/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "FarrowBallBorrowedLight": "#dbe5dc",
        "appTheme": "#FACB0B",
        "btnTheme" : "#21325E"
      },
      screens: {
        "mysmall" : {'max' : '768px'}
      }
    },
  },
  plugins: [],
}

