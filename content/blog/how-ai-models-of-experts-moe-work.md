---
title: How AI Models of Experts (MoE) Work
description:
date: 2025-11-10T10:46:20Z
tags:
   - posts
layout: layouts/post.njk
---  

Hey friends, I came across an interesting [9to5Mac article](https://9to5mac.com/2025/11/07/how-the-gemini-powered-siri-might-work-under-the-hood/) explaining how Siri might work once it’s powered by Google’s Gemini model. It introduced me to the concept of a mixture of experts (MoE), which clarified how large AI models handle various types of questions efficiently.

An MoE model consists of smaller specialized networks, known as “experts.” Instead of running the entire model every time, only the relevant experts are activated based on the input. This approach allows the system to respond faster and use less computing power.

The [video from IBM](https://www.youtube.com/watch?v=sYDlVVyJYn4) linked in the article does an excellent job of explaining this visually. It gave me a clearer mental picture of how AI works behind the scenes—especially how it routes tasks to the right “experts” instead of trying to manage everything simultaneously.

I’m sharing this because it’s one of the clearest explanations I’ve seen about how modern AI models actually function, and it finally helped me understand the concept.