---
title: "Link post: Fix for Slow Open and Save Dialog on MacOS"
description:
date: 2025-12-10T09:59:47Z
tags:
   - posts
layout: layouts/post.njk
---

> Since I updated to MacOS Tahoe 26.1 the open/save dialog of Finder became unbearably slow, like five seconds for every navigation step.[…] Someone in that thread linked to [this solution](https://www.reddit.com/r/MacOS/comments/1oqb1lf/comment/nocqk2h/) which is an easy one: delete the plist file that keeps track of recent folder locations. I deleted `com.apple.appkit.xpc.openAndSavePanelService.plist` and restarted, now the Open/Save panel opens quickly.[…] To delete this file navigate to `~/Library/Preferences/` in Finder (⌘ ⇧ + G or `Go` > `Go to Folder`) then delete `com.apple.appkit.xpc.openAndSavePanelService.plist`. I didn't even need to restart like the person on Reddit did and this immediately fixed it.

[Robb Knight](https://rknight.me/blog/fix-for-slow-open-and-save-dialog-macos/)
