
function inOrderTraversal(root) {
    if (root !== null) {
        inOrderTraversal(root.left);

        console.log(root.data);

        inOrderTraversal(root.right);
    }
}

const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const root = buildTree(nodes);

inOrderTraversal(root);