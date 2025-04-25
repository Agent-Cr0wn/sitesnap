/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this covers your components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Main blue
        secondary: '#10B981', // Emerald green for accents
        dark: '#1F2937', // Dark gray for text
        light: '#F9FAFB', // Light background
        accent: '#F59E0B', // Warm accent for highlights
      },
      spacing: {
        'section': '4rem', // Consistent section padding
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}