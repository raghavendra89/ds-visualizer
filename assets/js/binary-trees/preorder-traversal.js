function binaryTreeSolution(root)
{
    preOrderTraversal(root);
}

function preOrderTraversal(root) {
    if (root !== null) {
        console.log(root.data);

        preOrderTraversal(root.left);

        preOrderTraversal(root.right);
    }
}