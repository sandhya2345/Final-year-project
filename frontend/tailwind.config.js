/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        customTeal: '#145465',   // Dark teal
        midTeal: '#1B7289',      // Mid teal
        lightGray: '#C4CDCF',    // Light gray
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a global font family
      },
    },
  },
  plugins: [],
}