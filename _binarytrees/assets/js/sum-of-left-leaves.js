
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

const nodes = [1, 2, 3, 4, 5, null, null, null, null, 10];
const root = buildTree(nodes);

calculateSum(root, 0, 0); // 14