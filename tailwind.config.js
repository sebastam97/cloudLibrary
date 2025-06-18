import { heroui } from "@heroui/theme";
import { darkTheme, lightTheme } from "./components/theme/themeConfig/theme.ts";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: lightTheme.colors.primary,
          },
        },
        dark: {
          colors: {
            primary: darkTheme.colors.primary,
          },
        },
      },
    }),
  ],
};

module.exports = config;
