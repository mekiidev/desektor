import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(48, 48, 48)",
        primary: "rgb(48, 48, 48)",
        text: "#B6BBC4",
        heading: "#ffffff",
      },
      keyframes: {
        rotateIn: {
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        rotateInHalf: {
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(-45deg)" },
        },
        infinityScrollFirst:{
          "0%" :{ transform: "translateX(0%)" },
          "100%" :{ transform: "translateX(100%)" },
        },
        infinityScrollSecond:{
          "0%" :{ transform: "translateX(-100%)" },
          "100%" :{ transform: "translateX(0%)" },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 1))' },
          '50%': { filter: 'drop-shadow(0px 0px 23px rgba(255, 255, 255, 1))' },
          '100%': { filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 1))' },
        },
      },
      animation: {
        "rotate-in": "rotateIn 1s ease-out forwards",
        "rotate-in-half": "rotateInHalf 1s ease-out forwards",
        "infinity-scroll-first":"infinityScrollFirst 10s linear infinite",
        "infinity-scroll-second":"infinityScrollSecond 10s linear infinite",
        "glow": 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
