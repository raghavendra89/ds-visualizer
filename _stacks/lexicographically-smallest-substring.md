---
layout: visualizer
title: Find the lexicographically smallest substring with distinct characters
inputs:
  - type: string
    label: Please enter the input string
    regex: ^[a-z]+$
    feedback: The string should only contain the lowercase English letters.
---

#### Problem:

Given a string, find the lexicographically smallest subsequence that can be formed using all distinct characters only once from the given string. The input string will only contain lowercase English letters.

Example: 

**Input string:** 'bcabc'

**Output:** 'abc'

**Input string:** 'cbacdcbc'

**Output:** 'acdb'

#### Algorithm:

To solve this, we will start from the given index of the opening bracket and push brackets onto the stack. When we encounter a closing bracket, we pop the opening bracket from the stack. If the stack becomes empty after popping, the current index will be the index of the closing bracket.

**Steps:**

1. Loop through the characters starting from the index of the opening bracket.
2. Push all opening brackets onto the stack.
3. When a closing bracket is encountered, pop the top element from the stack. If the stack is empty after this operation, the current index will be the index of the closing bracket.

#### Solution & Visualize:

The animation/visualization below demonstrates how the algorithm to reverse a string works. Feel free to experiment by changing the input strings.
