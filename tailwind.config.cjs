/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#0F2C33', // Replace with your new primary color
        secondary: '#EFA00F', // Replace with your new secondary color
        tertiary: "#2E9CA0",     // Replace old tertiary color
        "black-100": "#533946",  // Replace old black-100 color
        "black-200": "#21616A",   // Replace old black-200 color
        "white-100": "#EFA00F",  // Replace old white-100 color
      },
      boxShadow: {
        card: "0px 35px 120px -15px #2E9CA0", // Adjust if needed
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
