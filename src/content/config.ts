/**
 * Astro Content Collections — Zod schemas
 * Canon: work=teal, art=marigold, games=tomato, music=flamingo, writing=jade, about=lilac
 */

import { defineCollection, z } from 'astro:content';

// Shared link shape used across collections
const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
  kind: z.enum(['visit', 'github', 'demo']).optional(),
});

// Cover shape: section color token name + optional image path
const coverSchema = z.object({
  color: z.string(), // e.g. 'var(--c-work)'
  image: z.string().optional(),
});

// ── WORK ──────────────────────────────────────────────────────────────────────
const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),        // e.g. "2019–present"
    role: z.string(),
    blurb: z.string(),         // italic-friendly short line shown on card
    tags: z.array(z.string()),
    cover: coverSchema,
    links: z.array(linkSchema).optional().default([]),
    order: z.number(),         // lower = earlier in the grid
  }),
});

// ── ART ───────────────────────────────────────────────────────────────────────
const art = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string().optional(),
    count: z.string().optional(),     // e.g. "42 pieces"
    blurb: z.string(),
    tags: z.array(z.string()),
    cover: coverSchema,
    links: z.array(linkSchema).optional().default([]),
    order: z.number(),
    kind: z.enum(['project', 'gallery']).default('project'),
  }),
});

// ── GAMES ─────────────────────────────────────────────────────────────────────
const games = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string().optional(),
    count: z.string().optional(),
    blurb: z.string(),
    tags: z.array(z.string()),
    cover: coverSchema,
    links: z.array(linkSchema).optional().default([]),
    playUrl: z.string().url().optional(),
    order: z.number(),
  }),
});

// Track shape for music
const trackSchema = z.object({
  n: z.string(),            // "01", "02" …
  title: z.string(),
  duration: z.string().optional(),
});

// ── MUSIC ─────────────────────────────────────────────────────────────────────
// Single document collection — one record, one MD file
const music = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    label: z.string(),
    caption: z.string(),      // italic Newsreader sepia line below the deck
    tracks: z.array(trackSchema),
    soundcloudUrl: z.string().url().optional(),
  }),
});

export const collections = { work, art, games, music };
