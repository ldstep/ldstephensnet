---
title: It's too cold to go outside, so I learned Python instead
description:
date: 2026-02-07T10:55:23Z
tags:
   - posts
layout: layouts/post.njk
---

On a recent podcast, I heard [Jason Snell(https://en.wikipedia.org/wiki/Jason_Snell_(writer)) mention that he had created a simple Python app to automate a task on his Mac. Inspired by that, and since the weather is to fucking cold to be outside, I decided to explore Python and how I could use it to automate some of my own tasks. I've put together three Python scripts that streamline my daily note-taking and journaling workflow. They are simple, automated, and integrate seamlessly with Alfred. Here's what each one does:

**Daily Note**

The `daily_note.py` script creates a new note each day in my FSNotes folder. Every time it runs, it appends a timestamp, such as _3:42:36 PM_, to the current day's note. This is especially useful for tracking my work or simply noting my activity throughout the day.

The filenames are formatted as `2026-02-07 - Daily Note.md`, ensuring a fresh start each day.

**Monthly Journal**

My `monthly_journal.py` script works differently. Instead of creating daily files, it generates one journal file per month in my Writing folder. Each time I run the script, it adds a new entry with the full date and time: `#### 01 February 2026 02:14 PM.

The best feature is that it automatically opens the journal in MarkEdit, allowing me to begin writing immediately. It has become my preferred method for monthly reflections and longer-form entries.

**FSNotes Empty Trash**

The `empty_fsnotes_trash.py` script performs exactly as its name suggests: it empties the trash folder in FSNotes. Instead of manually searching for deleted notes, running this script instantly clears them. While a small thing, it helps maintain a tidy and organized notes app.

**Running Them With Alfred**

All of these scripts are located in my `~/scripts` folder, and I can execute them quickly using an Alfred workflow.