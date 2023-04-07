/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
      // ## Colors
      colors: {
        // ### Primary
        clMintGreen: "hsl(127, 100%, 82%)",
        clWhite: "hsl(0, 0, 100%)",
        // ### Neutral
        clCinder: "	hsl(252, 22%, 5%)",
        clBalticSea: "hsl(248, 10%, 15%)",
        clBalticSea2: "hsl(248, 15%, 11%)",
        clAbbey: "hsl(248, 5%, 29%)",
      },
    },
  },
  plugins: [],
}
