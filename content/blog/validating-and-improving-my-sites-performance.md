---
title: Validating and improving my site's performance 
description:
date: 2026-02-14T15:09:11Z
tags:
   - posts
layout: layouts/post.njk
---

A few months back, [Nicolas Magand](https://thejollyteapot.com/2025/12/19/the-club-racer-treatment/) wrote about giving his site the "club racer treatment" — stripping it back to focus on what actually matters. For a blog like his, the driving experience is readability above all else, but he also wanted clean W3C validation and a perfect PageSpeed Insights score. He ended up with a clear priority order:

1. Driving experience / Readability
2. Performance / W3C validation & PageSpeed Insights scores

That framing stuck with me: performance in service of the reader, not performance as an end in itself.

Around the same time, I came across [James' Coffee Blog](https://jamesg.blog/2025/11/28/validate-everything), where James announced a handy tool he built called [Validate Everything](https://jamesg.blog/validate-everything). The concept is simple — paste in a URL and it generates links to a whole suite of validators. It's the kind of tool you didn't know you needed until you have it.

I decided to put this site to the test.

### What I Changed

Running through the validators surfaced two areas I wanted to improve:

**Inlined styles for performance.** [Moving styles inline](https://ldstephens.net/posts/why-i-inlined-my-css-in-11ty/) made for faster page loads and a simpler deployment process.

**Theme change for readability.** The previous theme had some contrast that weren't doing the reading experience any favors. Readability is the whole point, I switched from the dark theme to a simple light theme.

### The Results

After making those changes, the numbers came back clean:

**PageSpeed Insights — 100 across the board:**
- 100 Performance
- 100 Accessibility
- 100 Best Practices
- 100 SEO

**Carbon rating:** A+

**W3C HTML Validation:**
> Document checking completed. No errors or warnings to show.

The scores are great. More importantly, the changes make the site better to read and a little quicker to load. That’s the part I care about.

If you haven't tried James' Validate Everything tool yet, it's worth a few minutes with your own site. You might be surprised what turns up.
