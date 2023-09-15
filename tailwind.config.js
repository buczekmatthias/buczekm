/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fafafa",
        primary: "#ff781e",
      },
      backgroundColor: {
        dark: "#12131c",
        lightDark: "#191b2780",
        primary: "#ff781e61",
      },
    },
  },
  plugins: [],
};
