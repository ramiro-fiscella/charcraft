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
        about:
          'url(https://cdnb.artstation.com/p/assets/images/images/077/383/065/large/grafit-studio-nexus-environment-31-08-logo.jpg?1719321349)',
        about2:
          'url(https://cdna.artstation.com/p/assets/images/images/053/147/044/large/pedro-kruger-envar-studio-05bw005t1rq-namicleric.jpg?1661521226)',
        otra: 'url(https://cdna.artstation.com/p/assets/images/images/074/840/804/large/shen-jia-highresscreenshot00187.jpg?1713115035)',
        aboutCreator:
          'url(https://cdnb.artstation.com/p/assets/images/images/010/619/767/large/grafit-studio-falling-wizard-logos.jpg?1614279308)',
        lastAbout:
          'url(https://cdnb.artstation.com/p/assets/images/images/029/621/391/large/denman-rooke-keeperoftheaccord-comp.jpg?1598131975)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'yellow-500': '#FAB005',
      },
    },
  },
  plugins: [],
};
