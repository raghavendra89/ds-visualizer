---
layout: bt-visualizer
title: Maximum Sum Path
default_nodes: 1,2,3,4,null,6,7,8,9,null,null,null,13
---

#### Problem:

Given a binary tree, find the maximum sum path from a leaf to a root.

#### Algorithm:

1. Keep track of `maxSum` and the `nodes` array. The `nodes` array will store the nodes that form the maximum sum path.
2. Traverse the tree, recursively calculating the sum of the left and right subtrees.
3. At each node, add the node's value to the running sum and include the node in the `currentPathNodes` list.
4. When a leaf node is reached (both `left` and `right` children are null), compare the sum of the current path to the `maxSum`.
    1. If sum of the current path is greater than the `maxSum`, update `maxSum` to this new sum. And set the `nodes` array to `currentPathNodes`.
    2. If sum is less than the `maxSum`, remove this leaf from the `currentPathNodes` (pop the node) and continue traversing the other subtree.
5. Finally return the `maxSum` and `nodes` array representing the path of the maximum sum.

This algorithm recursively explores each path, tracking the sum and nodes involved. When a leaf node is reached, it checks if the current path has a greater sum than the previously recorded maximum. If so, it updates the maximum sum and the corresponding path.

#### Solution & Visualize:
The animation/visualization below demonstrates how the algorithm works.