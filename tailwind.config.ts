import type { Config } from "tailwindcss";

import colors from "./config.json";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        current: "currentColor",
        "light-background": colors.colors.light.background,
        "light-foreground": colors.colors.light.foreground,
        "light-yellow": colors.colors.light.yellow,
        "light-green": colors.colors.light.green,
        "light-gray": colors.colors.light.gray,
        "light-blue": colors.colors.light.blue,
        "light-red": colors.colors.light.red,
        "dark-background": colors.colors.dark.background,
        "dark-foreground": colors.colors.dark.foreground,
        "dark-yellow": colors.colors.dark.yellow,
        "dark-green": colors.colors.dark.green,
        "dark-gray": colors.colors.dark.gray,
        "dark-blue": colors.colors.dark.blue,
        "dark-red": colors.colors.dark.red,
      },
    },
  },
  plugins: [],
} satisfies Config;
