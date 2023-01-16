/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        axiforma: ["'Axiforma'", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#505AD8",
          200: "#524FD5",
          300: "#413DD1",
        },
        secondary: "#FFF5F1",
        outline: "#E8E8F6",
        text: {
          primary: "#181B32",
          body: "#666680",
        },
      },
      dropShadow: {
        2: "-2px, 4px 45px rgba(0, 0, 0, 0.13);",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
