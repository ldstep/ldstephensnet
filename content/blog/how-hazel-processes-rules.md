---
title: How Hazel processes rules 
description:
date: 2025-06-05T12:00:25Z
tags:
layout: layouts/post.njk
---

I [went paperless](https://ldstephens.net/blog/ive-gone-paperless/) several years ago, and [Hazel](https://www.noodlesoft.com/) is part of the process. The other day, while processing bills, Hazel misidentified a bank statement as a Verizon bill. I fiddled with the rules but got nowhere, so I asked AI for help. The fix? Reorder the rules: move the bank statement rule above the Verizon one. Learned something new!

How Hazel rule order works:

- Rules are evaluated sequentially for each file
- Once a file matches a rule and gets processed, Hazel typically stops processing that file (unless you have specific settings that allow continued processing)
- Files that don't match the first rule get passed down to the second rule, and so on

