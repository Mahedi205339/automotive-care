/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Corinthia": [ "Corinthia", 'cursive'],
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
}

