---
layout: bt-visualizer
title: Path Sum
inputs:
  - type: number
    label: Please enter the target sum
default_nodes: 1,2,3,4,null,6,7,8,9,null,null,null,13
---

#### Problem:

Given a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

#### Algorithm:

1. Keep track of `nodes` array to store the nodes that form the path with the target sum. Use a flag `exists`to indicate whether a valid path exists or not.
2. Traverse the binary tree and perform the following operations:
    1. At each node, add the node's value to the running sum.
    2. When a leaf node is reached (both `left` and `right` children are null), check if the running sum is equal to `targetSum`.
        - If the sum is equal to `targetSum`, the current path is the answer. Return the nodes along with the value `TRUE` for the `exists` flag.
        - If the sum does not equal to `targetSum`, remove the current leaf node from `nodes` list and continue traversal.
3. Finally, return the `exists` flag and `nodes` array representing the path that sums to the targetSum.

This algorithm traverses the binary tree, calculating the sum of nodes along the path. When a leaf node is reached, it checks if the accumulated sum equals the target sum. If it does, it returns the path; if not, it continues traversing the other branches. The process is repeated until a valid path is found or all paths have been explored.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.