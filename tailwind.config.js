/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "FarrowBallBorrowedLight": "#dbe5dc",
        "appTheme": "#FACB0B",
        "btnTheme" : "#21325E",
        "bgTheme" : "#F3F3FB",
        "darkBgTheme" : "#111928",
      },
      screens: {
        "mysmall" : {'max' : '768px'}
      }
    },
  },
  plugins: [],
}

