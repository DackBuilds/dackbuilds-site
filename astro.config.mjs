import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkFigures from './src/plugins/figures.mjs';

export default defineConfig({
  site: 'https://dackbuilds.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkFigures],
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
});
