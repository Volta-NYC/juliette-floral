import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          text: "#375241",
          peach: "#ffcab3",
          orange: "#e28664",
          olive: "#808b5f",
          pink: "#ce6c6c",
        },
      },
      fontFamily: {
        body: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-ovo)", "serif"],
      },
    },
  },
  plugins: [],
}
export default config
