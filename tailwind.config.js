/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b3c49",
        secondary: "#2fa3b0",
        tertiary: "#13d3f3",
        barre: "#b33951",
        background: "#f2f8f0",
        gradient1: "#1b9aaa",
        gradient2: "#f2f8f0",
        gradient3: "#210124",
      },
      fontFamily: {
        first: ["Exo"],
        second: ["Yantramanav"],
        third: ["Ubuntu"],
      },
      maxWidth: {
        maxwidth: "366px",
      },
    },
  },
  plugins: [],
};
