function binaryTreeSolution(root)
{
    let maxDepth = findMaxDepth(root);

    // Display the max depth
    animatorModule.displayOutput(4, 'Max Depth: ' + 4);
}

function findMaxDepth(root) {
    if (root === null) return 0;

    if (root !== null && root.left !== null) {
        animatorModule.highlightLine(root.nodePoint, root.left.nodePoint);
    }

    let lDepth = findMaxDepth(root.left);
    if (root !== null && root.right !== null) {
        animatorModule.highlightLine(root.nodePoint, root.right.nodePoint);
    }

    let rDepth = findMaxDepth(root.right);

    let maxDepth = Math.max(lDepth, rDepth) + 1;
    return maxDepth;
}