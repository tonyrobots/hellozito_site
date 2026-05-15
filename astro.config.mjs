import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hellozito.com',
  integrations: [
    tailwind({
      // Use our own global.css instead of Astro's injected base styles
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
  ],
});
