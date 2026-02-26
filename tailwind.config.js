/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Lexend Mega"', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
      },
      colors: {
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        pink: {
          400: '#ff6b9d',
        },
      },
      boxShadow: {
        neu: '4px 4px 0px #0a0a0a',
        'neu-lg': '6px 6px 0px #0a0a0a',
        'neu-dark': '4px 4px 0px #f0f0f0',
      },
      animation: {
        float: 'floatSlow 4s ease-in-out infinite',
        twinkle: 'twinkle 2s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};