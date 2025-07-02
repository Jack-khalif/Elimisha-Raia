/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#008000', // Kenyan Green
          red: '#B81D25',   // Kenyan Red (a deeper shade)
          black: '#000000', // Kenyan Black
        },
        accent: {
          yellow: '#FFC107', // A vibrant, hopeful yellow
        },
        neutral: {
          100: '#F3F4F6', // Light gray for backgrounds
          300: '#D1D5DB', // Light gray for borders
          500: '#6B7280', // Medium gray for text
          700: '#374151', // Dark gray for headings
          900: '#111827', // Very dark gray
        },
        feedback: {
          success: '#10B981', // Green for success
          error: '#EF4444',   // Red for errors
          warning: '#F59E0B', // Amber for warnings
        }
      },
    },
  },
  plugins: [],
}