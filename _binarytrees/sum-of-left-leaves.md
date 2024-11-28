---
layout: bt-visualizer
title: Sum of Left Leaves
default_nodes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
---

#### Problem:

Given the root of a binary tree, return the sum of all left leaves. Left leaf is a leaf node which has no children and is the left child of another node.

#### Algorithm:

1. Perform an inorder traversal of the binary tree.
2. During the traversal, use a flag to identify left nodes. Add a left node to the sum if it has no child nodes (i.e., it is a leaf node).
3. Return the total sum.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.