---
title: Bitwarden for Mac browser extension exposing passwords in clipboard managers
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2020-07-18T17:04:40.000Z
metadata:
  categories:
    - Alfred
    - Apps
    - Mac
    - Security
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=2259
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2020/07/18/bitwarden-for-mac-browser-extension-exposing-passwords-in-clipboard-managers/
---
While using [Alfred’s clipboard manager](https://www.alfredapp.com/help/features/clipboard/) the other day I noticed passwords in the clipboard history. My first thought was how is this happening. I immediately went into Alfred’s Advanced Clipboard History Settings to make sure that I had added Bitwarden to the Ignore list and yes I had. So I figured this has to be some sort of an issue with [Bitwarden](https://bitwarden.com/).

After doing some testing I discovered that the issue is with the Bitwarden browser extension. When I copied a password in the extension the password was collected by Alfred’s clipboard manager even though I had it set to be ignored. This happened with both the Safari and Firefox extension. I then copied a password in the Bitwarden App and to my surprise, it was ignored. So this only happens with the browser extension.

I contacted both Alfred and Bitwarden regarding the issue. Here’s what they had to say:

Alfred Support:

> Could you also take a look at Features > Clipboard History and ensure that the boxes for “Ignore Clipboard data marked as Concealed” and …”as Auto Generated” are checked, which they should be by default?
> 
> This ensures that if a password app (or any other app) correctly marks the copied data as concealed, which indicates its potentially sensitive information like a password, this is ignored by Alfred. However, if Bitwarden doesn’t mark the passwords as such, it’s impossible for an app like Alfred to guess what you’ve copied.
> 
> First, check whether Bitwarden offers you a setting to identify the data as Concealed, and if not, you may want to contact them to request this.
> 
> Cheers,
> 
> Vero

Bitwarden Support:

> Thank you for supporting Bitwarden! I’d be happy to help.
> 
> This has been requested. Unfortunately, due to upstream limitations by our desktop application framework, the ability to mark data as “concealed” is not available at this time.
> 
> We have an open issue regarding this here: [https://github.com/bitwarden/desktop/issues/90](https://github.com/bitwarden/desktop/issues/90)
> 
> Please let us know if there is anything else we can help with!
> 
> Regards,
> 
> Luc

While doing my research on this issue I noticed that others using different clipboard manager apps were having the same issue. So if you’re using a clipboard manager and Bitwarden you might want to check your clipboard manager history for passwords.

My workaround in Alfred is to remember to clear the clipboard history after I copy a password from the extension. Better yet if I need to copy a password I’ll do it from the app instead of the extension.