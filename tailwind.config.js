/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#121212',
      'white': '#f6f6f6',
      'gray' : '#242424'
    },
  },
  plugins: [],
}

