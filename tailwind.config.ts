import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ap-bg":     "#0b0b18",
        "ap-bg2":    "#0f0f1f",
        "ap-card":   "#141428",
        "ap-card2":  "#1a1a35",
        "ap-blue":   "#4a7cf7",
        "ap-green":  "#22c55e",
        "ap-orange": "#f97316",
        "ap-cyan":   "#22d3ee",
        "ap-yellow": "#eab308",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
