
function findMinDepth(root) {
    if (root === null) return 0;

    // If it is a leaf node, then the depth is 1
    if (root.left === null && root.right === null) {
        return 1;
    }

    // If left subtree is null, find the minimum depth of the right subtree
    if (root.left === null) {
        return findMinDepth(root.right) + 1;
    }

    // If right subtree is null, find the minimum depth of the left subtree
    if (root.right === null) {
        return findMinDepth(root.left) + 1;
    }

    // If both subtrees are present, then find the minimum of the two
    return Math.min(findMinDepth(root.left), findMinDepth(root.right)) + 1;
}

const nodes = [1, 2, 3, 4, 5, null, null, null, null, 10];
const root = buildTree(nodes);

findMinDepth(root); // 4
