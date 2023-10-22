/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      greenBgOne: "#EEF2F1",
      green: "#BFCFCB",
      white: "#FFFFFF",
      greenBg: "#EFF3F2",
      greenTextDark: '#709388',
    },
  },
  plugins: [],
};
