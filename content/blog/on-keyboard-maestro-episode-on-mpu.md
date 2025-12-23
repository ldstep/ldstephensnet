---
title: On - Keyboard Maestro episode on MPU
description:
date: 2025-12-23T09:31:51Z
tags:
   - posts
layout: layouts/post.njk
---

In the latest episode of [Mac Power Users]([https://www.relay.fm/mpu/828](https://www.relay.fm/mpu/828)), David and Stephen discuss [Keyboard Maestro]([https://www.keyboardmaestro.com/main/](https://www.keyboardmaestro.com/main/)). [Dr. Drang](https://leancrew.com/all-this/2025/12/keyboard-maestro-episode-on-mpu/) shared his insights on the topic in a blog post.

> Second, Stephen has been using Keyboard Maestro in place of TextExpander. This works because typed text is one of the trigger categories that KM accepts. When David asked if there were any downsides to using Keyboard Maestro instead of TextExpander, Stephen couldn't come up with any problems other than the initial pain of reimplementing your snippets in a new app. As someone who did exactly what Stephen did--on [two](https://leancrew.com/all-this/2016/04/the-new-textexpander/) separate [occasions](https://leancrew.com/all-this/2021/07/from-textexpander-to-keyboard-maestro-again/)--I have thoughts:
> 
> - The great advantage of purpose-built tools like [TextExpander](https://textexpander.com/), [Typinator](https://ergonis.com/typinator) (which is what I use now), and [TypeIt4Me](https://www.ettoresoftware.com/mac-apps/typeit4me/) is that they have very quick ways of creating new snippets from selected text or the clipboard. Keyboard Maestro has no such system.

Dr. Drang makes a good point. That’s one downside of using Keyboard Maestro for snippets. But if you’re already using [Alfred](https://www.alfredapp.com), there’s a quick way to create new or even temporary snippets without paying for a purpose-built snippet app like the ones mentioned above.

**Turn a Clipboard Item into an Alfred Snippet**

You don’t need to open Alfred Preferences to create a snippet. You can do it straight from the clipboard.

* Open Alfred’s Clipboard History**  
* Press ⌥⌘C (Option–Command–C).
* Navigate to the item you want to save.
* Press ⌘S.

Alfred opens the New Snippet sheet with the clipboard contents already filled in. From there, give it a name, set a keyword if you want one, choose a collection, and save.

It’s a fast way to turn something you’ve already copied into a reusable snippet.