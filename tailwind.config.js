// /** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Display', ...defaultTheme.fontFamily.sans],
        text: ['Text', ...defaultTheme.fontFamily.sans],
        title: ['Title', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'background-color': '#F5F5F5',
        red: '#B92032',
        germain: '#FAFAFA',
        gradientStart: '#B92032',
        gradientFinish: '#C37BFD',
        'gradient-text': '#D32D42',
        muted: '#FAFAFA',
        'light-black': '#303030',
        'navbar-bg': 'rgb(251,248,254)',
      },
    },
  },
  plugins: [],
};
