---
title: Why I moved from Netlify to Render 
description:
date: 2026-01-13T16:20:42Z
tags:
   - posts
layout: layouts/post.njk
---

I initially launched this site on [Netlify](https://www.netlify.com/), drawn in by their then-generous free plan for static sites. As a simple 11ty site just HTML, CSS, and an RSS feed it was a perfect fit for a while.

Later, I enabled Netlify Analytics, which automatically upgraded me to their Starter plan. Recently, I removed my credit card, assuming I'd revert to the original free plan I started on, since I no longer needed analytics. Instead, my account was migrated to Netlify's _new point-based free_ plan. Same site, same workflow, but completely different rules.

The breaking point wasn't bandwidth or web requests, but the build limits. The new plan charges 15 points per build. Given my fairly frequent posting schedule sometimes daily I typically trigger around 30 builds a month.

Here's the breakdown:

30 builds × 15 points = _450 points_

The free plan includes only _300_ points.

This meant simply publishing posts, before accounting for bandwidth or web requests, would push me over the limit. That was the deal-breaker.

Writing and publishing is the whole point of this site. I didn't want to batch posts, avoid making small fixes, or hesitate to deploy for fear of using up points. Ultimately, I left because of a pricing model that penalized frequent posting.

So, I moved the site to [Render](https://render.com). Render's static hosting is straightforward. Builds are builds, and bandwidth is bandwidth. I can publish freely, fix typos without a second thought, and completely forget about points.

Netlify remains a solid platform. However, for a small, personal, frequently updated static blog, it's no longer the ideal choice.