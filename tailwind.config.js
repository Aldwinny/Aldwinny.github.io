/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "themic-primary": "var(--bg-color)",
        "themic-secondary": "var(--bg-color-2)",
        "themic-footer": "var(--bg-color-footer)",
        "themic-txt-primary": "var(--primary-text)",
        "themic-txt-highlight": "var(--primary-colored-text)",
        "themic-txt-secondary": "var(--secondary-text)",
        "themic-highlight-color": "var(--highlight-color)",
        "themic-grad-tomato": "var(--gradient-tomato)",
        "themic-grad-purple": "var(--gradient-purple)",
        "themic-grad-purple-2": "var(--gradient-purple-2)",
        "themic-grad-magenta": "var(--gradient-magenta)"
      },
      fontFamily: {
        "custom-primary": "var(--primary-font)",
        "custom-secondary": "var(--secondary-font)"
      }
    },
  },
  plugins: [],
}