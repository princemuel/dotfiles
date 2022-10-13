const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      pill: '100vmax',
    },

    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      neutral: {
        100: '#ffffff',
        900: '#000000',
      },
      primary: {
        100: '#5fb4a2',
        200: '#203a4c',
        300: '#33323d',
      },
      accent: {
        100: '#fafafa',
        200: '#eaeaeb',
        300: '#f43030',
      },
    },

    fontFamily: {
      serif: ['Ibarra Real Nova', ...defaultTheme.fontFamily.serif],
      sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
    },

    fontSize: {
      100: '0.8rem',
      200: '1rem',
      300: '1.2rem',
      400: '1.5rem',
      500: '1.6rem',
      600: '2.4rem',
      700: '3.2rem', //
      800: '4rem',
      900: '5rem',
    },

    letterSpacing: {
      ...defaultTheme.letterSpacing,
      tightest: '-0.45px',
      tighter: ' -0.36px',
      tight: ' -0.29px',
      widest: '2px',
    },

    lineHeight: {
      100: '1.175rem',
      200: '1.41rem',
      300: '1.8rem',
      400: '1.9rem',
      500: '3rem',
      600: '3.6rem',
      700: '4.2rem',
      800: '5rem',
    },

    screens: {
      xs: '30em', // => @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },

    extend: {
      screens: {
        sm: '40em', // => @media (min-width: 640px) { ... }
        md: '48em', // => @media (min-width: 768px) { ... }
        lg: '64em', // => @media (min-width: 1024px) { ... }
        xl: '80em', // => @media (min-width: 1280px) { ... }
        '2xl': '96em', // => @media (min-width: 1536px) { ... }
      },

      gridTemplateColumns: {
        // arbitrary values
        'fill-16': 'repeat(auto-fill, minmax(4rem, 1fr))',
        'fill-20': 'repeat(auto-fill, minmax(5rem, 1fr))',
        'fit-big': 'repeat(auto-fit, minmax(25rem, 1fr))',
        // etc.
      },
    },
  },
  plugins: [
    // plugin(function ({ addUtilities, theme }) {
    //   addUtilities({
    //     '.btn': {
    //       '--flow-space': '<value>',
    //     },
    //   });
    // }),
  ],
};
