/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['work sans', 'sans-serif'],
      serif: ['alegreya sc', 'serif'],
      condensed: ['reddit sans condensed', 'sans-serif'],
    },
    fontSize: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      backgroundImage: {
        parallax:
          'url(https://cdnb.artstation.com/p/assets/images/images/006/036/033/original/andrii-shafetov-ancient-ruins-fx.gif?1497372245)',
      },
    },
  },
  plugins: [],
};
