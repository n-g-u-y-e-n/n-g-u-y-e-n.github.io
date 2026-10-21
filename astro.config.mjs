import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "static",
  outDir: "./docs",
  trailingSlash: "always",
  integrations: [mdx()],
  markdown: { shikiConfig: { themes: { light: "github-light", dark: "github-dark" } } },
  server: { host: "127.0.0.1", port: 5173 },
});
