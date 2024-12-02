---
layout: visualizer
title: Sort A Given Stack
inputs:
  - type: array
    label: Please enter the input array
    default: 36, 9, 22, 75, 92
---

#### Problem:

Given a stack of integers, sort it in ascending order.

Example: 

**Input Array:** [36, 9, 22, 75, 92, 23]

**Output Array:** [9, 22, 23, 36, 75, 92]

#### Algorithm:

To solve this, we will use an additional temporary stack. We will pop elements from the input stack and push them to the temporary stack, comparing each element with those already in the temporary stack to maintain the correct order.

**Steps:**

1. Create a temporary stack, tempStack.
2. While the input stack is not empty, do the following:
    1. Pop an element from the input stack and call it temp.
    2. While the temporary stack is not empty and the top element of tempStack is greater than temp, pop elements from tempStack and push them back to the input stack.
    3. Push temp into tempStack.
3. After the loop ends, the sorted elements will be in tempStack.

#### Solution & Visualize:

The animation/visualization below demonstrates how the algorithm to reverse a string works. Feel free to experiment by changing the input strings.
