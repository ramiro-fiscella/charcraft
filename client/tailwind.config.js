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
          'url(https://cdnb.artstation.com/p/assets/images/images/060/771/131/4k/andreas-rocha-cronicas-de-enigma-os-inuteis-00.jpg?1679304867)',
        about2:
          'url(https://cdnb.artstation.com/p/assets/images/images/002/341/477/large/eric-braddock-004-collapsedpath.jpg?1460499571)',
        aboutCreator:
          'url(https://cdnb.artstation.com/p/assets/images/images/044/132/745/large/efren-alpizar-cordero-planeamiento.jpg?1639169107)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
