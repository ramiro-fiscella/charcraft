/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  screens: {
    sm: "640px",
    // => @media (max-width: 639px) { ... }

    md: "768px",
    // => @media (max-width: 767px) { ... }

    lg: "1024px",
    // => @media (max-width: 1023px) { ... }

    xl: "1280px",
    // => @media (max-width: 1279px) { ... }

    "2xl": "1536px",
    // => @media (max-width: 1535px) { ... }
  },
  plugins: [],
};
