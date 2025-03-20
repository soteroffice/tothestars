/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        // primary: "hsla(350, 100%, 50%, 1)",
        primary: {
          100: "hsla(358, 97%, 91%, 1)",
          200: "hsla(358, 97%, 81%, 1)",
          300: "hsla(358, 97%, 71%, 1)",
          400: "hsla(358, 97%, 61%, 1)",
          // 450: "hsla(358, 97%, 56%, 1)",
          500: "hsla(358, 97%, 51%, 1)",
          600: "hsla(358, 97%, 41%, 1)",
          700: "hsla(358, 97%, 31%, 1)",
          800: "hsla(358, 97%, 21%, 1)",
          900: "hsla(358, 97%, 11%, 1)",
        },
        contrast: {
          50: "rgb(250 250 250)",
          100: "rgb(244 244 245)",
          200: "rgb(228 228 231)",
          300: "rgb(212 212 216)",
          400: "rgb(161 161 170)",
          500: "rgb(113 113 122)",
          600: "rgb(82 82 91)",
          700: "rgb(63 63 70)",
          800: "rgb(39 39 42)",
          900: "rgb(24 24 27)",
          950: "rgb(9 9 11)",
        },
      },
    },
  },
  plugins: [],
};
