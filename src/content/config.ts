// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};