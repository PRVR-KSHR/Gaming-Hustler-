/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'primary': '#b68bdcb1',
        // 'secondary': '#2E4CFF',
        // 'primary': '#101820',
        'secondary': '#195190',
        'heading': '#fdd7ab',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'chakra-petch': ['Chakra Petch', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        patrick : ['Patrick Hand SC' , 'cursive'],
        'new-rocker': ['New Rocker', 'cursive'],
        'nova-mono': ['Nova Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}