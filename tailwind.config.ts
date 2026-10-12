import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f5f4ef",
        ink: "#1a1a1a",
        muted: "#6b6b6b",
        line: "#e6e4dc",
        accent: "#d97757",
      },
    },
  },
  plugins: [],
};
export default config;
