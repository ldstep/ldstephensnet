---
title: Apple Private Relay breaking some websites in Safari
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2023-08-04T18:58:15.000Z
metadata:
  categories:
    - Apple
    - How To
    - Privacy
    - Security
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=4649
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2023/08/04/apple-private-relay-breaking-some-websites-in-safari/
---
I want to share an interesting experience I had recently. So, I’ve been hearing a lot about Meta’s Threads, and it got me curious. The other day, I decided to create an Instagram account on their website to check out Threads. However, I faced a bit of a hiccup. Whenever I tried to access the website, I kept getting an error message that said, “_Sorry, this page isn’t available. The link you followed may be broken, or the page may have been removed. Go back to Instagram._” It was a bit frustrating, and I couldn’t figure out why it was happening.

After some digging around, I found out that the issue was related to Apple Private Relay. Apparently, Private Relay was causing some problems with the Instagram website. You can read more about it in [this support article](https://support.apple.com/en-us/HT213548).

But don’t worry, there’s a way around it. If a website is not compatible with Private Relay, it might use measures like IP filtering or rate-limiting to limit access. You can temporarily grant the website access to view your IP address to continue using it. On iPhone or iPad, simply tap the Page Settings button (AA) and select Show IP Address. On Mac, choose View > Reload and Show IP Address in Safari.

Oh, and by the way, I decided not to sign up for an account.