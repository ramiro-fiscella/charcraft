/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["work sans", "sans-serif"],
      serif: ["alegreya sc", "serif"],
      condensed: ["reddit sans condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
