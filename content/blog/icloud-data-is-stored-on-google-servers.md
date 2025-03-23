---
title: iCloud data is stored on Google servers
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2018-02-28T18:50:15.000Z
metadata:
  categories:
    - Apple News
    - Privacy
    - Security
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=1378
  type: wordpressapi-hosted
  url: http://ldstephens.net/2018/02/28/icloud-data-is-stored-on-google-servers/
---
I always thought my iCloud data was stored in an Apple-owned data center. I’m not sure why I thought that. I guess I just assumed. Turns out it’s not. It’s being stored on Google and Amazon S3 servers.

I’m not sure how I feel about that. I started avoiding Google services several years ago. I left Gmail for [Fastmail](https://www.fastmail.com/?STKI=14726057). I moved my calendars and contacts from Google to Apple Calendar and Contacts. Now I find out that Apple is storing my data on Google servers.

I guess we have to trust that Apple is properly securing our data on Google and Amazon’s servers. [They say they are](https://images.apple.com/business/docs/iOS_Security_Guide.pdf).

> iCloud stores a user’s contacts, calendars, photos, documents, and more and keeps the information up to date across all of their devices, automatically. iCloud can also be used by third-party apps to store and sync documents as well as key values for app data as defined by the developer. Users set up iCloud by signing in with an Apple ID and choosing which services they would like to use. iCloud features, including My Photo Stream, iCloud Drive, and iCloud Backup, can be disabled by IT administrators via MDM configuration profiles. The service is agnostic about what is being stored and handles all file content the same way, as a collection of bytes.
> 
> Each file is broken into chunks and encrypted by iCloud using AES-128 and a key derived from each chunk’s contents that utilizes SHA-256. The keys and the file’s metadata are stored by Apple in the user’s iCloud account. The encrypted chunks of the file are stored, without any user-identifying information, using third-party storage services, such as S3 and Google Cloud Platform.

​CNBC [first reported on this](https://www.cnbc.com/2018/02/26/apple-confirms-it-uses-google-cloud-for-icloud.html).