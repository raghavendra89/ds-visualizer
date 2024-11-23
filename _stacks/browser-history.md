---
layout: visualizer
title: Design Browser History
---

#### Problem:

You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps. So these operations can be performed on the browser history:

- visit(url): Visits a URL given as string
- forward(steps): Forward the given number of steps
- backward(steps): Backward the given number of steps

When a set of operations is given, find the active page the user is on at the end of these operations.

Example: 

**Input Array (Browser operations):**

    [
        'visit(x.com)'
        'visit(fb.com)'
        'visit(ytb.in)'
        'back(1)'
        'back(1)'
        'forward(1)'
        'visit(one.com)'
        'back(2)'
    ]

**Output (The current page user is on):** 'x.com'

#### Algorithm:

We can solve this using two stacks. When the user performs `visit` or `forward` operations we can keep track of the active urls in stack 1. And when the user performs the `back` operation then we need to pop the urls from stack 1 and push them onto stack 2. The urls in the stack 2 will be used to perform the `forward` opearion. Finally the url at the top of the stack 1 is the current active url.

**Steps:**

1. Loop through the operations and perform these steps:
    1. For `visit` operation push the url to the stack 1.
    2. For `backward` operation pop the url from stack 1 and push to stack 2.
    3. For `forward` operation pop the url from stack 2 and push to stack 1.
2. Finally the url at the top of the stack 1 is the current active url.

#### Solution & Visualize:

The animation/visualization below demonstrates how the algorithm to reverse a string works. Feel free to experiment by changing the input strings.
