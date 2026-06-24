/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bark: "#1C1410",
        parchment: "#FAF6EE",
        clay: "#B8472E",
        forest: "#1F5C4F",
        gold: "#D4A24C",
        umber: "#3D2B1F",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

