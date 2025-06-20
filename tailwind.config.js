/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#64748B',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    }
  },
  plugins: [],
} 