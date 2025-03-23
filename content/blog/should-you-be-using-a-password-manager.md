---
title: Results of one of the largest password re-use studies ever
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2020-07-14T13:48:37.000Z
metadata:
  categories:
    - How To
    - Security
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=2252
  type: wordpressapi-hosted
  url: http://ldstephens.net/2020/07/14/should-you-be-using-a-password-manager/
---
Last month a Turkish student Ata Hakçıl studying computer engineering at the University of Cyprus did [one of the largest password re-use studies ever](https://github.com/FlameOfIgnis/Pwdb-Public). He analyzed more than 1 billion-plus leaked credentials from data breaches at various companies. These data dumps have been around for several years, and have been piling up as new companies are getting hacked.

Out of the 1 Billion credentials, 168,919,919 were passwords. The most common password 123456 was spotted 7 million times per billion credentials. The average password length was 9.5 characters and 87.96% of passwords didn’t contain special characters. And 34.41% of all passwords end with digits, but only 4.522% of all passwords start with digits.

## [Cool Stats](https://github.com/FlameOfIgnis/Pwdb-Public#cool-stats)

-   From 1.000.000.000+ lines of dumps, `257.669.588` were filtered as either corrupt data(gibberish in improper format) or test accounts.
-   1 Billion credentials boil down to `168.919.919` passwords, and `393.386.953` usernames.
-   Most common password is `123456`. It covers roughly `0.722%` of all the passwords. (Around 7 million times per billion)
-   Most common 1000 passwords cover `6.607%` of all the passwords.
-   With most common 1 million passwords, hit-rate is at `36.28%`, and with most common 10 million passwords hit rate is at `54.00%`.
-   Average password length is `9.4822` characters.
-   12.04% of passwords contain special characters.
-   28.79% of passwords are letters only.
-   26.16% of passwords are lowercase only.
-   13.37% of passwords are numbers only.
-   34.41% of all passwords end with digits, but only 4.522% of all passwords start with digits.

Here’s my takeaway from this:

1.  Massive amounts of people need to start using a password manager. This would allow for longer and more complex passwords and eliminate the need to re-use them.
2.  Only 12.89% of passwords contain special characters and only 4.52% of passwords start with a digit. So pick a password that starts with a number and includes special characters to avoid brute forcers.

If you’re not using a password manager then get started now. I’m using is [Bitwarden](https://bitwarden.com). Bitwarden is open source, simple to use and best of all it’s FREE.

If you would like to see if any of your passwords have been breached you can check them at [HaveIBenPwned](https://haveibeenpwned.com/Passwords).