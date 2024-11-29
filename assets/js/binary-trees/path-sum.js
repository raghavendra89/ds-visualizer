function binaryTreeSolution(root, targetSum = 23)
{
    let sum = 0;
    let nodes = [];
    let exists = 'FALSE';
    [exists, nodes] = checkIfPathExists(root, sum, targetSum, exists, nodes);

    // Display the max depth
    animatorModule.displayOutput(exists, 'Path Exists: ' + exists);
    animatorModule.highlightAnswerNodes(nodes);
}

function checkIfPathExists(root, sum, targetSum, exists, nodes) {
    if (exists == 'TRUE') {
        return [exists, nodes];
    }

    if (root === null) return ['FALSE', nodes];

    sum += root.data;
    nodes.push(root);
    if (root.left === null && root.right === null) {
        if (sum == targetSum) {
            return ['TRUE', nodes];
        } else {
            nodes.pop();
            return ['FALSE', nodes];
        }
    }

    [exists, nodes] = checkIfPathExists(root.left, sum, targetSum, exists, nodes);
    [exists, nodes] = checkIfPathExists(root.right, sum, targetSum, exists, nodes);
    if (exists == 'FALSE') {
        nodes.pop();
    }

    return [exists, nodes];
}
