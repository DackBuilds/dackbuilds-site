import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts show up in dev, never in a production build.
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    // Shows the affiliate disclosure at the top of the post.
    affiliate: z.boolean().default(false),
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // idea: not started. building: in progress, not downloadable. available: ready to get.
    status: z.enum(['idea', 'building', 'available']).default('building'),
    kind: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(100),
    draft: z.boolean().default(false),
    // For available projects. downloadUrl is a free download; buyUrl is a checkout link (Gumroad, Stripe, etc).
    downloadUrl: z.string().optional(),
    buyUrl: z.string().optional(),
    price: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

export const collections = { posts, projects };
