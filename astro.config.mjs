import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
// import netlify from "@astrojs/netlify";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  integrations: [preact(), tailwind(), compress()],
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // adapter: netlify()
});