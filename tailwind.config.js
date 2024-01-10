/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        refPurple: '#533990',
        gray1: '#393857',
        gray2: '#30304C',
        violet1:'#A570CC',
        violet2:'#6E51AD',
        pink1:'#EAEFF2'
      },
    },
  },
  plugins: [],
};
