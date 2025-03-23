---
title: WordPress.com counting my views in stats
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2018-10-24T15:45:57.000Z
metadata:
  categories:
    - How To
    - Mac
    - macOS
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=1604
  type: wordpressapi-hosted
  url: http://ldstephens.net/2018/10/24/wordpresscom-counting-my-views-in-stats/
---
I usually write and publish blog posts from my iMac. The other day I happened to be using my MacBook instead. So, after I wrote and published the article I wanted to view it. After viewing it I noticed that WordPress.com was counting my own views in stats. I was surprised that this was happening because it had never happened on my iMac.

The rule for WordPress.com is as long as you’re logged into your WordPress.com account your own views are automatically not counted. So why were my views being counted when I use my MacBook?

Here’s the reason. My iMac is running Sierra. My MacBook is running High Sierra. The privacy settings in Safari 12 are different for each macOS.

![](assets/screenshot-of-safari-10-18-18--9Tveh5bLkkf4.png)iMac running Sierra and Safari version 12

![](assets/screenshot-of-safari-10-18-18--XbYEJcI1IXty.png)MacBook running High Sierra and Safari version 12

On my MacBook running Hight Sierra when **Preferences > Privacy > Prevent cross-site tracking** is enabled WordPress.com won’t recognize my site as logged in. It’s being blocked. So to prevent WordPress.com from counting my views I had to temporarily disable **Prevent cross-site tracking**.