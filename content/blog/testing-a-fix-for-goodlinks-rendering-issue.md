---
title: Testing a fix for Goodlinks rendering issue
description:
date: 2025-09-10T09:04:51Z
tags:
   - posts
layout: layouts/post.njk
---

I [found](https://ldstephens.net/blog/note-for-goodlinks-readers/) that posts from my ldstephens 11ty build aren’t rendering correctly in Goodlinks, even when shared from Safari. They display fine in Reeder, NetNewsWire, Unread, Instapaper, and Safari Reader View. So, I asked ChatGPT and Claude to review my post.njk code--both suggested changes, and I'm trying Claude's fix first. This post is also a test of that fix.

> Key Changes Made
> 
> 1.  **Added `<article>` wrapper** with Schema.org microdata
> 2.  **Wrapped title and metadata in `<header>`**
> 3.  **Wrapped main content in `<main>`** with `articleBody` property
> 4.  **Added `<nav>` wrapper** for previous/next links
> 5.  **Added structured data** to help content extractors
> 
> These semantic HTML improvements should help Goodlinks (and other content extractors) better identify and extract your post content while maintaining the same visual appearance and functionality.
> 
