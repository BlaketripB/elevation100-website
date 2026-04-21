import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-black": "#0A0A0A",
        "brand-gold": "#C9A84C",
        "brand-white": "#FFFFFF",
        "brand-gray": "#F5F5F5",
        "brand-blueprint": "#0A2342",
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 0 1px #C9A84C, 0 10px 30px -10px rgba(201,168,76,0.35)",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
