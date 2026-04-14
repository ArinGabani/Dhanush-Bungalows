/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    fontFamily: {
      heading: ['Playfair Display', 'serif'],
      body: ['Inter', 'sans-serif'],
    },
    colors: {
      primary: '#0A0A0A',
      accent: '#d8a8aa',
      accentSoft: '#f3d6d8'
    }
  }
},
  plugins: [],
  
}