
Yesterday, I discovered that redirects from the old site to the new weren’t working. In my ldstephens 11ty project, the old URLs like [ldstephens.net/2023/01/13/slug/](https://ldstephens.net/2023/01/13/slug/) weren’t redirecting to the new ones at [ldstephens.net/blog/slug/](https://ldstephens.net/blog/slug/). Turns out, the redirect code was wrong. Here’s what I had:

```
/2016/*/:slug/     /blog/:slug/  301!
/2017/*/:slug/     /blog/:slug/  301!
/2018/*/:slug/     /blog/:slug/  301!
/2019/*/:slug/     /blog/:slug/  301!
/2020/*/:slug/     /blog/:slug/  301!
/2021/*/:slug/     /blog/:slug/  301!
/2022/*/:slug/     /blog/:slug/  301!
/2023/*/:slug/     /blog/:slug/  301!
/2024/*/:slug/     /blog/:slug/  301!
```

After a little research, I found it’s better to handle redirects in netlify.toml instead of using a _redirects file. So I updated the setup, added the correct redirects to netlify.toml and deleted the _redirects file.

Here’s the new code:

```
[[redirects]]
  from = "/2016/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true

[[redirects]]
  from = "/2017/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true

[[redirects]]
  from = "/2018/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true

[[redirects]]
  from = "/2019/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true

[[redirects]]
  from = "/2020/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true

[[redirects]]
  from = "/2021/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true

[[redirects]]
  from = "/2022/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true

[[redirects]]
  from = "/2023/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true

[[redirects]]
  from = "/2024/:month/:day/:slug/"
  to = "/blog/:slug/"
  status = 301
  force = true
```

Now all the old links are redirecting like they should. Another lesson learned. 