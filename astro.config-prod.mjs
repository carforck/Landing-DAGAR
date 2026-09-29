import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://dagarsoluciones.com.co",
  // pasar la carpeta static a public para ponerlo en producción
  //base: "/dagar",
  // Elimina la línea base ya que usarás un dominio raíz
  outDir: "dist", // Cambiado de 'public' a 'dist' para evitar conflictos
  publicDir: "public", // Cambiado de 'static' a 'public' que es el estándar de Astro

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
