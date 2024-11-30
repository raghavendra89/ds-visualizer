---
layout: bt-visualizer
title: Find the lowest common ancestor of two given nodes
inputs:
  - type: number
    label: Please enter the p node value
  - type: number
    label: Please enter the q node value
default_nodes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
---

#### Problem:

Given a binary tree, find the lowest common ancestor of two given nodes. All the nodes in the tree will be unique.

> The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

#### Algorithm:

1. If the tree is empty return 0.
2. Traverse the left and right subtrees and recursively calculate the height.
    1. Calcualte the left subtree height recursively.
    2. Calcualte the right subtree height recursively.
3. Determine the maximum of left and right subtree heights and add `1` to it for the current node.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.