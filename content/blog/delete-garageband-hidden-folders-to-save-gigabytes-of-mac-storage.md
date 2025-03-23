---
title: Delete GarageBand hidden folders to save gigabytes of Mac storage
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2018-07-27T22:47:03.000Z
metadata:
  categories:
    - Apps
    - How To
    - Mac
    - macOS
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::http://ldstephens.net/?p=1491
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2018/07/27/delete-garageband-hidden-folders-to-save-gigabytes-of-mac-storage/
---
The other day I was checking the available storage on my 2015 13” MacBook Pro which only has 128 GB of flash storage. While doing so, I noticed something strange. In the Storage tab of About This Mac GarageBand was using 2 GB of storage. I found that odd since I don’t have GarageBand installed on this Mac.

With only 128 GB of flash storage, I wanted to reclaim the space. This TekRevue article by Jim Tanous, [Delete GarageBand to Save Gigabytes of Mac Storage](https://www.tekrevue.com/tip/delete-garageband/), helped me find some hidden GarageBand folders. After I removed them, High Sierra doesn’t show anymore GarageBand content in About This Mac.

These are the folders that I deleted.

-   HD/Library/Application Support/GarageBand (995MB)
-   Macintosh HD/Library/Application Support/Logic (880MB)
-   Macintosh HD/Library/Audio/Apple Loops (up to 10GB)

You should read the article and follow the instructions before deleting these folders.