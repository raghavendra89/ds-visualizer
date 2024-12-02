---
layout: visualizer
title: Find The Next Bigger Number
alt: Find The Next Greater Element
inputs:
  - type: array
    label: Please enter the input array
    default: 5, 9, 3, 21, 18
  - type: number
    label: Please enter the reference number
    default: 9
---

#### Problem:

Given an array of numbers, find the next bigger number to the right of a specified number. That is, for each number in the array, determine the next larger number that appears to its right. If no such number exists, return -1. You can assume that the array contains unique numbers.

Example: 

**Input Array:** [5, 9, 3, 21, 18]

**Input Number:** 5

**Output:** 9

9 is the next larger number after 5.

**Input Number:** 9

**Output:** 21

In the same array, after 9, we have 3, which is not larger than 9. Therefore, we move to the next element, 21, which is larger than 9, and 21 is returned.

**Input Number:** 21

**Output:** -1

After 21, there are no numbers larger than 21 in the array.

#### Algorithm:

To solve this, we need to traverse the array from the end and push each element onto the stack until we encounter the reference number. Once the reference number is found, we begin popping elements from the stack and checking if each popped number is greater than the reference number.

**Steps:**

1. Loop through the array from the end and push each element onto the stack until the reference number is encountered.
2. Once the reference number is found, pop elements from the stack and compare each with the reference number.
3. If a popped number is greater than the reference number, that number is the answer.
4. If the stack becomes empty and no greater number is found, return -1.

#### Solution & Visualize:

The animation/visualization below illustrates the algorithm. Feel free to experiment with different input values.
