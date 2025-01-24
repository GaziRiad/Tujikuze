/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-arizona)"],
        secondary: ["var(--font-standard)"],
      },
      colors: {
        primary: {
          800: "#111B13",
        },
        light: {
          600: "#BABABA",
          500: "#FBFBFB",
        },
        dark: {
          600: "#1A1A1A",
          500: "#252525",
          400: "#726f66",
        },
      },
    },
  },
  plugins: [],
};
