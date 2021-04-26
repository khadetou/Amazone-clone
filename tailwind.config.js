const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
          height: "13px",
          width: "12px",
          backgroundColor:" rgb(17,24,39)",
          position: "absolute",
          top: "1px",
          right: "12px",
          zIndex: "10"
        },
        ".right-13":{
          right: "49px"
        }
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
}
