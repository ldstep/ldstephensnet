---
title: How I finally fixed my broken Render redirects
description:
date: 2026-01-19T12:43:44Z
tags:
   - posts
layout: layouts/post.njk
---

This morning I discovered my redirects weren't working on Render. When I migrated from Netlify a few weeks ago, I had AI (ChatGPT or Gemini, can't remember which) handle the redirect conversion. It generated a `render.yaml` file.

I spent two hours this morning trying to fix it with both Gemini and ChatGPT. They suggested different syntax variations, but nothing worked. I was getting pretty frustrated.

As a last resort, I tried Claude. I shared my `netlify.toml` contents and asked it to migrate the redirects to Render.

Claude's response:

> Based on the Render documentation, here's how to convert your Netlify redirects to Render's format. Render uses a dashboard interface rather than a configuration file, so you'll need to add these rules in the Render Dashboard under your static site settings.

First try, correct answer. No yaml file needed. Claude gave me the exact syntax to enter in the Render dashboard, and now all my redirects work.

ChatGPT did suggest using the dashboard at some point, but it never provided the correct syntax.