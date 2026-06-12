/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Blue/Indigo
        secondary: '#ffffff',
        accent: '#f97316', // Orange
        success: '#22c55e', // Green
      }
    },
  },
  plugins: [],
}
