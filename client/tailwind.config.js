/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        700: "700px",
        1000: "1000px",
      },
      height: {
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
