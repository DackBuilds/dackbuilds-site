---
title: WaveForm
summary: A lighting animation engine that runs on your own network and talks to each brand of smart light directly, so fades and effects stay smooth.
status: building
kind: Home lab software
tags: [Lighting, Home Assistant]
order: 1
---

WaveForm is a small service that works out lighting animation frames itself and sends them straight to each light in its own language. Home Assistant is great at deciding what should happen. It is less great at running a fade across a dozen lights at once, because every command goes through an extra layer. WaveForm skips that layer for the animation part and leaves everything else to Home Assistant.

## Where it stands

I am building it as a weekend project on my own network first. It is not ready for anyone else's setup yet, and I would rather release something stable than something early. When it is ready, it will show up here with a download and a proper install guide. It may eventually ship as a Home Assistant add-on.

## Follow along

The build log posts will cover how it works and what broke along the way. The [RSS feed](/rss.xml) is the best way to hear when it is ready.
