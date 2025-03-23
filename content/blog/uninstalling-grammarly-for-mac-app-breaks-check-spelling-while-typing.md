---
title: Uninstalling “Grammarly for Mac” app breaks “Check Spelling While Typing”
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2021-12-20T13:45:39.000Z
metadata:
  categories:
    - Apps
    - How To
    - Mac
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=3098
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2021/12/20/uninstalling-grammarly-for-mac-app-breaks-check-spelling-while-typing/
---
A few days ago I noticed that “Check Spelling While Typing” had stopped working on my iMac. A google search led me to these two MPU Talk forum threads:

[Spell check turned off? – MPU Talk](https://talk.macpowerusers.com/t/spell-check-turned-off/26700)

[Uninstalling Grammarly Desktop app breaks macOS spell checker – MPU Talk](https://talk.macpowerusers.com/t/grammarly-now-supports-native-mac-apps/26304/38)

> If you uninstall Grammarly for Mac and the system spell check is not working in apps such as Mail or Notes, do the following:
> 
> Open Terminal and copy and paste the following:
> 
> defaults write -g NSAllowContinuousSpellChecking -bool true
> 
> Restart the affected apps (or your whole computer).

Yes, I had deleted the old Grammarly for Mac app and installed the new Grammarly Desktop app. So, I’m going to assume that’s what happened. It appears that uninstalling the new Grammarly Desktop app also breaks “Check Spelling While Typing”.

Running the terminal command fixed “Check Spelling While Typing” for me.