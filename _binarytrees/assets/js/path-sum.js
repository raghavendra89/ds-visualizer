
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

const nodes = [1,2,3,4,null,6,7,8,9,null,null,null,13];
const root = buildTree(nodes);

checkIfPathExists(root, 0, 23, 'FALSE'); // TRUE - 1, 3, 6, 13