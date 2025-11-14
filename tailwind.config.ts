import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,svelte,ts,tsx,js,jsx}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"]
      },
      colors: {
        brand: {
          primary: "#606C38",
          text: "#1B1B1B",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
