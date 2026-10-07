---
title: Why Dack Builds looks the way it does
description: A water tower, two windows, one light, and the contrast problem that nearly sank the logo. How this site got its look, its colors and its stack.
pubDate: 2026-10-07
tags: [Site, Design]
draft: false
featured: true
affiliate: false
---

Every smart home blog I looked at before starting this one looked the same. White page, stock photo of a hand on a phone, a cheerful gradient. I wanted this site to feel like a workshop notebook instead, so I spent real time on the look before I wrote a single build log.

Here is how it came together, including the mistakes.

## Starting from two sites I admire

I collected a pile of blogs I liked and kept coming back to two: Josh Comeau's site and History of Software. Neither one looks like a template. Both have a clear personality, careful type and a sense that a person made every choice. I did not want to copy either. I wanted to steal the attitude.

## The mark

The logo went through ten directions before I settled on one. Rubber ducks, bricks, a field catalog and a few others all got drawn, and most of them were too generic. What stuck was a building with one lit window.

It became my initial. The left window is a yellow D. The right window is a dark B, with no light on, because the B has not earned it yet. On top of the building sits a rooftop water tower, which gives it a skyline and keeps it from looking like a generic apartment block.

![The Dack Builds mark: a building with a rooftop water tower, a lit yellow D window and a dark B window.](/brand/logo-full-light.svg "The full mark. A lit D, a dark B, and a water tower on the roof.")

## When the logo stopped working

My first favorite version fell apart at small sizes. At favicon size you could not tell it was a building at all.

So I made two cuts. The Full mark is the version above, used at 72 pixels and larger. The Micro mark drops the water tower and the fine detail, keeps the building and the two windows, and is used below 72 pixels. The site picks the right one for whatever size it is drawing.

![The Micro mark: a simplified building with a lit D window and a dark B window.](/brand/logo-micro.svg "The Micro mark, for small sizes like the browser tab.")

## The contrast problem

My first palette put the yellow window on a pale steel wall. The contrast ratio was about 1.4 to 1, which is close to invisible. I darkened the wall to a slate blue-grey and the ratio went up to about 3.6 to 1. The yellow now reads as a light, because the wall behind it is dark enough to make it one.

The palette is a handful of colors, each named after something in a rack or a pond:

- Pond ink, `#10303A`, for the darkest surfaces and body text.
- Slate wall, `#4E6A72`, the wall of the building.
- Rack steel, `#9FB3B8`, and Tower steel, `#C4D3D6`, for the metal.
- Mist, `#EEF3F2`, the page background.
- Duck yellow, `#FFC629`, the lit window and the only really loud color.
- Beak orange, `#FF6A2B`, with a darker `#E04E12` on light backgrounds, for links and small accents.

## Type

Headlines use Bricolage Grotesque, which has a little more character than the usual sans. Body text uses Schibsted Grotesk, which is readable for long posts. Anything technical, like dates, labels and code, is set in IBM Plex Mono. All three fonts are bundled with the site, so nothing loads from a third-party server.

## Small things I am happy with

The light and dark theme switch is shaped like the D window, and I labeled it Lights. Photos in posts get numbered captions in the style of a field catalog, like Fig. 3, which suits a site about taking things apart. Wrapping is tuned so a heading never ends on a single orphaned word.

## What it runs on

The site is built with Astro and plain Markdown files, kept in a GitHub repository. Every time I push a change, Cloudflare builds it and puts it live at dackbuilds.com. There is no database and no plugin that needs updating. Writing a post means adding one file.

## What is next

The first real build logs are on the bench: a secondhand OptiPlex that runs my apartment, and a first-generation HomePod I brought back from the dead with four tiny capacitors. If you like this kind of thing, the RSS feed is the best way to find out when they land.
