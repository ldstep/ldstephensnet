---
title: How to show the PopClip menu on a selection
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2017-09-15T23:30:49.000Z
metadata:
  categories:
    - Apps
    - How To
    - Keyboard Maestro
    - macOS
    - Productivity
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=1030
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2017/09/15/how-to-open-the-popclip-menu-on-a-selection/
---
[PopClip](https://itunes.apple.com/us/app/popclip/id445189367?mt=12&uo=4&at=1000lude) is one of my favorite Mac utilities.

PopClip is a Mac utility for working with selected text. When I highlight text with my mouse or trackpad an actions menu pops up with options to do something with the text. I don’t have to right-click, it just appears automatically. And if I don’t use it, it’ll disappear when I move my mouse.

![](assets/screenshot-of-popclip-9-14-17--AwHaYK1n1MOQ.png)

PopClip includes standard actions like copy, cut, paste, and delete. There are also extensions to get the highlighted text into some of my favorite apps. Another action I frequently use is taking highlighted text and converting it to markdown. There are over 100 extensions that can be downloaded from the [PopClip download site](https://pilotmoon.com/popclip/extensions/).

![](assets/screenshot-of-popclip-9-14-17--KPYyL95QfEsh.png)

The only problem with PopClip is that occasionally the menu doesn’t appear when I make a selection or I’ll sometimes accidentally dismiss it. When this happens I have to re-select the text to get the menu back again. That’s a pain. Thanks to [Brett Terpstra there’s a simple script](http://brettterpstra.com/2014/11/17/invoking-popclip-on-an-existing-selection/) to get the menu to appear. To solve this problem, I’ve set the script to a Keyboard Maestro hotkey trigger ⌥⇧P so I can get the menu to appear anytime I want.

Here’s the Keyboard Maestro macro:

![](assets/screenshot-of-keyboard-maestro-wSUpBJmBvTVU.png)