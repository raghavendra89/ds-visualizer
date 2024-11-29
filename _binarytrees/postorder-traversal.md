---
layout: bt-visualizer
title: Binary Trees - Postorder Traversal
default_nodes: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
no_output: true
---

> Postorder traversal technique follows the **Left -> Right -> Root** order.

Postorder traversal is another method for visiting all the nodes in a binary tree. The recursive approach is similar to that of inorder traversal, with the key difference being that in postorder traversal, the root is processed last, after the left and right subtrees have been processed.

#### Algorithm:

1. Treverse the left subtree (recursively).
2. Treverse the right subtree (recursively).
3. Visit the current root node

So first, the left subtree is processed, followed by the right subtree. Finally, the current node is processed.

#### Characteristics of Postorder Traversal
- Postorder traversal is useful in following scenarios:
    - Deleting a tree, where the nodes are deleted after their subtrees.
    - To create the postfix expression of an expression tree.
    - In garbage collection algorithms
- **Time Complexity:** Postorder traversal of a tree with 𝑛 nodes takes 𝑂(𝑛) time, as it visits each node exactly once.

#### Compare with other traversal algorithms

> [Inorder Traversal]({% link _binarytrees/inorder-traversal.md %}): **Left -> Root -> Right**
>
> [Preorder Traversal]({% link _binarytrees/preorder-traversal.md %}): **Root -> Left -> Right**

#### Solution & Visualize:
The animation/visualization below demonstrates how the Postorder traversal works.