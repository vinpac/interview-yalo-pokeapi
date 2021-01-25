const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/components/**/*.tsx',
      './src/assets/svg/*.svg',
      './src/pages/**/*.tsx',
    ],
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
    },
    extend: {
      colors: {
        gray: colors.coolGray,
        primary: colors.red,
        orange: colors.orange,
      },
    },
  },
}
