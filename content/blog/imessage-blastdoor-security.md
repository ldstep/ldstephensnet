---
title: iMessage BlastDoor security
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2021-02-16T15:49:21.000Z
metadata:
  categories:
    - iOS
    - iPad
    - iPadOS
    - iPhone
    - Security
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=2690
  type: wordpressapi-hosted
  url: http://ldstephens.net/2021/02/16/imessage-blastdoor-security/
---
Over the past three years, security researchers and real-world attackers have found iMessage remote code execution (RCE) bugs and abused them to develop exploits that allowed them to take control over an iPhone just by sending a simple text, photo, or video to someone’s device.

As [reported January 28, 2021 by ZDNet](https://www.zdnet.com/article/google-researcher-discovers-new-ios-security-system/) “With the release of iOS 14 last fall, Apple has added a new security system to iPhones and iPads to protect users against attacks carried out via the iMessage instant messaging client.”

“Named BlastDoor, this new iOS security feature was discovered by Samuel Groß, a security researcher with Project Zero, a Google security team tasked with finding vulnerabilities in commonly-used software.”

“Groß said the new BlastDoor service is a basic sandbox, a type of security service that executes code separately from the rest of the operating system.”

“While iOS ships with multiple sandbox mechanisms, BlastDoor is a new addition that operates only at the level of the iMessage app.”

“Its role is to take incoming messages and unpack and process their content inside a secure and isolated environment, where any malicious code hidden inside a message can’t interact or harm the underlying operating system or retrieve with user data.”