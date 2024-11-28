function binaryTreeSolution(root)
{
    let sum = 0;
    let nodes = [];
    let maxSum = 0
    maxSum = findMaximumSumPath(root, sum, maxSum);

    // Display the max depth
    animatorModule.displayOutput(maxSum, 'Max Sum: ' + maxSum);
}

function findMaximumSumPath(root, sum, maxSum) {
    if (root === null) return maxSum;

    sum += root.data;
    if (root.left === null && root.right === null) {
        if (sum > maxSum) {
            maxSum = sum;
            return maxSum;
        } else {
            return maxSum;
        }
    }

    maxSum = findMaximumSumPath(root.left, sum, maxSum);
    maxSum = findMaximumSumPath(root.right, sum, maxSum);

    return maxSum;
}
