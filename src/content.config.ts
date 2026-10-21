import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const labels = z
  .array(
    z
      .string()
      .trim()
      .toLowerCase()
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Use letters, numbers, and single hyphens for tags and categories.",
      ),
  )
  .default([])
  .transform((values) => [...new Set(values)]);

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./blog" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: labels,
    categories: labels,
  }),
});

export const collections = { blog };
