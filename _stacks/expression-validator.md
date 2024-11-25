---
layout: visualizer
title: Check for valid parenthesis
inputs:
  - type: string
    label: Please enter the input string
    regex: ^([\d\s+\-\*\/\(\)\[\]\{\}]+)$
---

#### Problem:

Given an expression string containing the bracket characters {, }, (, ), [, and ], check whether the expression is valid. A valid expression must have matching pairs of brackets and maintain the correct order.

Example: 

**Input String:** '{[()]}'

**Output:** TRUE

The output is TRUE because all the brackets are properly closed.

**Input String:** '{[(])}'

**Output:** FALSE

The output is FALSE because the bracket pairs are not closed in the correct order.

**Input String:** '[5 * (6 + 7)]'

**Output:** TRUE

The output is TRUE because all the brackets are properly closed.

**Input String:** '5 + [7 * (8 + 5])'

**Output:** FALSE

The output is FALSE because the square bracket is closed before the parenthesis.

#### Algorithm:

In this problem, we need to ensure that each opening bracket is closed by the corresponding type of closing bracket and that the brackets are closed in the correct order. Additionally, every closing bracket must have a matching opening bracket.

**Steps:**

1. Loop through the characters in the expression and push all opening brackets onto the stack.
2. When encountering a closing bracket, check if the opening bracket at the top of the stack corresponds to it.
    1. If a matching opening bracket is found at the top of the stack, remove it and continue the loop.
    2. If no matching opening bracket is found, the brackets are not properly closed, and the expression is invalid.
3. At the end of the loop, if the stack is not empty, it indicates that there are unmatched opening brackets, so the expression is invalid.

#### Solution & Visualize:

The animation/visualization below illustrates the algorithm. Feel free to experiment with different input values.
