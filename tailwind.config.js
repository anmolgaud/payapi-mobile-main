/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'background-primary' : '#EDF3F8',
        'background-secondary' : '#1B262F',
        'circle-primary' : '#D1DAE2',
        'circle-secondary' : '#1F2C38',
        'button-primary' : "#BA4270",
        'button-secondary' : '#DA6D97',
        'txt-color-1' : '#36536B',
      },

      fontFamily : {
        'DMserif' : "'DM Serif Display', serif",
        'PublicSans' : "'Public Sans', sans-serif",
      }
    },
  },
  plugins: [],
}