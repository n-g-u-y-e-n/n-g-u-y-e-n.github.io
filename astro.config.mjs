import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  integrations: [mdx()],
  markdown: { shikiConfig: { theme: "github-dark-dimmed" } },
  server: { host: "127.0.0.1", port: 5173 },
});
