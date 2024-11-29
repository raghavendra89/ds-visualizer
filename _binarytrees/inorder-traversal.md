---
layout: bt-visualizer
title: Binary Trees - Inorder Traversal
default_nodes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
no_output: true
---

> An inorder traversal technique follows the **Left -> Root -> Right** order.

Inorder traversal is a method of visiting all the nodes in a binary tree in a specific order. In this traversal, the left subtree is processed first, then the root node is visited, and finally, the traversal continues through the right subtree.

#### Algorithm:

1. Treverse the left subtree (recursively).
2. Visit the current root node
3. Treverse the right subtree (recursively).

So the tree is traversed along the left subtree until the end node on the left subtree is reached. Then this end node is processed. Finally the same process is performed on the right subtree starting from this end node.

#### Characteristics of Inorder Traversal
- If the binary tree is a binary search tree, the inorder traversal will visit the nodes in ascending order.
- **Time Complexity:** Inorder traversal of a tree with 𝑛 nodes takes 𝑂(𝑛) time, as it visits each node exactly once.

#### Compare with other traversal algorithms

> [Preorder Traversal]({% link _binarytrees/preorder-traversal.md %}): **Root -> Left -> Right**
>
> [Postorder Traversal]({% link _binarytrees/postorder-traversal.md %}): **Left -> Right -> Root**


#### Solution & Visualize:
The animation/visualization below demonstrates how the Inorder traversal works.