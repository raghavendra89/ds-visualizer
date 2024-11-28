
function findMaxDepth(root) {
    if (root === null) return 0;

    let lDepth = findMaxDepth(root.left);
    let rDepth = findMaxDepth(root.right);

    return Math.max(lDepth, rDepth) + 1;
}

const nodes = [1, 2, 3, 4, 5, null, null, null, null, 10];
const root = buildTree(nodes);

findMaxDepth(root); // 4