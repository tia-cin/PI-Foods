/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#155E63",
        "neutral-green": "#76B39D",
        "light-yellow": "#F9F8EB",
        "light-gray": "#EAE7E7",
        white: "#f9f9f9",
      },
      width: {
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
