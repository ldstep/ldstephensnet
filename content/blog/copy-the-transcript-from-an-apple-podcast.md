---
title: Copy the transcript from an Apple Podcast
description:
date: 2025-05-10T15:27:51Z
tags:
layout: layouts/post.njk
---

The other day, I wanted to quote from a podcast in [blog post](https://ldstephens.net/blog/quoting-scott-galloway-pivot-podcast/). If you've ever tried to copy a snippet from a podcast transcript in the Apple Podcasts app, you know it's limited to around 200 words. What I wanted to copy was more than 200 words. Researching how I could copy more than 200, I stumbled upon a workaround called the [Apple Podcast Transcript Viewer](https://alexbeals.com/projects/podcasts/) created by Alex Beals. It's a lightweight web tool that lets you pull the full transcript from the Apple Podcasts app on your Mac.

The process is surprisingly simple:

1. Open the transcript for the episode you want in the Apple Podcasts app.
2. Go to `~/Library/Group Containers/243LU875E5.groups.com.apple.podcasts` in Finder.
3. Drag and drop all the contents of that folder into the Transcript Viewer at [Alex's site](https://alexbeals.com/projects/podcasts/).

According to Alex, everything happens locally in your browser, no uploads, no privacy concerns. It also grabs metadata like the episode title and author by reading the app’s local SQLite database. It’s a tool worth bookmarking if you ever need full transcripts from Apple Podcasts without the hassle.