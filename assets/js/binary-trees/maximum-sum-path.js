function binaryTreeSolution(root)
{
    let sum = 0;
    let nodes = [];
    let maxSum = 0;
    [maxSum, nodes] = findMaximumSumPath(root, sum, maxSum, [], nodes);

    // Display the max depth
    animatorModule.displayOutput(maxSum, 'Max Sum: ' + maxSum);
    animatorModule.highlightAnswerNodes(nodes);
}

function findMaximumSumPath(root, sum, maxSum, currentPathNodes, nodes) {
    if (root === null) return [maxSum, nodes];

    sum += root.data;
    currentPathNodes.push(root);
    if (root.left === null && root.right === null) {
        if (sum > maxSum) {
            maxSum = sum;
            nodes = [...currentPathNodes];
            currentPathNodes.pop();
            return [maxSum, nodes];
        } else {
            currentPathNodes.pop();
            return [maxSum, nodes];
        }
    }

    [maxSum, nodes] = findMaximumSumPath(root.left, sum, maxSum, currentPathNodes, nodes);
    [maxSum, nodes] = findMaximumSumPath(root.right, sum, maxSum, currentPathNodes, nodes);
    currentPathNodes.pop();

    return [maxSum, nodes];
}
