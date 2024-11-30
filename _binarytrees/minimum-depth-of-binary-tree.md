---
layout: bt-visualizer
title: Find the minimun depth of a binary tree
default_nodes: 1, 2, 3, 4, 5, null, null, null, null, 10
---

#### Problem:

Given a binary tree, find the minimun depth of the tree. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

#### Algorithm:

1. Traverse the binary tree and perform the following operations
    1. If the node is a leaf (both left and right children are null), return a depth as 1.
    2. If the node is not a leaf and one of the subtrees is null, recursively traverse the other subtree to find its minimum depth.
    3. If both subtrees are present, recursively find the minimum depth between the two subtrees.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.