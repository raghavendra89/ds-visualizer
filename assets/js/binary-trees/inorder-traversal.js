function binaryTreeSolution(root)
{
    inOrderTraversal(root);
}

function inOrderTraversal(root) {
    if (root !== null) {
        if (root !== null && root.left !== null) {
            animatorModule.highlightLine(root.nodePoint, root.left.nodePoint);
        }

        inOrderTraversal(root.left);

        console.log(root.data);

        if (root !== null && root.right !== null) {
            animatorModule.highlightLine(root.nodePoint, root.right.nodePoint);
        }

        inOrderTraversal(root.right);
    }
}