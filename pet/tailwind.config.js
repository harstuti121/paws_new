/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}", // Include all your React files
    "./src/components/Navbar.jsx",
    "./src/components/Hero.jsx",
    "./src/components/Services.jsx",
    "./src/components/Product.jsx",
    "./src/components/Section.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

