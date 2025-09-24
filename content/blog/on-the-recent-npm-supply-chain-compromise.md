---
title: On the recent npm supply chain compromise
description:
date: 2025-09-24T09:55:51Z
tags:
   - posts
layout: layouts/post.njk
---

Hey friends, I know some of you use static site generators. Just in case you missed it, there’s a serious [npm compromise](https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem). CISA reports a self-replicating worm (“Shai-Hulud”) has hit over 500 npm packages.  

Jim Nielsen has a good write-up: [The Risks of NPM](https://blog.jim-nielsen.com/2025/npm-risks/).  

For my own site: it hasn’t been compromised. I’ve pinned all npm dependencies to safe versions released before Sept 16, 2025.  