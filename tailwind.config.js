/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [/^bg-/, /^text-/],
  theme: {
    extend: {},
  },
  plugins: [],
};
