/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comforta: ["Comfortaa"],
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
      boxShadow: {
        projectCardShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
        projectShadowPill: " 0px 0px 2px rgba(0, 0, 0, 0.25);",
      },
      screens: {
        xxs: "483px",
        xs: "576px",
      },
    },
    colors: {
      appBlue100: "#2E2E3E",
      appGray100: "#54504E",
      appGray200: "#22201F",
      appGray300: "#63636333",
      appGray400: "#D9D9D9",
      appYellow100: "#DC8700",
      appYellow200: "#EDB866",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      red: "red",
    },
  },
  plugins: [],
};
