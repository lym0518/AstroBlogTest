import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://lym0518.cn',
  integrations: [mdx(), sitemap(), preact()]
});