---
layout: visualizer
title: Find the index of closing bracket for a given opening bracket
inputs:
  - type: string
    label: Please enter the input string
    regex: .?\[.+\]
    default: "[X[YZ][AB]][MN]"
  - type: number
    label: Please enter the start index
    default: 0
---

#### Problem:

Given a string containing square brackets, if the index of an opening bracket is provided, find the index of its corresponding closing bracket. Assume that only square brackets ([ and ]) are used.

Example: 

**Input string:** '[X[YZ][AB]][MN]'

**Input (Opening bracket Index):** 0

**Output:** 10

The closing bracket at index 10 matches the opening bracket at index 0.

**Input (Opening bracket Index):** 6

**Output:** 9

The closing bracket at index 9 matches the opening bracket at index 6.

#### Algorithm:

To solve this, we will start from the given index of the opening bracket and push brackets onto the stack. When we encounter a closing bracket, we pop the opening bracket from the stack. If the stack becomes empty after popping, the current index will be the index of the closing bracket.

**Steps:**

1. Loop through the characters starting from the index of the opening bracket.
2. Push all opening brackets onto the stack.
3. When a closing bracket is encountered, pop the top element from the stack. If the stack is empty after this operation, the current index will be the index of the closing bracket.

#### Solution & Visualize:

The animation/visualization below demonstrates how the algorithm to reverse a string works. Feel free to experiment by changing the input strings.
