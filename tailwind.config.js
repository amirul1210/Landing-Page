/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      flexGrow: {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        '11': 11,
        '12': 12
      }
    },
  },
  plugins: [
    function ({ addVariant }){
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}


