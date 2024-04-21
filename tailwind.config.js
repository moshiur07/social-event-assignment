/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: 'Kaushan Script, cursive', // Adds a new `font-display` class
        regular: ' Poppins, sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
}

