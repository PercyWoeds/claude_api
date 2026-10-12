import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fafaf7",
        panel: "#ffffff",
        sidebar: "#f7f7f4",
        ink: "#1f1f1f",
        muted: "#6b7280",
        line: "#e5e5e2",
        hoverbg: "#ececea",
        redbg: "#fdecea",
        redborder: "#f5c6c2",
        redink: "#8a2c24",
        bluebadge: "#dbeafe",
        blueink: "#1e40af",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["ui-serif", "Georgia", "Cambria", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;