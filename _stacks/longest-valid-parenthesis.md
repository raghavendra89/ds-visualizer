---
layout: visualizer
title: Longest Valid Parentheses
inputs:
  - type: string
    label: Please enter the input string
    regex: ^([\(-\)]+)$
---

#### Problem:

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

Example: 

**Input String:** '('

**Output:** 0

There is no closing parentheses.

**Input String:** '))'

**Output:** 0

There is no valid parentheses substring.

**Input String:** '))()'

**Output:** 2

The longest valid parentheses substring is "()".

**Input String:** ')()())(()()())'

**Output:** 8

The longest valid parentheses substring is "(()()())".

#### Algorithm:

To solve this, we use a stack to find the valid parentheses substring. When encountering an unmatched closing parenthesis, we check for the next valid substring. By keeping track of the length and the starting index of each valid substring, we can identify the longest valid substring.

**Steps:**

1. Loop through the string and push all opening parentheses onto the stack until a closing parenthesis is encountered.
2. For every opening parenthesis, increment the startIndex.
3. When a closing parenthesis is encountered:
    1. If the stack is not empty, pop the opening parenthesis from the stack. This forms a matching parentheses pair. Decrement the startIndex and increase the length of the valid substring by 2.
    2. If the stack is empty, it means the valid substring ends at the current index. Continue searching for the next valid substring from the next index.
4. Finally, find the maximum length among all valid substrings.

#### Solution & Visualize:

The animation/visualization below illustrates the algorithm. Feel free to experiment with different input values.
