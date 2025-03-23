---
title: Launch your favorite Mac apps with keyboard shortcuts using Alfred
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2017-08-04T21:27:15.000Z
metadata:
  categories:
    - Alfred
    - Apps
    - How To
    - macOS
    - Productivity
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=851
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2017/08/04/launch-your-favorite-mac-apps-with-keyboard-shortcuts-using-alfred/
---
The other day I [wrote about launching Mac apps with keyboard shortcuts](http://ldstephens.net/2017/06/20/launch-your-favorite-apps-with-keyboard-shortcuts-keyboard-maestro/) using [Keyboard Maestro](https://www.keyboardmaestro.com/main/). If you’re an [Alfred](https://www.alfredapp.com/) user you can do the same thing with an Alfred workflow.

Here’s my workflow to launch Safari with the hotkey ⌥S. You’ll need the [PowerPack](https://www.alfredapp.com/powerpack/) to do this.

![](assets/screenshot-of-alfred-preferenc-HlDfMk95gy55.png)

Step one is to create a new workflow.

![](assets/screenshot-of-alfred-preferenc-goXWr91pAoTZ.png)

Step two is to setup a trigger for the hotkey.

![](assets/screenshot-of-alfred-preferenc-rH8rQCZ4bHxA.png)

Step three is to add the Launch Apps action and drag in the application(s) you want to open. The easiest way to do this is to search for the application or file in Alfred and drag it directly from Alfred’s results into the action box.

![](assets/screenshot-of-alfred-preferenc-PHi9bC3JdQiy.png)

Optionally, check the “Toggle visibility for apps” to tell Alfred to show/hide the app. Connect the action to the hotkey to quickly launch the app.

I prefer launching apps with Alfred for one main reason. I like the way the show/hide app functionality works in Alfred better than the way it does in Keyboard Maestro.