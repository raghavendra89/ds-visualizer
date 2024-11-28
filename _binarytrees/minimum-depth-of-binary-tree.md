---
layout: bt-visualizer
title: Find the minimun depth of a binary tree
default_nodes: 1, 2, 3, 4, 5, null, null, null, null, 10
---

#### Problem:

Given a binary tree, find the minimun depth of the tree. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

#### Algorithm:

1. Traverse the binary tree and perform the below operations
    1. If it is a leaf node, then return depth as 1.
    2. If not leaf node and one of the subtree is null, then traverse the other tree and find the depth.
    3. If both subtrees are present, then recur and find the minimum of two depths.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.