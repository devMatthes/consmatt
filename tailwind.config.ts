import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,svelte,ts,tsx,js,jsx}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        "open-sans": ["Open Sans Condensed", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#606C38",
          text: "#1B1B1B",
          yellow: "#FEFAE0",
          orange: "#DDA15E",
          green: "#606C38",
          dark: "#1E1E1E",
          gray: "#7E7E7E",
          navy: "#001527",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
