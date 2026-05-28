import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Dr. Antolín Losada Monardes'),
    category: z.string().default('General'),
    image: z.string().optional(),
    lang: z.enum(['es', 'en']).default('es'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
