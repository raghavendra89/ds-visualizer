function binaryTreeSolution(root)
{
    levelOrderTraversal(root);
}

function levelOrderTraversal(root) {
    if (root !== null) {
        let queue = [];

        // Enqueue the root node.
        queue.push(root);

        // Loop through the Queue until it is not empty
        while (queue.length) {

            // Dequeue a node and visit it
            let node = queue.shift();
            console.log(node.data);

            // Enqueue the left child
            if (node.left) {
                animatorModule.highlightLine(node.nodePoint, node.left.nodePoint);

                queue.push(node.left);
            }

            // Enqueue the right child
            if (node.right) {
                animatorModule.highlightLine(node.nodePoint, node.right.nodePoint);
                queue.push(node.right);
            }
        }
    }
}