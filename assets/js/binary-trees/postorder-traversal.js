function binaryTreeSolution(root)
{
    postOrderTraversal(root);
}

function postOrderTraversal(root) {
    if (root !== null) {
        if (root !== null && root.left !== null) {
            animatorModule.highlightLine(root.nodePoint, root.left.nodePoint);
        }

        postOrderTraversal(root.left);


        if (root !== null && root.right !== null) {
            animatorModule.highlightLine(root.nodePoint, root.right.nodePoint);
        }

        postOrderTraversal(root.right);

        console.log(root.data);
    }
}