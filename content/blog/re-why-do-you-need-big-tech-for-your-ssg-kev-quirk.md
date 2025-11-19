---
title: "RE: Why Do You Need Big Tech for Your SSG? | Kev Quirk"
description:
date: 2025-11-19T09:40:33Z
tags:
   - posts
layout: layouts/post.njk
---

[Kev](https://kevquirk.com/blog/why-do-you-need-big-tech-for-your-ssg/)

> A look at why small, personal websites don’t need big-tech static hosting, and how a simple local build and rsync workflow gives you faster deploys, more control, and far fewer dependencies.
> 
> […] 
> 
> It got me thinking about my fellow small-web compatriots, their SSG workflows, and why on earth so many rely on services like Cloudflare Pages and Netlify. For personal sites it feels incredibly wasteful: you’re spinning up a VM, building your site, pushing the result to their platform, then tearing the VM down again.
> 
> Why not just build the site on your local machine? You’re not beholden to anyone, and you can host your site anywhere you like.

Hey friends, Kev recently kicked off a fun debate after suggesting we ditch the Netlify/Cloudflare + GitHub workflow and go to a local builds with an rsync deploy to a self-managed VPS. His pitch was all about control, speed, and breaking free from Big Tech.

Curious, I dug into his setup (with a little help from Gemini) to see if any of it made sense for me.

* [Switching Back to Jekyll & Building My Own CMS | Kev Quirk](https://kevquirk.com/blog/switching-back-to-jekyll-building-my-own-cms/)
* [Giving My Jekyll Site a CDN Front End | Kev Quirk](https://kevquirk.com/blog/giving-my-jekyll-site-a-cdn-front-end/)

I get the appeal. Having total control over your own corner of the web is tempting, especially when you’re running a simple 11ty static site like mine.

But after looking at the numbers and comparing the workflows, my answer is: thanks, but no thanks it’s not for me. 

**The Cost vs. Control Trade-Off**

My setup is simple: GitHub + Netlify’s free Starter Plan.

1. **Cost:** I pay nothing for hosting. My only bill is the domain.
2. **Effort:** Deployment is brain-off. I push to Git, and Netlify handles the build, security, updates, uptime—everything.

Kev’s VPS setup gives him more control, sure, but it also adds a monthly hosting fee (even cheap is still a few bucks) and basically turns him into a sysadmin. Now he’s responsible for OS patches, web server configs, and all the stuff Netlify does for me automatically.

My site uses about 1 GB of Netlify’s 100 GB free monthly allowance. So switching to “save money” just doesn’t hold up.

**Redirects**

Kev mentioned dealing with a “metric tonne” of them in a messy, server-specific .htaccess file. No thanks.

On Netlify, I just add a few lines to my clean little netlify.toml and everything works. If I moved to a pure storage CDN, I’d run into the same headache he did.

**Verdict**

If you're running a complex site or you're philosophically opposed to big platforms, a VPS + rsync pipeline might be worth it. And if you've got the technical skills for that kind of setup, like Kev, it can make even more sense. I don't have those skills, so it's not a path that fits me. For my tiny, low-traffic static site, the convenience, zero cost, and redirect handling of GitHub + Netlify are hard to beat.

What about you? Are you on a self-managed VPS or sticking with modern static hosting?