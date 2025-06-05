/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0c0c0c",
        green: "00ff00",
        orange: "FF6F00",
        accent: "#1f1f1f",
        muted: "#8f8f8f",
      }
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Orbitron", "sans-serif"],
      }
    },
  },
  plugins: [],
};

export default config;
