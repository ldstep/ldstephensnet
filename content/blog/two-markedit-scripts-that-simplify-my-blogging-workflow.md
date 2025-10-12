---
title: Two MarkEdit scripts that simplify my blogging workflow
description:
date: 2025-10-12T15:36:49Z
tags:
   - posts
layout: layouts/post.njk
---

The other day, I [posted](https://ldstephens.net/blog/markedit-now-compatible-with-macos-tahoe/) that MarkEdit is now compatible with macOS 26. Since I plan to write more posts using MarkEdit, I wanted to automate part of my 11ty blogging workflow. To achieve this, I asked ChatGPT to help me write two simple shell scripts for Keyboard Maestro to streamline my 11ty blogging workflow.

The first script processes a finished post: it grabs the active markdown file in my Drafts folder that I'm working on, duplicates it, renames it with a slugified version of the title, and moves it to the Desktop where I can drop it into my 11ty site.

```
#!/bin/bash

DRAFTS_DIR="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Writing/Drafts"
DESKTOP_DIR="$HOME/Desktop"

# Find the most recently modified Markdown file
INPUT_FILE=$(find "$DRAFTS_DIR" -type f -name "*.md" -print0 | xargs -0 ls -t | head -n 1)

if [ -z "$INPUT_FILE" ]; then
  echo "No Markdown files found in $DRAFTS_DIR"
  exit 1
fi

# Get the title (first line, strip leading #)
TITLE=$(head -n 1 "$INPUT_FILE" | sed 's/^# //')

# Create slug (lowercase, spaces → hyphens, remove punctuation)
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9 ]//g' | tr ' ' '-')

if [ -z "$SLUG" ]; then
  echo "No valid title found in $INPUT_FILE"
  exit 1
fi

EXT="${INPUT_FILE##*.}"
NEW_FILE="${SLUG}.${EXT}"

# Duplicate and move to Desktop
cp "$INPUT_FILE" "$DESKTOP_DIR/$NEW_FILE"

# Open the new file in MarkEdit
open -a "MarkEdit" "$DESKTOP_DIR/$NEW_FILE"

echo "Moved and opened: $NEW_FILE"
```

The second script moves the finished post from my Drafts folder to the My Inbox folder where Hazel renames and moves it to the Published folder for archiving.

```
#!/usr/bin/env bash
set -euo pipefail

DRAFTS_DIR="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Writing/Drafts"
DEST_DIR="$HOME/My Inbox"

# Get the front window name of MarkEdit via System Events
WINNAME=$(osascript -e 'tell application "System Events" to if exists application process "MarkEdit" then tell application process "MarkEdit" to if (count of windows) > 0 then return name of front window' 2>/dev/null || true)

if [ -z "$WINNAME" ]; then
  echo "Error: couldn't read MarkEdit's front window name. Make sure MarkEdit is open and Keyboard Maestro has Accessibility permission."
  exit 1
fi

# Trim common title suffixes like " — MarkEdit" or " - MarkEdit"
BASENAME=$(printf '%s' "$WINNAME" | sed -E 's/[[:space:]]+[—-].*$//')

# Build a search pattern (allow .md if window title has no extension)
if [[ "$BASENAME" == *.* ]]; then
  SEARCH="$BASENAME"
else
  SEARCH="$BASENAME*"
fi

# Find the file in Drafts (case-insensitive)
TARGET=$(find "$DRAFTS_DIR" -type f -iname "$SEARCH" -print -quit || true)

# If not found, try searching by name without extension
if [ -z "$TARGET" ]; then
  BASE_NO_EXT="${BASENAME%.*}"
  TARGET=$(find "$DRAFTS_DIR" -type f -iname "${BASE_NO_EXT}.*" -print -quit || true)
fi

if [ -z "$TARGET" ]; then
  echo "Error: could not find a file matching \"$BASENAME\" in $DRAFTS_DIR"
  exit 1
fi

# Prepare destination path and avoid overwriting
DEST_PATH="$DEST_DIR/$(basename "$TARGET")"
if [ -e "$DEST_PATH" ]; then
  DEST_PATH="$DEST_DIR/$(date +%Y%m%d%H%M%S)-$(basename "$TARGET")"
fi

mv "$TARGET" "$DEST_PATH"

# Re-open the moved file in MarkEdit
open -a "MarkEdit" "$DEST_PATH"

echo "Moved and opened: $DEST_PATH"
```

Both run with a quick Keyboard Maestro hotkey. No Finder dragging, no manual renaming.