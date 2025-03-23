---
title: Upgrading my older non-retina iMac to Mojave
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2019-03-31T18:42:23.000Z
metadata:
  categories:
    - Apps
    - Mac
    - macOS
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=1716
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2019/03/31/upgrading-my-older-non-retina-imac-to-mojave/
---
My iMac is a late 2013 non-retina model. That’s close to 6 years old but it still runs fine. The only problem has been that it’s still on Sierra.

I’ve been reluctant to upgrade it to Mojave for two reasons. One is I was afraid I would run into the same problems I had when trying to upgrade from Sierra to High Sierra. I wrote about it [here](https://ldstephens.net/2017/10/01/problems-upgrading-to-high-sierra/). Two is a problem that I read about on several forums where after upgrading to Mojave fonts are blurry on non-retina Macs.

So, here’s what finally convinced me that I needed to bite the bullet and attempt to put Mojave on my iMac. A few days ago Agile Tortoise released a Mac version of [Drafts](https://getdrafts.com). Drafts is an app that I use regularly on iOS so of course, I wanted to have it on my Mac as well. So off to the Mac App Store I go to get the app. Come to find out the Mac version requires macOS 10.13 or higher and I’m running 10.12. I need to update my macOS.

To make a long story short I upgrade my Mac to Mojave without a hitch. I didn’t notice any blurry fonts but a few articles suggested running this terminal command so I did.

> Apple’s macOS Mojave disables subpixel antialiasing, also known as font smoothing, by default. On a MacBook Air or a desktop Mac hooked up to a non-Retina display, upgrading will make your fonts look worse.
> 
> Update: We’ve found a better method that will actually re-enable subpixel antialiasing rather than just relying on font smoothing. Open a Terminal and run the following command:
> 
> defaults write -g CGFontRenderingFontSmoothingDisabled -bool NO
> 
> Log out and log back in for your changes to take effect. Thanks to Dean Herbert for reporting this to us.

Via [How-To-Geek](https://www.howtogeek.com/358596/how-to-fix-blurry-fonts-on-macos-mojave-with-subpixel-antialiasing/)

I now have Drafts on my Mac as well as the latest macOS.