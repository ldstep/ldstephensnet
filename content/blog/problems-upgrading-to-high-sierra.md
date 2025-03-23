---
title: Problems upgrading to High Sierra
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2017-10-01T21:25:03.000Z
metadata:
  categories:
    - macOS
    - Rambling
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=1072
  type: wordpressapi-hosted
  url: http://ldstephens.net/2017/10/01/problems-upgrading-to-high-sierra/
---
Well, I should have waited a few weeks, like I usually do, before installing High Sierra on my Macs.

Let’s start with my MacBook Pro. So far everything has been working fine. I did have to reset some of my settings. For example, all my startup apps were gone so I had to re-add them to the user login items. Not a big deal.

Now let’s talk about my late 2013 iMac. Everything didn’t go so good. I spent two and half days working with Apple Support to get my iMac running.

The first issue happened during installation. A lot of water has gone under the bridge. I’m not sure if the first boot up problem was at install or the next time I did a restart? The bottom line is my keyboard wasn’t working so I tried a reboot to see if that would fix the problem. It didn’t reboot. It got stuck during the reboot process. I shut it down by holding down the on button. This time it booted up. I tried a few more restarts and sometimes it would boot up and other times it wouldn’t. At this point, I knew something was wrong so made my first call to Apple Support. The Support tech ask me a few questions. Then he had me do a P-Ram reboot ⌥ ⌘ P R (I think that’s what he called it). That fixed the boot problem. Feeling like everything was working, including the keyboard problem, I shut down for the day.

The next morning when I turned on my iMac it booted up fine. Then the keyboard issue reared its ugly head again. By the way, this is the Bluetooth Apple Magic Keyboard we’re talking about. Sometimes it would work sometimes it wouldn’t. I called support again. They walked me through re-pairing it to Bluetooth which did no good. Then they had me change the batteries. After that, the keyboard was working fine so I parted ways with Support.

After taking a lunch break I went back to my iMac to do some writing and the keyboard wasn’t working again. So I got to thinking this isn’t a keyboard issue. So I dug out a Logitech USB keyboard, I had in a closet, to see if it would work. Well, it had the similar issues.

After some trial and error, I determined that anytime I would leave the keyboard idle for a few minutes and then come back to start using it again it wouldn’t work. I called support again a third time and this time it was determined there must be a bug in High Sierra that’s causing the problem. With no available fix, they had me restore to Sierra from a Time Machine backup. After being back on Sierra the keyboard is working fine. Apple Tech Support was excellent. They ask me not to attempt to upgrade my iMac to High Sierra until they called me back sometime in the future to let me know the bug was fixed.

I’m sure glad I did a backup just before I started the update. So now I have Sierra on my iMac and High Sierra on my MacBook. Oh yeah, the boot issue caused a file in Dropbox to get corrupted, which messed up syncing, so I had to fix that too.