/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Karla"],
      },
      borderColor: {
        primary: "#303030",
      },
      colors: {
        text: "#fafafa",
        subtext: "#999999",
        link: {
          active: "#fcfcfc",
          nav: "#fcfcfc80",
          primary: "#ff781e",
        },
      },
      backgroundColor: {
        dark: "#0a0a0a",
        light: "#1a1a1a",
      },
      fill: {
        primary: "#ff781e",
      },
    },
  },
  plugins: [],
};
