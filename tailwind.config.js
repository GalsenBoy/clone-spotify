/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '49': '12.5rem',
      },
      fontFamily: {
        circular: ['"Circular"', 'sans-serif'],
      },
    },
    colors: {
      'black': '#121212',
      'white': '#f6f6f6',
      'gray-light' : '#242424',
      'dark' :'#000000',
      'indigo':"#6366F1",
      'purple':"#A855F7",
      'pink':"#EC4899"
    },
  },
  plugins: [],
}

