
function preOrderTraversal(root) {
    if (root !== null) {
        console.log(root.data);

        preOrderTraversal(root.left);

        preOrderTraversal(root.right);
    }
}

const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const root = buildTree(nodes);

preOrderTraversal(root);