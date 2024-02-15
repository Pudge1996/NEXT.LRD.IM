/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'display': ['Inter', 'ui-sans-serif',' system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    maxWidth: {
      '2xl': '702px',
      '4xl': '1200px',
    },
    extend: {
      screens: {
        'sm': '490px',
      },
      backgroundImage: {
        'white-b': 'linear-gradient(to bottom, transparent, white)',
        'black-b': 'linear-gradient(to bottom, transparent, black)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
  darkMode: 'class',
  // important: true,
}
