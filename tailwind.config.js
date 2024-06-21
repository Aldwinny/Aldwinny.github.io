/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000012",
        "secondary": "#221d30",
        "footer": "rgb(11, 16, 38)",
        "text-primary": "#fff",
        "text-highlight": "#efd758",
        "text-secondary": "#979797",
        "highlight-color": "#c475df",
      },
      fontFamily: {
        "primary": "var(--primary-font)",
        "secondary": "var(--secondary-font)"
      }
    },
  },
  plugins: [],
}