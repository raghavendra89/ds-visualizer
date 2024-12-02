---
layout: visualizer
title: Find the lexicographically smallest substring with distinct characters
inputs:
  - type: string
    label: Please enter the input string
    regex: ^[a-z]+$
    default: bcabc
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

1. Loop through the characters of the string in reverse order to construct the smallest subsequence.
2. If duplicate characters are encountered, compare the current character with the first character of the subsequence.
    1. If the current character is larger than the first character of the subsequence, ignore it.
    2. If the current character is smaller or equal, prepend it to the subsequence and remove the duplicate character already present in the subsequence.
3. After completing these steps, the resulting subsequence will be the smallest possible subsequence.

#### Solution & Visualize:

The animation/visualization below demonstrates how the algorithm to reverse a string works. Feel free to experiment by changing the input strings.
