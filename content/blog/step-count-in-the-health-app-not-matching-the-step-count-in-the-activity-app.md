---
title: Step count in the Health app not matching the step count in the Activity app
authors:
   - name: ldstephens
     url: https://gravatar.com/ldstephensblog
     avatarUrl: >-
        https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2019-05-05T21:37:10.000Z
metadata:
   categories:
      - Apps
      - How To
      - iPhone
   tags: []
   uuid: 11ty/import::wordpressapi-hosted::http://ldstephens.net/?p=1757
   type: wordpressapi-hosted
   url: >-
      http://ldstephens.net/2019/05/05/step-count-in-the-health-app-not-matching-the-step-count-in-the-activity-app/
---

I have a goal of 10,000 steps every day. I've been doing this ever since I quit bike racing back in 2011. Before my Apple Watch, I tracked my steps with my Garmin Forerunner 35 and the Garmin Connect iOS app. Now I'm tracking my steps on my Apple Watch and the Activity and Health apps.

One thing that I noticed was that my step count in the Activity app was different than the step count in the Health app. Curious, I set out to see why this was happening. By the way, I noticed that a lot of folks were wondering the same thing.

Here's how I fixed this issue. The answer is in this Apple Support article [Manage Health data on your iPhone, iPod touch, or Apple Watch](https://support.apple.com/en-us/HT204351). The answer is in the Prioritize data sources section of the article.

> **Prioritize data sources**

> Here's how to choose the sources that Health uses first:

1. Open the Health app and tap the Health Data tab.
2. Tap a category, like Activity.
3. Tap a data type, like Steps.
4. Tap Data Sources & Access, then tap Edit.
5. Touch and hold next to a data source, then drag it up or down in the list.
6. To turn off a data source so that it doesn't contribute any more data for that category, tap the checkmark next to the source.
7. Tap Done.

> If multiple sources contribute the same data type, then the data source at the top will take priority over other sources. Any new apps or devices that you add go to the top of the list automatically, above your iPhone or iPod touch.

Once I moved my Apple Watch to the top of the list my steps in the Health app matched my steps in Activity app.
