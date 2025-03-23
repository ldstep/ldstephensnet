---
title: How to get the trackpad to ignore touches while typing
authors:
  - name: ldstephens
    url: https://gravatar.com/ldstephensblog
    avatarUrl: >-
      https://0.gravatar.com/avatar/0219e8318f1f4229ebe26084e7253765017f43ca0c631be37dc6d0b8ad6e40a4?s=96&d=identicon&r=G
date: 2020-07-27T18:32:43.000Z
metadata:
  categories:
    - Alfred
    - Hardware
    - How To
    - Keyboard Maestro
    - Mac
    - Productivity
  tags: []
  uuid: 11ty/import::wordpressapi-hosted::https://ldstepblog.wordpress.com/?p=2322
  type: wordpressapi-hosted
  url: >-
    http://ldstephens.net/2020/07/27/how-to-get-the-trackpad-to-ignore-touches-while-typing/
---
Do you get frustrated with how the slightest touch of the palm of your hand or thumb on the trackpad causes the text cursor to jump to a different position when you’re typing? I have and it’s been bothering me for some time.

Here’s how I solved this problem. I turned off “Tap to click” in the Trackpad Settings. Now when I’m typing and my palm or thumb accidentally touches the trackpad the text cursor doesn’t jump to a different position. I’m guessing this setting is on by default because I don’t recall having ever turned it on.

When I’m not typing, I like having “Tap to click” turned on. Since it’s not convenient to go into Trackpad Setting to turn it on and off all the time I looked for an AppleScript that I could use to toggle it on and off.

I found this one and it works fine.

Credit: [Wojtek Witkowski on Github](https://gist.github.com/pugson/d98fd4f316c13947afbb2602519469ed)

```
tell application "System Preferences"
	activate
end tell
tell application "System Events"
	tell process "System Preferences"
		delay 1
		click the menu item "Trackpad" of the menu "View" of menu bar 1
		delay 1
		click the radio button "Point & Click" of the first tab group of window "Trackpad"
		click checkbox 3 of tab group 1 of window "Trackpad"
	end tell
end tell
tell application "System Preferences"
	quit
end tell
```

I’m using this script in Keyboard Maestro with the hotkey ⌘+⌥+9 to toggle the setting on and off. This will also work with an Alfred Workflow.