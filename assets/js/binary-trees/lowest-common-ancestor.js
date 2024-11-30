function binaryTreeSolution(root, args)
{
    let p = parseInt(args[1]);
    let q = parseInt(args[2]);

    let feedbackElement;
    if (! args[0].includes(p)) {
        feedbackElement = document.getElementsByClassName('sv-input')[1].nextElementSibling
        feedbackElement.innerText = 'The values of p and q must exist within the tree.';
        feedbackElement.classList.remove('d-none');
        return;
    }
    if (! args[0].includes(q)) {
        feedbackElement = document.getElementsByClassName('sv-input')[2].nextElementSibling
        feedbackElement.innerText = 'The values of p and q must exist within the tree.';
        feedbackElement.classList.remove('d-none');
        return;
    }

    let foundNodes = [];
    let lca = findLCA(root, p, q, foundNodes);

    // Display the max depth
    animatorModule.displayOutput(lca.data, 'LCA of nodes '+ p +' & '+ q +' is: ' + lca.data);
    animatorModule.highlightAnswerNodes([lca]);
    animatorModule.highlightAnswerNodes(foundNodes);
}

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

    // If only one subtree
    return left !== null ? left : right;
}
