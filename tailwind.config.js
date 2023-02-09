/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      '2xl': '702px',
      '4xl': '1200px',
    },
    extend: {
      screens: {
        'sm': '490px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
  darkMode: 'class',
  // important: true,
}
