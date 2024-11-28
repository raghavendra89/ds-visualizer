function binaryTreeSolution(root, targetSum = 23)
{
    let sum = 0;
    let exists = 'FALSE';
    exists = checkIfPathExists(root, sum, targetSum, exists);

    // Display the max depth
    animatorModule.displayOutput(exists, 'Path Exists: ' + exists);
}

function checkIfPathExists(root, sum, targetSum, exists) {
    if (exists == 'TRUE') {
        return exists;
    }

    if (root === null) return 'FALSE';

    sum += root.data;
    if (root.left === null && root.right === null) {
        if (sum == targetSum) {
            return 'TRUE';
        } else {
            return 'FALSE';
        }
    }

    exists = checkIfPathExists(root.left, sum, targetSum, exists);
    exists = checkIfPathExists(root.right, sum, targetSum, exists);

    return exists;
}
