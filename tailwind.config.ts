import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#faf9f5",
        panel: "#ffffff",
        sidebar: "#f7f7f4",
        ink: "#141413",
        muted: "#6b6b6b",
        line: "#e8e6dc",
        hoverbg: "#ebe9df",
        redbg: "#fdecea",
        redborder: "#f5c6c2",
        redink: "#8a2c24",
        bluebadge: "#dbeafe",
        blueink: "#1e40af",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;