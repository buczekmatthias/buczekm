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
          primary: "#ff781e",
        },
      },
      backgroundColor: {
        dark: "#181818",
        light: "#1F1F1F",
      },
      fill: {
        primary: "#FAFAFA",
      },
      screens: {
        project: "576px",
      },
      height: {
        screen: ["100vh", "100dvh"],
        modal: ["90vh", "90dvh"],
      },
    },
  },
  plugins: [],
};
