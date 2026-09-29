import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://devcmg.gitlab.io/dagar/",
  //base: "/dagar",
  outDir: "public",
  publicDir: "static",

  integrations: [],
  vite: {
    ssr: {
      external: ["@popperjs/core"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Aquí puedes añadir opciones adicionales de SCSS si las necesitas
        },
      },
    },
  },
});
