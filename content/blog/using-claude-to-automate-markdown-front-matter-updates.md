---
title: Using Claude to automate markdown front matter updates
description:
date: 2026-03-01T10:42:32Z
tags:
   - posts
layout: layouts/post.njk
---

The ldstephens.net site was migrated from WordPress using the 11ty Base Blog and the WordPress import plugin. While I initially used the base blog, I've since replaced it with my own custom 11ty build.

With around 50 markdown files exported from WordPress, that I wanted to add to this site, I needed to transform their front matter into a new format compatible with the 11ty site. Instead of manually editing each file, I used Claude to automate the process.

**The Problem**

The exported files had front matter that looked like this:

```yaml
---
title: 12 Months with the iPad Mini
authors:
   - name: ldstephens
     url: https://gravatar.com/ldstephensblog
date: 2024-01-23T15:30:32.000Z
metadata:
   categories:
      - Apple
      - iPad
   tags: []
   uuid: 11ty/import::wordpressapi-hosted::...
   type: wordpressapi-hosted
   url: http://ldstephens.net/2024/01/23/...
---
```

I needed it transformed to a clean Eleventy-compatible format:

```yaml
---
title: 12 Months with the iPad Mini
description:
date: 2024-01-23T15:30:32.000Z
tags:
   - posts
layout: layouts/post.njk
---
January 23, 2024
```

The requirements were:
- Keep the original `title` and `date`
- Remove `authors`, `metadata`, and all other fields
- Add `description` (empty), `tags: [posts]`, and `layout: layouts/post.njk`
- Add the date as a human-readable line at the top of the post body (e.g. `January 23, 2024`)
- Handle files that already had the correct front matter — those just needed the date added to the body

**What Claude Did**

Claude wrote a Python script that processes an entire folder of markdown files automatically. The script handles three scenarios:

1. **Old format** — transforms the front matter and adds the human-readable date to the body
2. **Already correct format** — leaves the front matter untouched and just adds the date to the body
3. **Already processed** — skips the file entirely, making the script safe to re-run

The script gives clear output as it runs, telling you exactly what it did to each file.

**Running the Script**

With the script saved to `~/scripts/` and the posts in `~/2024_ldstephensnet/`, the command was simply:

```bash
python3 ~/scripts/transform_posts.py ~/2024_ldstephensnet
```

**Takeaway**

What would have been a tedious, error-prone manual task across 50+ files was solved with a short conversation and a Python script. Claude was able to understand the before/after requirements from a single example, handle edge cases like already-updated files, and deliver a script that worked correctly.
