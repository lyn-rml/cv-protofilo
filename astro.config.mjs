// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// GitHub Pages project site: https://lyn-rml.github.io/cv-protofilo/
// Local dev uses base "/" ; CI sets BASE_PATH=/cv-protofilo/
const githubPagesBase = process.env.BASE_PATH ?? "/";

// https://astro.build/config
export default defineConfig({
  site: "https://lyn-rml.github.io",
  base: githubPagesBase,
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
