---
title: Small self-managed blogs aren't safe from bots and AI scrapers
description:
date: 2025-11-14T13:41:30Z
tags:
   - posts
layout: layouts/post.njk
---

[Herman](https://herman.bearblog.dev/messing-with-bots/)

> As outlined in my previous [two](https://herman.bearblog.dev/agressive-bots/) [posts](https://herman.bearblog.dev/the-great-scrape/): scrapers are, inadvertently, DDoSing public websites.

Herman is the developer behind the Bear blogging platform, and the two posts he mentions lay out the growing problem of aggressive and unethical web scraping mostly driven by the demand for data to train large language models.

And it’s not just happening to the big platforms. It’s hitting small personal sites too.

I was looking at my Netlify server analytics the other day and noticed that my Web Request count seemed high compared to my bandwidth usage. Daily bandwidth is low because most folks read my posts via RSS, but the request count was way out of proportion. That got me wondering whether bots were hammering my site.

A while back I worked out a rough conversion: 1 MB of bandwidth = 3.5 page views. It’s not perfect, but it’s good enough to reason about human vs. bot traffic.

Here’s how it works out with some recent numbers over 30 days: 792 MB of bandwidth and 340,000 web requests.

**Figuring Out Human Traffic**

**Human page views**  

792 MB × 3.5 = 2,772 page views from actual people.

**Human web requests** 

Each page view pulls in multiple assets — HTML, CSS, images, fonts, etc. On my site, a typical page is around 285 KB.

If an optimized page makes about 30 requests, then:

2,772 views × 30 requests = 83,160 human requests

**Everything Else**

Total requests were about 340,000.  

Subtract the 83k human requests, and you’re left with roughly **257,000 automated hits bots, crawlers, scrapers, and whatever else is out there**.

The point is the same one Herman’s making: this isn’t just a problem for big platforms. Even small, hand-rolled sites like mine and yours are getting hammered by bot traffic now.