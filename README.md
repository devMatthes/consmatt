# Consmatt Digital Studio

Modern web presence for the Consmatt Digital Studio agency, built with **Astro 5**, **Svelte 5**, and **Tailwind CSS**. The project ships a polished marketing site with dedicated pages for services, portfolio, and contact, plus reusable UI components and motion-ready styling.

## ✨ Features

- Astro + Svelte architecture with client-side hydration only where needed
- Tailwind utility styling, dark UI theme, and reusable layout primitives
- Home, Services, Portfolio, and Contact pages with agency-focused content
- Interactive navigation and contact form with optimistic submission state
- Responsive design targeting modern desktop and mobile breakpoints

## 🗂️ Project Structure

```text
/
├── public/                    # Static assets (favicons, social images, etc.)
├── src/
│   ├── components/            # Reusable Svelte UI components
│   ├── layouts/               # Shared page layouts
│   ├── pages/                 # Astro route files (home, services, portfolio, contact)
│   └── styles/                # Global Tailwind entrypoint and custom utilities
├── astro.config.mjs           # Astro configuration with Svelte & Tailwind integrations
├── package.json               # Scripts and dependencies
└── tsconfig.json              # TypeScript config for the project
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit <http://localhost:4321> to explore the site in development. Hot-module reloading is enabled out of the box.

## 📦 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Access additional Astro CLI utilities |

## 🛠️ Customization Notes

- Update copy or add new sections by editing the Svelte components in `src/components/`.
- Tailwind tokens and custom utilities live in `src/styles/global.css`.
- Navigation links are defined inside `src/components/Navigation.svelte`.
- The contact form currently simulates submission; connect it to your preferred API or service when ready.

## � License

This project is provided as a starter for Consmatt Digital Studio. Adapt freely for internal or client work.
