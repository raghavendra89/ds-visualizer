---
layout: visualizer
title: Stock Span Problem
---

#### Problem:

Given a series of daily price quotes for a stock over N days, calculate the span of the stock’s price for each day. The span S(i) of the stock’s price on a given day i is defined as the maximum number of consecutive days before day i, including day i itself, for which the price of the stock on the current day is greater than or equal to the price on the previous days.

Example: 

**Input Array (Stock price):** [150, 120, 140, 150, 140, 145, 150]

**Output (Stock Span):** [1, 1, 2, 1, 1, 2, 4]

For the first value, 150, there are no previous values, so the stock span is 1. For the value 120, the previous value is 150, which is greater than 120, so the stock span is 1. However, for 140, the previous value 120 is smaller, and the stock span extends to 2, as 140 is greater than 120. Similarly, for 150 at the end of the array, there are 4 values (including the current value itself) that are less than or equal to 150, so the stock span is 4.

#### Algorithm:

To solve this, we need two stacks. We will loop through the price array and push each item onto Stack 1. For each item pushed onto Stack 1, we will check if the previous values are less than or equal to the current value being pushed. To achieve this, we can use a second stack (Stack 2). After finding the stock span for each value, we can restore Stack 1 by transferring the elements from Stack 2 back to it.

**Steps:**

1. Loop through the price array and push each price onto Stack 1.
2. For each price pushed onto Stack 1, compare it with the previous values in Stack 1.
3. To find the stock span, pop values from Stack 1 and push them onto Stack 2 until you find a value that is greater than the current price. The number of popped elements gives the stock span for that day.
4. Once Stack 1 is empty, push all the elements from Stack 2 back into Stack 1 and continue processing the next price in the array.

#### Solution & Visualize:

The animation/visualization below demonstrates how the algorithm to reverse a string works. Feel free to experiment by changing the input strings.
