/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#1E1B2E',
        'dark-blue': '#0F0F17',
        'accent-purple': '#6B4EFF',
        'light-purple': '#9D8FFF',
        'error': '#CF6679',
        'success': '#4CAF50',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'stars-pattern': "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'rpg-pattern': "url('https://images.pexels.com/photos/7130563/pexels-photo-7130563.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }
    },
  },
  plugins: [],
};