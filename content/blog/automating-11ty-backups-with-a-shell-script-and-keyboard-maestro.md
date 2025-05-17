---
title: Automating 11ty backups with a shell script and Keyboard Maestro
description:
date: 2025-05-17T11:55:04Z
tags:
layout: layouts/post.njk
---

I've always done Time Machine backups every Friday, which is fine for most things. But when it comes to the 11ty project for this blog, I wanted something more frequent. I make changes throughout the week, and if I break something, I want to be able to restore from a recent backup. So, I decided to automate it.

The goal was to back up my entire 11ty project, including the public folder that's ignored by GitHub. To do this, I created a simple script to zip up the entire project and store it securely on an external drive. Here's the script:
    
```
mkdir -p ~/Documents/ProjectBackups/
cd /Users/lorenstephens/Documents/GitHub/
zip -r ldstephensnet-$(date +"%Y-%m-%d-%I-%M%p").zip ldstephensnet
mv ldstephensnet-*.zip "/Volumes/Nemo/ProjectBackups/"
```
    
This creates a backup folder if it doesn't exist, switches to my 11ty project directory, zips the entire project (including ignored files), names the zip with the date and time for easy reference, and moves it to an external drive.

To make it even easier, I added the script to Keyboard Maestro. Now, with a simple keyboard shortcut, the backup runs automatically. No more worries about missing files or skipped commits.

This script saves me from manual backups, and I know everything is safely stored. If I break something, I can always go back to the previous version.