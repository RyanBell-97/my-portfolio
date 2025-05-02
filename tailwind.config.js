/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        'secondary-light': '#F8F5F2',
        'secondary-dark': '#1a1a1a',
        // original structure for backward compatibility
        secondary: {
          light: '#F8F5F2',
          dark: '#1a1a1a'
        }
      },
    },
  },
  plugins: [],
}