function binaryTreeSolution(root)
{
    preOrderTraversal(root);
}

function preOrderTraversal(root) {
    if (root !== null) {
        console.log(root.data);

        if (root !== null && root.left !== null) {
            animatorModule.highlightLine(root.nodePoint, root.left.nodePoint);
        }

        preOrderTraversal(root.left);


        if (root !== null && root.right !== null) {
            animatorModule.highlightLine(root.nodePoint, root.right.nodePoint);
        }

        preOrderTraversal(root.right);
    }
}