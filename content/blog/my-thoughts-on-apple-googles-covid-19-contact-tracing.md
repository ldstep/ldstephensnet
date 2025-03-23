---
title: My thoughts on Apple &amp; Google’s COVID-19 contact tracing
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2020-04-11T19:28:58.000Z
metadata:
  categories:
    - Apple News
    - iPhone
    - Privacy
    - Tech News
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=2141
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2020/04/11/my-thoughts-on-apple-googles-covid-19-contact-tracing/
---
From what I’ve read [Apple and Google’s COVID-19 contact tracing](https://www.apple.com/newsroom/2020/04/apple-and-google-partner-on-covid-19-contact-tracing-technology/) seems like a good idea and one that I’ll most likely use. It appears to be the best technological solution to date for governmental authorities to partially lift the lockdown orders that are currently in place. That said I do have privacy concerns.

According to the [Verge,](https://www.theverge.com/2020/4/10/21216715/apple-google-coronavirus-covid-19-contact-tracing-app-details-use) this is how we’ll use the tracking tool. “Google and Apple are using Bluetooth LE signals for contact tracing. When two people are near each other, their phones can exchange an anonymous identification key, recording that they’ve had close contact. If one person is later diagnosed with COVID-19, they can share that information through an app. The system will notify other users they’ve been close to, so those people can self-quarantine if necessary. Ideally, this means you won’t have to reveal your name, location, or other personal data.”

Apple and Google stress that “user privacy and security is central to the design”. So here’s the best explanation as to how privacy will be protected that I’ve found.

[Ars Technica](https://arstechnica.com/information-technology/2020/04/apple-and-google-detail-bold-and-ambitious-plan-to-track-covid-19-at-scale/)

> But while mobile-based contact tracing may be more effective, it also poses a serious threat to individual privacy, since it opens the door to central databases that track the movements and social interactions of potentially millions, and possibly billions, of people. The platform Apple and Google are developing uses an innovative cryptographic scheme that aims to allow the contact tracing to work as scale without posing a risk to the privacy of those who opt into the system.
> 
> Privacy advocates—with at least one notable exception—mostly gave the system a qualified approval, saying that while the scheme removed some of the most immediate threats, it may still be open to abuse.
> 
> “To their credit, Apple and Google have announced an approach that appears to mitigate the worst privacy and centralization risks, but there is still room for improvement,” Jennifer Granick, surveillance and cybersecurity counsel for the American Civil Liberties Union, wrote in a statement. “We will remain vigilant moving forward to make sure any contact tracing app remains voluntary and decentralized, and used only for public health purposes and only for the duration of this pandemic.”
> 
> Unlike traditional contact tracing, the phone platform doesn’t collect names, locations, or other identifying information. Instead, when two or more users opting into the system come into physical contact, their phones use BLE to swap anonymous identifier beacons. The identifiers—which in technical jargon are known as rolling proximity identifiers—change roughly every 15 minutes to prevent wireless tracking of a device.
> 
> As the users move about and come into proximity with others, their phones continue to exchange these anonymous identifiers. Periodically, the users’ devices will also download broadcast beacon identifiers of anyone who has tested positive for COVID-19 and has been in the same local region.
> 
> In the event someone reports to the system that she has tested positive, her phone will contact a central server and upload identifiers of all the users she has come into contact with over the last 14 days. The server then pushes a notification to the affected users.