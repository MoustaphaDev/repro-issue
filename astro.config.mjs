import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: 'public',
  publicDir: 'static',
  site: 'https://moustaphadev.github.io/repro-issue',
  base: '/repro-issue'
});
