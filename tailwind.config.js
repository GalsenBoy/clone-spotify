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
    },
    colors: {
      'black': '#121212',
      'white': '#f6f6f6',
      'gray-light' : '#242424',
      'gray':"#b3b3b3", //b3b3b3
      'dark' :'#000000',
      'indigo':"#6366F1",
      'purple':"#A855F7",
      'pink':"#EC4899",
      'blackIcon' : '#0A0A0A',
    },
  },
  plugins: [],
}

