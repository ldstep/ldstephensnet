---
title: BBEdit Markdown Text Filters
description:
date: 2025-06-04T14:41:02Z
tags:
layout: layouts/post.njk
---

I’ve used [BBEdit](https://www.barebones.com/products/bbedit/) on and off over the years. Remember TextWrangler? It’s never been my primary Markdown writing app, though I’ve always wanted it to be.

I was accustomed to apps like iA Writer, Typora, MarkEdit, and Ulysses—all of which come with built-in keyboard shortcuts for common Markdown syntax: ⌘B for bold, ⌘I for italic, ⌘K for a link, and so on. It’s part of what makes those editors feel so fluid for writing.

BBEdit, on the other hand, doesn’t include those shortcuts out of the box. It treats Markdown like any other plain text, you have to type the syntax manually. That’s where it always fell short for me.

Lately, I’ve learned that I can add those missing features using Text Filters.

This is all new to me. Text Filters in BBEdit are little scripts that transform selected text. You write them in shell, AppleScript, Python, Ruby, or whatever you like. BBEdit passes the selected text to your script and replaces it with the output returned by the script.

With help from ChatGPT, I’ve created filters to wrap selected words in Markdown link syntax like \[Selected Word](). I’ve also added keyboard shortcuts for the usual Markdown formatting ⌘B for bold, ⌘I for italic, ⌘K for links, just like in other editors.

Here’s a list of the scripts I’ve created:

-  md-safari-tabs-link.scpt
-  md-numbered-list.sh
-  md-list.sh
-  md-link.scpt
-  md-link-wrapper.sh
-  md-link-current-tab.scpt
-  md-link-clipboard-url.scpt
-  md-italic.sh
-  md-inline-code.sh
-  md-footnote.scpt
-  md-code-block.sh
-  md-bold.sh
-  md-blockquote.sh

Now I can hit ⌘K to wrap selected text in \[Selected Text](), ⌘B for bold, ⌘I for italic just like in the apps I used to rely on. Now it’s also in BBEdit.

### Update - BBEdit Markdown Text Filters available on GitHub

05 June 2025

After I published the [post](https://ldstephens.net/blog/bbedit-markdown-text-filters/) yesterday, several people contacted me and wanted to know if I could make the scripts available for download. In light of that, I put them on GitHub. You can access them here:

[https://github.com/ldstep/bbedit-md-text-filters/tree/main](https://github.com/ldstep/bbedit-md-text-filters/tree/main)
