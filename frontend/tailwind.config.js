/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
     colors: {
        customTeal: '#145465',   // Dark teal
        midTeal: '#1B7289',      // Mid teal
        lightGray: '#C4CDCF',    // Light gray
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}