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
          'url(https://cdnb.artstation.com/p/assets/images/images/048/799/125/4k/andreas-rocha-pinecastle01.jpg?1650974921)',
        about:
          'url(https://cdna.artstation.com/p/assets/images/images/059/516/332/4k/andreas-rocha-destination01.jpg?1676553487)',
        about2:
          'url(https://cdna.artstation.com/p/assets/images/images/053/147/044/large/pedro-kruger-envar-studio-05bw005t1rq-namicleric.jpg?1661521226)',
        otra: 'url(https://cdna.artstation.com/p/assets/images/images/074/840/804/large/shen-jia-highresscreenshot00187.jpg?1713115035)',
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
