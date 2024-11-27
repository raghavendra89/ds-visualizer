---
layout: bt-visualizer
title: Binary Trees - Preorder Traversal
---

> Preorder traversal technique follows the **Root -> Left -> Right** order.

Preorder traversal is another method for visiting all the nodes in a binary tree. The recursive approach is similar to that of inorder traversal, with the key difference being the order in which nodes are processed. In preorder traversal, the root node is processed first, followed by the left subtree, and then the right subtree.

#### Algorithm:

1. Visit the current root node
2. Treverse the left subtree (recursively).
3. Treverse the right subtree (recursively).

So, the current node is processed first, followed by a traversal of the left subtree. Once all the nodes in the left subtree are processed, the traversal then moves to the right subtree.

#### Characteristics of Preorder Traversal
- Preorder traversal is useful in creating a copy of tree. It is also used to create the prefix expressions of an expression tree.
- **Time Complexity:** Preorder traversal of a tree with 𝑛 nodes takes 𝑂(𝑛) time, as it visits each node exactly once.

#### Compare with other traversal algorithms

> [Inorder Traversal]({% link _binarytrees/inorder-traversal.md %}): **Left -> Root -> Right**
>
> [Postorder Traversal]({% link _binarytrees/postorder-traversal.md %}): **Left -> Right -> Root**

#### Solution & Visualize:
The animation/visualization below demonstrates how the Preorder traversal works.
