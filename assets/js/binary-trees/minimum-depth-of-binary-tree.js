function binaryTreeSolution(root)
{
    let minDepth = findMinDepth(root);

    // Display the max depth
    animatorModule.displayOutput(minDepth, 'Min Depth: ' + minDepth);
}

function findMinDepth(root) {
    if (root === null) return 0;

    if (root.left === null && root.right === null) {
        return 1;
    }

    if (root.left === null) {
        return findMinDepth(root.right) + 1;
    }

    if (root.right === null) {
        return findMinDepth(root.left) + 1;
    }

    return Math.min(findMinDepth(root.left), findMinDepth(root.right)) + 1;
}
