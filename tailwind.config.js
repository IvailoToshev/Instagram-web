module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '26': '6.5rem',
        '76': '19rem',
        '77': '316px',
        '86': '350px',
        '99': '25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')]
}
