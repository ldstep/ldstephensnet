---
title: Security Update 2020-003 for Mojave brings back the Catalina update reminder
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2020-05-27T19:05:05.000Z
metadata:
  categories:
    - macOS
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::http://ldstephens.net/?p=2181
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2020/05/27/security-update-2020-003-for-mojave-brings-back-the-catalina-update-reminder/
---
This morning I ran Mojave Security Update 2020-03 released yesterday on my MacBook Pro. After updating to my surprise the Catalina update was back.

This pissed me off because I never planned on upgrading to Catalina. That’s why I had previously hidden it using the terminal command (sudo softwareupdate –ignore “macOS Catalina”).

Now in 10.14, you can no longer use softwareupdate —ignore to hide/block a major Update like macOS Catalina after installing the 2020-003 Security Update. I tried and this is what I got:

> “Ignored updates:  
> (  
> “macOS Catalina”  
> )
> 
> Ignoring software updates is deprecated.  
> The ability to ignore individual updates will be removed in a future release of macOS.”

Users Beware! This feels like Apple trying to trick/force us on to Catalina.

I found this [Mr. Macintosh article](http://mrmacintosh.com/10-15-5-2020-003-updates-changes-to-softwareupdate-ignore/) that explains what’s happening in more detail.