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

1. Perform an inorder traversal of the binary tree.
2. During the traversal, use a flag to identify left nodes. Add a left node to the sum if it has no child nodes (i.e., it is a leaf node).
3. Return the total sum.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.