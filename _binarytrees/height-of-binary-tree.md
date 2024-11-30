---
layout: bt-visualizer
title: Find the maximun depth or height of a binary tree
default_nodes: 1, 2, 3, 4, null, null, null, 8, 9
---

#### Problem:

Given a binary tree, find the maximun depth or height of a binary tree. The height of the tree is the number of vertices in the tree from the root to the deepest node.

#### Algorithm:

1. If the tree is empty, return `0` (indicating no height).
2. Traverse the left and right subtrees, recursively calculating the height of each.
    1. Recursively calculate the height of the left subtree.
    2. Recursively calculate the height of the right subtree.
3. Determine the maximum height between the left and right subtrees, and add 1 to account for the current node’s height.

This approach calculates the height by recursively determining the heights of the left and right subtrees and returning the greater of the two, plus one for the current node.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.