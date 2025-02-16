/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './pages/**/*.{vue,js,ts}', // Include your page components
      './components/**/*.{vue,js,ts}', // Include your reusable components
      './layouts/**/*.{vue,js,ts}', // Include layouts
      './app.vue', // Include app.vue (if used)
    ],
    theme: {
      extend: {},
    },
    theme: {
      extend: {
        fontFamily: {
            sans: ['IBM Plex Sans'], // Fallback to sans-serif if IBM Plex Sans is unavailable
            serif: ['IBM Plex Serif'], // Fallback to serif if IBM Plex Serif is unavailable
            mono: ['IBM Plex Mono'], // Fallback to mono if IBM Plex Mono is unavailable
        },
        colors: {
          'ucsd-navy': '#182B49',
          'ucsd-blue': '#00629B',
          'ucsd-yellow': '#FFCD00',
          'ucsd-gold': '#C69214',
        },
      },

    },
    // plugins: [require('@tailwindcss/typography')],
  }
  