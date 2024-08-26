/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blueColor:"#1E77ED",
        darkCharcol:"#333333",
        grayColor:"#DADADA",
        whiteColor:"#FDFDFD",
        blackColor:"#0D0E12"
      },
    },
  },
  plugins: [],
};
