/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dblue': '#06425b',
        'sblue': '#1fd9ec',
        'cblue': '#197ea5',
        'swhite': '#d1e5ee',
        'mdblue': '#145f7d',
      },
    },
  },
  plugins: [require("daisyui")],
}

