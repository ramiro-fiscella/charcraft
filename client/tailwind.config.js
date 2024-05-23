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
          'url(https://cdnb.artstation.com/p/assets/images/images/010/629/620/large/ryan-richmond-planets.jpg?1525397919)',
        about:
          'url(https://cdna.artstation.com/p/assets/images/images/001/215/892/large/raphael-lubke-crystal-lake2-2-copyright2.jpg?1443930020)',
        aboutCreator:
          'url(https://cdnb.artstation.com/p/assets/images/images/044/132/745/large/efren-alpizar-cordero-planeamiento.jpg?1639169107)',
      },
    },
  },
  plugins: [],
};
