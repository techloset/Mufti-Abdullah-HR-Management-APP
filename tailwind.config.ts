import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      black: "#131313",
      primary: "#E25319",
      white: "white",
      balance: "#A2A1A8",
      secondry: "#A2A1A833",
      danger: "#A2A1A80D",
      lightGreeen: "#3FC28A1A",
      lightRed: "#F45B691A",
      Red: "#F45B69",
      green: "#3FC28A",
      lightWhite: "#A2A1A8",
      transparent: "transparent",
      lightOrange: "#E253191A",
    },
  },

  plugins: [],
};
export default config;
