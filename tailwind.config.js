/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/preline/preline.js',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('tailwindcss-animated'),
  ],
}

