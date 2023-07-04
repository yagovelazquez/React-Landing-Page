/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title: '#676a6c',
        primary: '#1ab394',
        paragraph: '#aeaeae',
        darkPrimary: '#179d82',
        gray: '#f4f4f4',
        darkerGray: '#888888'
      }
    },
  },
  plugins: [],
}