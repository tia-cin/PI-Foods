/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
