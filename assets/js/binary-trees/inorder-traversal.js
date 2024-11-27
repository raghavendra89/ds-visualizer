function binaryTreeSolution(root)
{
    inOrderTraversal(root);
}

function inOrderTraversal(root) {
    if (root !== null) {
        inOrderTraversal(root.left);
        console.log(root.data);
        inOrderTraversal(root.right);
    }
}