function binaryTreeSolution(root)
{
    inOrderTraversal(root);
}

function inOrderTraversal(root) {
    if (root !== null) {
        if (root !== null && root.left !== null) {
            animatorModule.highlightLine(root.left.nodePoint, root.nodePoint);
        }

        inOrderTraversal(root.left);
        console.log(root.data);

        if (root !== null && root.right !== null) {
            animatorModule.highlightLine(root.right.nodePoint, root.nodePoint);
        }

        inOrderTraversal(root.right);
    }
}