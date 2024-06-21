/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2FACD6",
        primaryblue: '#3572EF',
        secondary: "#80CAEE",
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}