---
title: Get a local 11ty project on GitHub without the command line
description:
date: 2025-12-23T11:25:27Z
tags:
   - posts
layout: layouts/post.njk
---

I like tinkering with 11ty projects for learning and fun. Most of the time I work on them locally, and sometimes I later decide I want the project on GitHub. As someone who isn’t a developer and isn’t comfortable with the command line, I need a different option.

The usual advice looks something like this:

```
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/USERNAME/REPO.git
    git push -u origin main
```

That’s fine if you live in the terminal. I don’t.

Here’s what I did instead using GitHub Desktop:

1. Created a new repository on GitHub with just a README file.
2. Opened the repository locally using GitHub Desktop, which created a local copy.
3. Renamed my original project folder and copied all of its files into the new repository folder.
4. Committed the changes and pushed them to GitHub.
    
That’s it. No command line.