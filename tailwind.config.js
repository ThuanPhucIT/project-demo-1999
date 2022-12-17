/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["'Rubik Vinyl'"],
        zen: ["'Zen Dots'"],
        quicksand: ["Quicksand"],
        mochiy: ["'Mochiy Pop One'"],
      },
    },
  },
  plugins: [],
}