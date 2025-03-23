---
title: Now you can exclude apps from clipboard history in Keyboard Maestro 8
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2017-09-24T21:13:25.000Z
metadata:
  categories:
    - Apps
    - How To
    - Keyboard Maestro
    - macOS
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=1058
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2017/09/24/now-you-can-exclude-apps-from-clipboard-history-in-keyboard-maestro-8/
---
One complaint I have with [Keyboard Maestro](https://www.keyboardmaestro.com/main/) is the way passwords are handled in the clipboard history.

> Clipboard entries that resemble passwords are obscured, deleted after they reach position ten in the clipboard history, and not saved to disk. You can option click on an obscured password to reveal it.

This way of handling passwords has always made me uncomfortable. I’m used to being able to exclude apps like you can in [Alfred](https://www.alfredapp.com/) or [Copied](https://itunes.apple.com/us/app/copied-copy-paste-everywhere/id1026349850?mt=12&uo=4&at=1000lude).

Now with [Keyboard Maestro 8, you can exclude applications](https://wiki.keyboardmaestro.com/manual/Clipboard_History_Switcher) using the Keyboard Maestro Excluded Preferences. I added 1Password to the excluded list. Now when I copy a password it will no longer be stored in the clipboard history.

![](assets/screenshot-of-keyboard-maestro-79s5JCG9u9jv.png)

Thank you Peter.