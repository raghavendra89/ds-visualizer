function binaryTreeSolution(root)
{
    let sum = calculateSum(root, 0, 0);

    // Display the max depth
    animatorModule.displayOutput(sum, 'Sum of Left Leaves: ' + sum);
}

function calculateSum(root, sum, isLeftNode) {
    if (root === null) return sum;

    if (isLeftNode && root.left === null && root.right === null) {
        sum += root.data;
        return sum;
    }

    sum = calculateSum(root.left, sum, 1);
    sum = calculateSum(root.right, sum, 0);

    return sum;
}
