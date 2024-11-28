---
layout: bt-visualizer
title: Find the maximun depth or height of a binary tree
default_nodes: 
---

#### Problem:

Given a binary tree, find the maximun depth or height of a binary tree. The height of the tree is the number of vertices in the tree from the root to the deepest node.

#### Algorithm:

1. If the tree is empty return 0.
2. Traverse the left and right subtrees and recursively calculate the height.
    1. Calcualte the left subtree height recursively.
    2. Calcualte the right subtree height recursively.
3. Determine the maximum of left and right subtree heights and add `1` to it for the current node.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.