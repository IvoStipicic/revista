/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        fondo: "url('./img/fondo.png')",
        fondo1: "url('./img/fondo1.png')",
      },
    },
  },
  plugins: [],
};
