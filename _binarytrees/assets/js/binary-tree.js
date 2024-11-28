class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(nodes, index, size) {
    if (index < size) {
        if (nodes[index] === null) {
            return null;
        }

        let root = new TreeNode(nodes[index]);
        root.left = buildTree(nodes, 2 * index + 1, size);
        root.right = buildTree(nodes, 2 * index + 2, size);

        return root;
    }

    return null;
}