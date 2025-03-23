---
title: A keyboard shortcut for a markdown link in Drafts Keyboard Maestro
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2021-01-23T19:05:28.000Z
metadata:
  categories:
    - How To
    - Keyboard Maestro
    - Mac
    - Productivity
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::http://ldstephens.net/?p=2647
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2021/01/23/a-keyboard-shortcut-for-a-markdown-link-in-drafts-keyboard-maestro/
---

Lately, I’ve been doing more of my writing in [Drafts](https://getdrafts.com). One thing that I miss is a keyboard shortcut for a markdown link. In other writing apps like iA Writer, Byword, Ulysses, and etc, ⌘K is the keyboard shortcut for a markdown link. Since I use links fairly often I miss not having it when I’m writing in Drafts.

I solved this by creating a [Keyboard Maestro](https://www.keyboardmaestro.com/main/) macro for ⌘K to insert a markdown link when I’m writing in Drafts. Now when I press ⌘K in Drafts I get the markdown link syntax \[\]().

Here’s the macro setup:

First, you have to create a Drafts group. When you do this be sure to set Available in these applications: to Drafts.

![](assets/cASWOPm-8z1k0u47WCXt.png)

Now the macro:

![](assets/TfASUDW-y3vuCRaWZb9M.png)
