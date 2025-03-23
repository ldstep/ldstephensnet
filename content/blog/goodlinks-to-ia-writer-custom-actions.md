---
title: GoodLinks to iA Writer Custom Actions
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2024-06-21T19:18:40.000Z
metadata:
  categories:
    - Apps
    - How To
    - iOS
    - iPad
    - iPadOS
    - iPhone
    - Productivity
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::http://ldstephens.net/?p=5839
  type: wordpressapi-hosted
  url: http://ldstephens.net/2024/06/21/goodlinks-to-ia-writer-custom-actions/
---
Hey friends, as I mentioned the other day, I’m switching to [iA Writer](https://ia.net/writer) for my blogging and writing. This means capturing my ideas directly in iA Writer. Since [GoodLinks](https://goodlinks.app) is my go-to read-it-later app, I’ve created some Custom Actions that seamlessly transfer content from GoodLinks to iA Writer.

Previously, I wrote about [creating Custom Actions in GoodLinks](https://ldstephens.net/2022/12/29/how-to-create-custom-actions-in-goodlinks/) and it included actions for sending content to Drafts. I’m excited to share three Custom Actions for sending content from GoodLinks to iA Writer with you.

**Title, Author, URL, Selection to iA**

```
ia-writer://x-callback-url/new?text=[title]%0A{_}[author]{_}%0A[url]%0A[selection-text]
```

This action sends the title, author, URL, and selected text in the active article to iA Writer as plain text.

**Selection – iA**

```
ia-writer://x-callback-url/new?text=[selection-text]
```

This action sends the selected text in the active article to iA Writer as plain text.

**Markdown Title, URL – iA**

```
ia-writer://x-callback-url/new?text={[}[title]{]}{(}[url]{)}
```

This action sends the title and URL of the active article to iA Writer as markdown.