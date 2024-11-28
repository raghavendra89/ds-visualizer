function binaryTreeSolution(root)
{
    postOrderTraversal(root);
}

function postOrderTraversal(root) {
    if (root !== null) {
        postOrderTraversal(root.left);

        postOrderTraversal(root.right);

        console.log(root.data);
    }
}