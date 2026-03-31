// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      // themes: {
      //   dark: "gruvbox-dark-soft",
      //   light: "github-light",
      // },
      wrap: true,
    }
  },
  integrations: [icon(), mdx()],
});