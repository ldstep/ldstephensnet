---
title: How secure is Mastodon as a Twitter replacement?
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2022-12-15T14:49:39.000Z
metadata:
  categories:
    - Privacy
    - Security
    - Social Media
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstephens.net/?p=3813
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2022/12/15/how-secure-is-mastodon-as-a-twitter-replacement/
---
If you’re considering setting up a Mastodon account or already have you’re going to want to take a few minutes to read [Dan Goodin’s article](https://arstechnica.com/information-technology/2022/11/how-secure-a-twitter-replacement-is-mastodon-let-us-count-the-ways/) about the security of Mastodon and Mastodon instances.

> _This substantial increase raises important questions about the security of this new platform, and for good reason. Unlike the centralized model of Twitter and virtually every other social media platform, Mastodon is built on a federated model of independent servers, known as instances. In this respect, it’s more akin to email or Internet Relay Chat (IRC), where security depends on the ability and attention of the admin who configured it and maintains each individual server._
> 
> _The past month has seen the number of instances mushroom from about 11,000 to more than 17,000. The people running these instances are volunteers who may or may not be versed in the nuances of security. The difficulty of configuring and maintaining instances leaves plenty of room for mistakes that can put user passwords, email addresses, and IP addresses at risk of being revealed (more about that later). Twitter security left much to be desired, but at least it had a dedicated staff with a deep background in security._

\[…\]

> _The lack of an audit and years of robust security testing by outsiders means that serious security weaknesses are almost surely present._
> 
> _To that point, a separate researcher this month discovered a server that had somehow managed to scrape the data of more than 150,000 users from a misconfigured server. Fortunately, the data was limited to account names, display names, profile pictures, following count, follower count, and last status update. A third vulnerability discovered this month on one instance made it possible to steal users’ plaintext passwords by injecting specially crafted HTML into the site._

Dan points out that “those who follow his guidelines aren’t likely to assume any more risk than they do if they continue to use Twitter under Musk’s leadership, and they very likely will assume less.”

**The Guidelines**

-   Protect your account with a long, unique, randomly generated password and turn on 2FA, preferably using a security key instead of an authentication app.
-   Consider using an email privacy protection service such as those from DuckDuckGo or Apple and using that when registering an account.
-   Don’t put anything confidential in your account. This includes direct messages.
-   When deciding which instance to join, make sure it’s running the most recent version of the Mastodon software. Instances running out-of-date versions indicate the admin doesn’t have good security hygiene. The version number appears at the bottom left of a server page, and the most recent version available can be found here. If possible, also find out if the admin regularly backs up data. Consider, too, the experience of the person administering. Seasoned security professionals are likely more careful than hobbyists with little training.
-   Verify your account using Mastodon’s link verification feature. This will make it harder for someone to impersonate you. Remember, the blue check mark in someone’s profile means nothing. Verified Mastodon accounts are indicated by a green box with a check mark.
-   While avoiding direct messages is a good policy, be aware that if your DM to Person A includes the Mastodon handle of Person B, Person B will automatically get pulled into the conversation. This could make things awkward if you didn’t intend for Person B to read your message.
-   Read the privacy policy of the instance you’re considering to ensure your data doesn’t get passed on to third parties. It’s likely to differ from one to the other.

Source: [Ars Technica](https://arstechnica.com/information-technology/2022/11/how-secure-a-twitter-replacement-is-mastodon-let-us-count-the-ways/)

_This post appeared first on [ldstephens.medium.com](https://medium.com/@ldstephens/how-secure-is-mastodon-as-a-twitter-replacement-59feb7b04395)_.