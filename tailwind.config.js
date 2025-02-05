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
        dark: '#000',
      },
      animation: {
        'fade-in': 'fadeIn 0.9s ease-in-out',
      }
    },
  },
  plugins: [],
}

