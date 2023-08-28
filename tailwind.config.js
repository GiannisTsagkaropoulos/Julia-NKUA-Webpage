/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      colors: {
        "julia-blue": {
          light: "#4e64ae",
          dark: "#3e5294",
        },
        "julia-green": {
          light: "#399746",
          dark: "#2a7b35",
        },
        "julia-red": {
          light: "#c93c32",
          dark: "#8a2d2d",
        },
        "julia-purple": {
          light: "#9259a3",
          dark: "#6b4178",
        },
        "dark-mode": "#1f1f1f",
      },
    },
  },
  plugins: [],
};
