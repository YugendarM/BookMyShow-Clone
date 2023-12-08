/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bookmyshow: 
            {
              btinnpk: '#ef4f5f',//
              navblue: '#333545',
              darkmodeblue: '#2b3149',
              bgGray: '#333333',
              textCCC: '#cccccc',
              bgdarkGray: '#1a1a1a',
              classicBg: '#EBEBEB',
              footerBg: '#313035',
              footerBg2: '#404043',
              900: '#0d0d0d',
            } 
      }
    },
  },
  plugins: [],
}