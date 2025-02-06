import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#7F56D9",
          "50": "#f5f4fe",
          "100": "#eeecfb",
          "200": "#dedbf9",
          "300": "#c6bef4",
          "400": "#a998ed",
          "500": "#8b6ee4",
          "600": "#7f56d9",
          "700": "#6a3dc4",
          "800": "#5933a4",
          "900": "#4a2b87",
          "950": "#2d1a5b",
        },
        warning: {
          DEFAULT: "#fdb022",
          "50": "#fffaeb",
          "100": "#ffefc6",
          "200": "#fedf89",
          "300": "#fec74b",
          "400": "#fdb022",
          "500": "#f78e09",
          "600": "#db6704",
          "700": "#b64607",
          "800": "#93360d",
          "900": "#792d0e",
          "950": "#461502",
        },
      },
      padding: {
        default: "var(--padding)",
        md: "var(--padding-md)",
        lg: "var(--padding-lg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
