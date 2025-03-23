---
title: Bear notes app iCloud sync
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2020-01-25T19:07:44.000Z
metadata:
  categories:
    - Apps
    - Bear
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::http://ldstephens.net/?p=2011
  type: wordpressapi-hosted
  url: http://ldstephens.net/2020/01/25/bear-notes-app-icloud-sync/
---
I’ve often wondered why when apps have issues with iCloud sync I never have an issue with [Bear](https://bear.app/). I’m looking at you Apple Notes and [Ulysses](https://ulysses.app/faq#macos-icloud).

So I decided to reach out to Bear’s developer for a response. Here’s what they had to say.

Bear support:

> At the very begging of Bear development, we tried different solutions for synching and we also tried with just iCloud but it was very clear to us handling attachments and conflicts was really problematic and synching the whole database exposes users to a concrete risk a data loss.
> 
> We don’t use exactly iCloud to sync notes, we use CloudKit, which shares the same servers with iCloud, but allow us to sync with a query-like API instead of a file-based paradigm like iCloud, DropBox or Google Drive. Here more info about CloudKit [https://developer.apple.com/icloud/cloudkit/](https://developer.apple.com/icloud/cloudkit/).

My last question was are there different methods of deploying CloudKit?

> The API set is only one but is very versatile. Basically you can consider it a remote CoreData framework with more options. Check the private/public part of the documentation for an example.

I asked the same question of Ulysses support.

Ulysses support:

> Thank you for reaching out. We are sorry it took us longer to reply.
> 
> Up until version 12 of Ulysses, the subscription as well as the sheets and settings had been synced via iCloud Drive. Since version 13, only the sheets (including all attachments) and settings are synced via iCloud Drive whereas the subscription is now synced via CloudKit.
> 
> I hope this clarifies it. If you have any further questions, please don’t hesitate to reply.

It appears that Bears sync is more reliable because they use CloudKit to sync notes instead of iCloud Drive as Ulysses does for sheets (including all attachments).