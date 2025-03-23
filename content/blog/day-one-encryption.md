---
title: Day One encryption
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2019-03-04T19:15:17.000Z
metadata:
  categories:
    - Apps
    - How To
    - iPad
    - iPhone
    - Mac
    - Privacy
    - Security
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=1695
  type: wordpressapi-hosted
  url: http://ldstephens.net/2019/03/04/day-one-encryption/
---
I have been using [Day One](https://dayoneapp.com/) for going on three years now. One concern I’ve had is that journals by default are encrypted but with Day One holding the encryption key. This means that someone at Day One might be able to access my journals. Journals with Standard encryption are also exposed to a data breach or [security glitch](https://help.dayoneapp.com/day-one-sync/may-2018-day-one-outage-postmortem). This has caused me to limit what I write in them.

Now, after reading Shawn Blanc’s [”Best Journaling App for iPhone, iPad, and Mac”](https://thesweetsetup.com/apps/the-very-best-journaling-logging-app/) on [The Sweet Setup](https://thesweetsetup.com/) I’ve taken his advice and enabled End-to-end encryption for all my journals.

Shawn Blanc:

> End-to-end encryption is not turned on by default for providing the best type of security for your journal entries, as users must maintain their encryption key at all times to unlock journals if necessary. As Day One’s FAQ puts it:

> When using end-to-end encryption, it is essential you save your encryption key in a secure location. If you lose your key, you will not be able to decrypt the journal data stored in the Day One Cloud. You’ll need to restore your data from an unencrypted locally-stored backup.

> We recommend turning on end-to-end encryption whenever you create a new journal to ensure your data is always kept safe and secure. Save your encryption key in an app like 1Password or a locked note inside Notes.app and never lose the key.

Now no one has access to my journals without the encryption key. I keep it in [1Password](https://1password.com/).