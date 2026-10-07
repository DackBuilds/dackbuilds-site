# Dack Builds

Smart home and homelab build logs. Astro, Markdown, deployed on Cloudflare Pages.

## Write a post

Add a Markdown file to `src/content/posts/`. Front matter:

```yaml
---
title: Your title
description: One or two sentences, used for the lede, search and link previews.
pubDate: 2026-10-07
tags: [Home Assistant, Intercom]
draft: false        # drafts show in dev and never ship
featured: false     # the featured build sits at the top of the home page
affiliate: false    # true adds the disclosure box to the top of the post
---
```

A photo with a title becomes a numbered figure with a catalog caption:

```md
![Alt text for screen readers](/images/panel.jpg "Caption text goes here")
```

Put images in `public/images/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321, shows drafts
npm run build    # outputs dist/, drafts excluded
```

## Deploy

Cloudflare Pages, connected to the GitHub repo. Build command `npm run build`, output directory `dist`.
Custom domain `dackbuilds.com`, with `www` redirecting to the apex.

## Brand

Logos and icons are in `public/brand/`, colors and type are in `src/styles/global.css`.
Use the Full mark at 72 px and up and the Micro mark below that.
