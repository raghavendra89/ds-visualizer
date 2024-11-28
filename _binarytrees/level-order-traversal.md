---
layout: bt-visualizer
title: Binary Trees - Level Order Traversal
default_nodes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
no_output: true
---

> Level order traversal is Breadth-first-search(BFS) algorithm, where the nodes at the same level are processed before moving to the next level.

Level-order traversal is a method of visiting all the nodes in a binary tree, where nodes are processed level by level. In other words, all nodes at the same level are processed sequentially from left to right, before moving down to the next level. You can think of this as traversing the tree from top to bottom, processing each level from left to right.

**Traversing Steps:**
1. Start with the root node.
2. Process the nodes at the current level from left to right.
3. Move to the next level, and repeat the process for each level.

#### Algorithm:

1. Create an empty Queue.
2. Enqueue the root node.
3. Loop through the Queue until it is not empty and perform the below operations:
    1. Dequeue a node and visit it.
    2. Enqueue the left child of the node (if it exists).
    3. Enqueue the right child of the node (if it exists).

#### Characteristics of Level order Traversal
- Level order traversal is useful in tree serialization and deserialization.
- A queue data structure is used to implement the level order traversal.
- **Time Complexity:** Level order traversal of a tree with 𝑛 nodes takes 𝑂(𝑛) time, as it visits each node exactly once.

#### Solution & Visualize:
The animation/visualization below demonstrates how the Levelorder traversal works.
