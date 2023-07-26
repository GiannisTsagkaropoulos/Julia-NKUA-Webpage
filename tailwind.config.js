/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem'
      },
      colors: {
        'julia-blue': {
          light: '#4e64ae',
          dark: '#3e5294'
        },
        'julia-green': {
          light: '#399746',
          dark: '#2a7b35',
        },

        'julia-red': {
          light: '#c93c32',
          dark: '#8a2d2d'
        },
        'julia-purple': {
          light: '#9259a3',
          dark: '#6b4178',
        },
        'dark-mode': '#1f1f1f'
      },
    },
  },
  plugins: [],
}

