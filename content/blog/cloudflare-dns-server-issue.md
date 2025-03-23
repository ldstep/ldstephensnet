---
title: Cloudflare 1.1.1.1 DNS server issue
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2019-09-04T13:32:15.000Z
metadata:
  categories:
    - Hardware
    - How To
    - Mac
    - macOS
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::http://ldstephens.net/?p=1857
  type: wordpressapi-hosted
  url: http://ldstephens.net/2019/09/04/cloudflare-dns-server-issue/
---
I thought I was having intermittent WiFi dropouts with my MacBook Pro. It started all of a sudden a couple of days ago. The odd thing is, it wasn’t happening on any other devices or my wife’s new MacBook Air.

It was getting frustrating. Websites would take forever to load. Sometimes they would time out. I rebooted my MacBook and turned WiFi on and off. I rebooted my modem and Eero. I ran a speedtest and that also checked good. And after all that the issue persisted.

At a loss for what to do next, I finally remembered that I’m using [Cloudflare’s 1.1.1.1 DNS](https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/) servers. Could that be it?

Yes! I switched back to my ISP’s DNS servers. After doing that everything was working as it should work. I then switched to [OpenDNS](https://use.opendns.com/) servers and they worked fine as well.

I’m guessing Cloudflare is having some sort of an unresolved issue with there 1.1.1.1 servers.