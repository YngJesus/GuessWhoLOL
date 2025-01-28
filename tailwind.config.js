/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 10"', "sans-serif"],
        jersey25: ['"Jersey 25"', "sans-serif"],
        jersey20: ['"Jersey 20"'],
      },
      colors: {
        burgundy: {
          300: "#bd7f8c",
          400: "#a65d71",
          500: "#8f3b55",
          600: "#78193a",
        },
      },
    },
  },
  plugins: [],
};
