
// The idea is when a node is found matching p or q,
// then stop propogating downward
function findLCA(root, p, q, foundNodes) {
    if (root === null) return null;

    // Current node is p or q,
    // then current node could be an ancestor
    if ([p, q].includes(root.data)) {
        foundNodes.push(root);
        return root;
    }

    let left = null;
    let right = null;
    if (foundNodes.length < 2) {
        left = findLCA(root.left, p, q, foundNodes);
    }

    if (foundNodes.length < 2) {
        right = findLCA(root.right, p, q, foundNodes);
    }

    // If both subtrees are not null,
    // then the current node is the LCA
    if (left !== null && right !== null) {
        return root;
    }

    return left !== null ? left : right;
}

const nodes = [1,2,3,4,5,6,7,8,9,null,null,null,13];
const root = buildTree(nodes, 0, nodes.length);

findLCA(root, 9, 13, []); // 1
findLCA(root, 7, 13, []); // 3