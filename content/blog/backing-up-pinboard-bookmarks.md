---
title: Backing up Pinboard bookmarks
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2017-05-06T22:30:07.000Z
metadata:
  categories:
    - Apps
    - How To
    - macOS
    - Productivity
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=552
  type: wordpressapi-hosted
  url: http://ldstephens.net/2017/05/06/backing-up-pinboard-bookmarks/
---
I recently moved all my bookmarks to [Pinboard](https://pinboard.in). So far my experience has been beyond my expectations. But, I started to wonder what would happen, to my bookmarks, if something were to happen to the service. Even though Pinboard has been around since 2009 I decided I should have a backup of all my bookmarks.

Here’s how I do it:

I open Pinboard in Safari and go to settings > backup > click the HTML format option and a pinboard-export.txt file is downloaded to my Downloads folder. I then have a [Hazel](https://www.noodlesoft.com/) rule which renames the file, gives it an .html extension and moves it to my Pinboard Backups folder in Dropbox. Changing the extension to .html makes all the bookmarks clickable links. I do this every Friday.

![](assets/2017-05-06_pinboard-backup-set-VwAswyKmvsHl.png)

![](assets/2017-05-06_pinboard-backup-set-Il45JA4qlJUa.png)

This way I always have access to my bookmarks outside of Pinboard if I need them.