/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkMode1: "#0A0A0A",
        darkMode2: "#16181E",
        lightMode1: "#FFFFFF",
        lightMode2: "#FAFBFC",
        blueColor: "#1E77ED",
        darkCharcol: "#333333",
        grayColor: "#DADADA",
        whiteColor: "#FDFDFD",
        blackColor: "#0D0E12",
      },
    },
  },
  plugins: [],
};
