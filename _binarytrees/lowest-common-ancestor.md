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

1. If the current node is `null`, return `null`
2. If the current node is either `p` or `q` return the current node, because it could be an ancestor. So return the current node. Use an array `foundNodes` to keep track if both nodes to be searched are found.
2. Recursively traverse both the left and right subtrees, storing the results from both subtrees. Continue this traversal until the foundNodes array has a length of 2 (indicating both nodes have been found).
3. If both `left` and `right` are not null, then the current node is LCA. (Because `p` and `q` are found in both sides.)
4. If only one subtree return a node, then propogate it upwward.

The algorithm works on the principle that if nodes `p` and `q` are in different subtrees, the current node is their Lowest Common Ancestor (LCA). If both `p` and `q` are in the same subtree, the ancestor must be located in the same subtree.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.