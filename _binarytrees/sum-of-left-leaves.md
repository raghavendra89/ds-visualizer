---
layout: bt-visualizer
title: Sum of Left Leaves
default_nodes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
---

#### Problem:

Given the root of a binary tree, return the sum of all left leaves. Left leaf is a leaf node which has no children and is the left child of another node.

#### Algorithm:

1. Traverse the binary tree and perform the following operations;
    1. During the traversal, use a flag `isLeftNode` to identify left nodes.
    2. Add the value of a left child node to the sum if it is a leaf node (i.e., it has no child nodes).
3. After completing the traversal, return the total sum of all leaf left nodes.

This algorithm traverses the binary tree, checking each left child node. If the left child is a leaf (no children), its value is added to the total sum. The sum of all such leaf left nodes is then returned.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.