import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The "blog" collection. Every .md file you add to src/content/blog/
// automatically becomes a published post — no code changes needed.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
