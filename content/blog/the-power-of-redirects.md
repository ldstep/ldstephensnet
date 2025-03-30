---
title: The power of _redirects
description:
date: 2025-03-30T15:50:57Z
tags:
---

Hey friends, when I migrated ldstephens from [WordPress to Eleventy](https://www.11ty.dev/docs/migrate/wordpress/), I had a three goals:

-  Make sure old links redirected to the new structure.
-  Ensure the old RSS feed redirected to the new one.
-  Keep RSS subscribers from ldstephens.me connected, so they wouldn't have to change anything.

With Netlify redirects, I made all of this happen.

**Redirecting Old URLs to New URLs**

```
/2016/*/:slug/ /blog/:slug/ 301!
/2017/*/:slug/ /blog/:slug/ 301!
/2018/*/:slug/ /blog/:slug/ 301!
/2019/*/:slug/ /blog/:slug/ 301!
/2020/*/:slug/ /blog/:slug/ 301!
/2021/*/:slug/ /blog/:slug/ 301!
/2022/*/:slug/ /blog/:slug/ 301!
/2023/*/:slug/ /blog/:slug/ 301!
/2024/*/:slug/ /blog/:slug/ 301!
```

This does three things:

-  Redirects /YYYY/MM/DD/slug/ to /blog/slug/
-  Keeps the original post slug intact
-  Uses a 301 permanent redirect

**Redirecting the Old RSS Feed**

```
/feed      https://ldstephens.net/feed/feed.xml    301
/feed.xml  https://ldstephens.net/feed/feed.xml    301
```

Now, anyone subscribed to the old feed gets the new one automatically.

**Keeping ldstephens.me RSS Subscribers Connected**

On ldstephens.me, I updated the \_redirects file:

```
/feed      https://ldstephens.net/feed  200!
/feed.xml  https://ldstephens.net/feed.xml  200!
```

Instead of redirecting, this proxies requests to the new feed. The 200! ensures the feed loads from ldstephens.net instead of bouncing users around. The catch, both sites need to be on Netlify for this to work.

I'm new to this kind of thing, so being able to set up redirects felt like fucking magic. You just can't do this if your site is locked into a hosted platform. This is why owning your blog matters.
