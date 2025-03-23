---
title: macOS Safari has a disappearing extensions bug
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2021-12-12T15:43:52.000Z
metadata:
  categories:
    - Apps
    - How To
    - Mac
    - macOS
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=3064
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2021/12/12/macos-safari-has-a-disappearing-extensions-bug/
---
Last Wednesday I needed to log in to a website and to my surprise the [Bitwarden](https://bitwarden.com) extension had disappeared from the toolbar. I went to Safari > Preferences > Extensions to enable it again and found that it was no longer listed. Then I noticed that the [Goodlinks](https://goodlinks.app), and Wipr Extra extensions had also disappeared. What the hell!

I emailed Bitwarden and Goodlinks support, hoping to get an answer as to why this happened and how to restore the extensions. Here are the responses that I got and how to get the extensions back:

This is posted in the [Wipr FAQ](https://giorgiocalderolla.com/wipr-faq.html):

> Wipr Extra Is Missing

> If you can see Wipr Part 1 2 and 3 in Safari’s Preferences under Extensions, but not Wipr Extra, you’re being bit by a bug. Safari can’t seem to reliably index Web Extensions like Wipr Extra.

> Note that this affects all Web Extensions, not just Wipr, and there is absolutely nothing I can do about it. Please complain to Apple – the more people complain, the sooner they’ll fix this.

> The following Terminal command has been reported to fix the issue (at least temporarily):
> 
> /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -f -R /Applications/Safari.app

I got a similar response from GoodLinks support in an email.

> Hi Loren,
> 
> Could you try quitting Safari completely and running this command in Terminal?
> 
> /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -f /Applications/Safari.app
> 
> If it still not work, try restarting your Mac after running that command.
> 
> Thanks,
> 
> Ngoc

I can confirm that the terminal command reinstated the missing extensions.