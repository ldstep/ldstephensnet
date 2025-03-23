---
title: Mac Migration Assistant broke Alfred file search on my new M1 iMac
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2021-12-11T21:55:23.000Z
metadata:
  categories:
    - Alfred
    - Apps
    - How To
    - Mac
    - macOS
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=3060
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2021/12/11/mac-migration-assistant-broke-alfred-file-search-on-my-new-m1-imac/
---
My attempts to [resist getting a new M1 Mac](https://ldstephens.net/2021/11/09/resisting-the-temptation-of-a-new-m1-mac/) failed. I’ve now taken delivery of a base model M1 24” iMac with a Touch ID Magic Keyboard, Magic Mouse, and Magic Trackpad.

After migrating data from my old MacBook Pro to my new M1 iMac, I ran into an issue with [Alfred](https://www.alfredapp.com). [File Search](https://www.alfredapp.com/help/features/file-search/) was broken.

If this happens to you, here’s what you need to do to fix it:

First, make sure all [Permissions are enabled](https://www.alfredapp.com/help/getting-started/permissions/).

Then follow the instructions in this Alfred support email sent to me by Vero:

> Hi Loren,
> 
> This is an issue in macOS Monterey that affects primarily users who migrate data from another Mac. We’ve established in this forum thread that rebuilding your Mac’s index in full resolves the issue for everyone:
> 
> [https://www.alfredforum.com/topic/17462-file-search-in-macos-monterey/?do=findComment&comment=90299](https://www.alfredforum.com/topic/17462-file-search-in-macos-monterey/?do=findComment&comment=90299)
> 
> The first steps to follow when results seem unexpected is to rebuild your Mac’s metadata. It’s usually because the data being provided by macOS is incorrect (even if it appears correct in the current Spotlight cache), and rebuilding ensures that all this information is refreshed by the OS.
> 
> Even if you believe you’ve already reindexed, please follow the steps below specifically (as it involves deleting a cache first and ensuring Terminal has suitable permissions).
> 
> -   \*\*\*\*\*\*First, please pop open System Preferences > Security & Privacy > Privacy > Full Disk Access and add Terminal\*\*
> -   Once you’ve done this, go to Alfred’s Advanced preferences, choose “Rebuild macOS Metadata”
> -   \*\*\*\*\*\*Ensure that you check “Delete .Spotlight-V100 before reindex”\*\*
> -   Follow the steps in Terminal, and keep a close eye for any error messages relating to your index. 
> 
> Please let me know if there are any errors. Otherwise, if it proceeds smoothly, you may need to wait up to an hour for the reindex to complete. Once this is done, make your searches again and see if your results are more as expected.
> 
> If your issue persists, please provide the following information:
> 
> -   Your diagnostics file, by typing ?diagnostics into Alfred and attaching the resulting fileExamples of the File
> -   Troubleshooting reports for the files you cannot find using Alfred
> -   Details of exactly what you’re typing into Alfred and what results you are expecting to see
> 
> Cheers,
> 
> Vero