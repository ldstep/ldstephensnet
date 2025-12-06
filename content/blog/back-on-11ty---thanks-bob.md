---
title: Back on 11ty - thanks Bob!
description:
date: 2025-12-06T15:44:24Z
tags:
   - posts
layout: layouts/post.njk
---

[Bob Monsour](https://bobmonsour.com/) reached out after I wrote about my move from 11ty to Bear yesterday. He was worried I bailed because of the recent npm mess and maybe rushed the decision.

> Just read your latest post and thought you might be interested in how Zach has addressed the npm problem for 11ty. [https://www.11ty.dev/blog/npm-security/](https://www.11ty.dev/blog/npm-security/)

I didn’t think I rushed it, but on Bob’s nudge I re-read the post about how 11ty secured their publishing packages on npm. After going through it again, I decided to stick with 11ty.

I also tightened things up on my end. [Back in September](https://ldstephens.net/blog/on-the-recent-npm-supply-chain-compromise/) I pinned all my dependencies to safe versions released before Sept 16, 2025. Today I ran `npm audit` just to be sure. It flagged two small issues, and `npm audit fix` cleaned them up.

Thanks, Bob! Without the push, I doubt I would’ve gone back and done all this—and I’m glad I did.