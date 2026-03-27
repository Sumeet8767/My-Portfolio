/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#915eff',
        dark: '#050816',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.png')",
      }
    },
  },
  plugins: [],
}

