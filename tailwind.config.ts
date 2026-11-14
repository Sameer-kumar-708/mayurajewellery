import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          ivory: "#FAF8F3",
          beige: "#F0EBE2",
          gold: "#B99A5B",
          goldLight: "#D6B878",
          goldDark: "#947840",
          charcoal: "#292720",
          charcoalDark: "#1F1E19",
          muted: "#77746D",
          border: "#E9E3D8",
          borderLight: "#F2EDE4",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        widestLuxury: "0.25em",
        extraWide: "0.18em",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(41, 39, 32, 0.05)",
        card: "0 10px 30px -4px rgba(41, 39, 32, 0.07)",
        dropdown: "0 20px 40px -4px rgba(41, 39, 32, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

