function binaryTreeSolution(root)
{
    let maxDepth = findMaxDepth(root);

    // Display the max depth
    animatorModule.displayOutput(maxDepth, 'Max Depth: ' + maxDepth);
}

function findMaxDepth(root) {
    if (root === null) return 0;


    let lDepth = findMaxDepth(root.left);
    let rDepth = findMaxDepth(root.right);

    return Math.max(lDepth, rDepth) + 1;
}