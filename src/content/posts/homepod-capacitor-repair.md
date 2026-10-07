---
title: I fixed a dying HomePod with four capacitors and a lot of nerves
description: A first-generation HomePod with a crackling "death fart" fault, a first-ever micro soldering job, and a fire extinguisher on standby. It plays chill jazz again.
pubDate: 2026-10-08
tags: [Repair, Soldering, HomePod]
draft: true
affiliate: false
---

My first-generation HomePod had developed the fault that everyone in the repair world calls the death fart. You turn it on, it makes a wet, crackling noise that sounds exactly like you would expect, and then it either cuts out or just keeps going. Apple stopped selling these years ago, so buying a replacement meant paying used prices for a speaker that might already be on the same path.

It turns out the cause is well known. A handful of tiny ceramic capacitors near the subwoofer connector go bad, and replacing them brings the speaker back. I had never done micro soldering in my life. This is how it went.

## The part that scared me

Before I touched anything I watched a pile of repair videos. Two did most of the work for me: [one on taking the HomePod apart](https://www.youtube.com/watch?v=-YZUv5ErDFw&t=2s) and [one on the capacitor fix itself](https://www.youtube.com/watch?v=FfGiuh_QH3M). [Dylan: confirm which is which, and give me the channel names so I can credit the creators.] Watching other people lift a capacitor off a board with a hot air gun makes it look boring, which is exactly the effect I needed.

The thing that surprised me was the size. I had pictured the usual barrel-shaped capacitors with legs. These are flat 1206 ceramic chips, about the size of a grain of rice, and they are held on by solder pads you can barely see. I only worked that out when I photographed the first one I removed. If you are following along, check what is actually on your board before you order parts.

## What I used

- A WEP 882D station with an iron and hot air in one unit. A certified station would have cost more than the repair saves, so I went with the cheaper one and was careful with it. I never left it running unattended and kept it on a heat-safe mat.
- Four replacement capacitors, 1206 size, 10µF, X7R, rated for at least 16V. [Dylan: confirm the exact part you ordered.]
- Flux, solder wick, 99% isopropyl alcohol and a pair of tweezers.
- Kapton tape to hold the corners of the board down, because hot air will push a light board around.
- A phone, to photograph every cap and its position before it came off. This is the single most useful habit in the whole job.

![A first-generation HomePod taken apart on a black repair mat, with the speaker driver rings, the boards, the screws and a precision bit kit laid out around it.](/images/homepod-teardown.jpg "The whole HomePod, laid out on the mat before any soldering. The mesh sleeve is the grey bag on the left.")

## Taking the old ones off

I had to pry the HomePod open first, which means working through the glued mesh without tearing it. After that, the old capacitors came off with hot air and tweezers. When the first one lifted clean, I felt invincible, which is about the most dangerous feeling you can have around a soldering iron.

I photographed the empty pads, cleaned them with wick and flux, and wiped the area with isopropyl alcohol before putting anything back.

![Three tiny rectangular ceramic capacitors sitting on a dark mat next to a ruler.](/images/homepod-old-caps.jpg "Old capacitors next to a ruler. Each one is about the size of a grain of rice.")

## Putting the new ones on

Soldering the new ones down was harder than the removal, and the nerves came right back. Ceramic chips crack if you heat them too long or too hard, and the pads can lift. So I kept each joint short and moved on.

Once the first two of the four were seated firmly, something clicked. The other two went down fine. When I was done they were sitting roughly parallel with no visible bridges between the pads. [Dylan: say whether you checked for shorts with a multimeter before powering up.]

[Photo: the finished joints under magnification. Suggested caption: "Four new caps. Not pretty, but flat and connected."]

## The first power-up

This is the part I took seriously. There is mains voltage in a HomePod, and I had just worked on its board. I assembled it only as far as I needed to test it, kept the power supply area covered, plugged it into a GFCI outlet, and had my partner stand by holding a fire extinguisher.

Nothing smoked. Nothing smelled. I got the Apple "duh dunnnnn" startup chime straight away, and I knew it worked before I had even put my tools down.

I then played music at a few different volumes, since a fault like this can hide at low volume, and let it warm up for a while before closing the case.

## Where it lives now

It sits on our dining room table and plays chill jazz while we eat dinners I cooked. That is a much better job than being e-waste.

![A space grey first-generation HomePod on a walnut table, fully reassembled.](/images/homepod-finished.jpg "Back together, back on the table, and no longer making that noise.")

## What it cost

The soldering and hot air station was $55, and it was the biggest purchase by far. I already had the repair mat, a screwdriver set and the other basic tools, so I did not need to buy those. [Dylan: add what the four capacitors, flux, solder wick and isopropyl alcohol cost, then the total.]

A new HomePod is $300 right now, and that is the newer model, not the first generation I was fixing. Even counting the station, I came in far below that. The station is also a one-time cost. I will use it again, and I have already started looking at what else I own that is broken.

## What I would tell you before you start

Photograph everything before you remove it. Check the part size on your own board before ordering anything. Tape the board down. Do not rush the first joint, and do not skip the test with a fire extinguisher nearby just because it feels dramatic.

Mostly, though, I found a new hobby. I did not expect that, and I am already looking at what else I have in a drawer that needs saving.
