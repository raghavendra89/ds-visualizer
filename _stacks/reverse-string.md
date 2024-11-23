---
layout: visualizer
title: Reverse a String Using Stack
inputs:
  - type: string
    label: Please enter the input string
---

#### Problem:

Given a string, reverse it using stack. Do not use any built in string or array reverse functions.

Example: 

**Input String:** JavaScript

**Output String:** tpircSavaJ

#### Algorithm:

This is a relatively simple problem. The approach involves pushing all the characters of the string onto a stack and then reading them by popping them off. Since a stack follows the Last-In-First-Out (LIFO) principle, the string is automatically reversed during the pop operations.

**Steps:**

1. Create an empty stack and push all the characters of the string onto it.
2. Pop the characters from the stack one by one and concatenate them to form the reversed string.

#### Solution & Visualize:

The animation/visualization below demonstrates how the algorithm to reverse a string works. Feel free to experiment by changing the input strings.
