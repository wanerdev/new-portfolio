import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";

// https://astro.build/config
/*export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});*/
const isProduction = process.env.NODE_ENV === 'production';

// Configuración del sitio y base dependiendo del entorno waner test
const siteUrl = isProduction ? 'https://wanerdev.github.io' : 'http://localhost:3000';
const basePath = isProduction ? '/mi-repo/' : '/';

export default defineConfig({
  site: siteUrl,
  base: basePath,
});
