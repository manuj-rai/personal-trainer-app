module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@heroicons/angular/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        secondary: '#0a0a0a',
        dark: '#171717',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      }
    },
  },
  plugins: [],
}

