
function postOrderTraversal(root) {
    if (root !== null) {
        postOrderTraversal(root.left);

        postOrderTraversal(root.right);

        console.log(root.data);
    }
}

const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const root = buildTree(nodes);

postOrderTraversal(root);