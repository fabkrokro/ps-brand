/** @type {import('tailwindcss').Config} */
 export default {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        radiantRed: "#FE414D",
        white: "#ffffff",
        lightGray: "#EEEEEE",
        blue: "#079FFF",
        yellow: "#FFE63B",
        green: "#00E6C3",
        darkGray: "#B4B4B4",
        black: "#000000",
        uniperBlue: "#007b80"
      }
    },
  },
}