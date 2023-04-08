/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comforta: ["Comfortaa"],
        poppins: ["Poppins"],
        roboto: ["Roboto"],
        comfort: ["Comfortaa"],
        custom: ["Poppins"],
        reem: ["Reem Kufi"],
        robot: ["Roboto"],
      },
      fontWeight: {
        "weight-300": "300",
        "weight-400": "400",
        "weight-700": "700",
      },
      lineHeight: {
        "lineh-54": "54px",
        "lineh-23": "23.4px",
      },
      fontSize: {
        "size-48": "48px",
        "size-72": "72px",
        "size-20": "20px",
        "size-18": "18px",
      },
      boxShadow: {
        projectCardShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
        projectShadowPill: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        jobsCardShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        sponsorsCardShadow:
          "0px 1.52358px 23.6156px -3.80896px rgba(38, 40, 46, 0.25)",
        eventCardShadow: "0px 0px 16px rgba(84, 80, 78, 0.25)",
      },
      letterSpacing: {
        custom1: "0.10000000149011612px",
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
      appGray500: "#1d1d21",
      appGray600: "#24211F",
      appGray700: "#475064",
      appGray800: "#636363",
      appGray900: "#160E00",
      appYellow100: "#DC8700",
      appYellow200: "#EDB866",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      red: "red",
      darkbtn: "#DC8700",
    },
  },
  plugins: [],
};
