/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.2rem",
      },
    },
    extend: {
      colors: {
        primary: "#000028",
        secondary: "#23233C",
        'light-dark': '#9999A9'
      },
      fontSize: {
        60: "60px",
        40: "40px",
        16: "16px",
        14: "14px",
        12: "12px",
      },
    },
  },
  plugins: [],
}

