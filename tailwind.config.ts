import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        "3xl": "1920px",
      },
      colors: {
        blue: {
          50: "#EEF8FE",
          100: "#D9EEFB",
          200: "#B7DEF7",
          300: "#85C8F0",
          400: "#4DAEE6",
          500: "#2693D6",
          600: "#1678B8",
          700: "#135F93",
          800: "#134F78",
          900: "#0F3552",
        },
        orange: {
          50: "#FFF5EB",
          100: "#FFE7CF",
          200: "#FFCD9E",
          300: "#FFAB63",
          400: "#FC8B33",
          500: "#F27414",
          600: "#D95E0A",
          700: "#B3480B",
          800: "#8F3A10",
          900: "#753111",
        },
        navy: "#0B2540",
        whatsapp: {
          DEFAULT: "#128C7E",
          dark: "#0E7367",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(11,37,64,.08)",
        "card-hover": "0 8px 28px rgba(11,37,64,.14)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "float-slow": "float-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
