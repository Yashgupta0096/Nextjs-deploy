/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all your page files
    "./components/**/*.{js,ts,jsx,tsx}", // Include all your component files
    "./src/**/*.{js,ts,jsx,tsx}", // Include src directory if you're using it
  ],
  theme: {
    extend: {
      colors: {
        border: "#d1d5db", // Example border color
        background: "#ffffff", // Example background color
        foreground: "#1f2937", // Example text color
      },
    },
  },
  plugins: [],
};
