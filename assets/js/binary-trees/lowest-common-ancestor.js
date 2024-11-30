function binaryTreeSolution(root, args)
{
    // if (! root.includes(p) || ! root.includes(q)) {
    //     document.getElementsByClassName('sv-input')[0]
    //             .nextElementSibling
    //             .innerText = 'The values of p and q must exist within the tree.';
    // }

    let p = args[1];
    let q = args[2];
    let lca = findLCA(root, p, q, []);

    // Display the max depth
    animatorModule.displayOutput(lca.data, 'LCA of nodes '+ p +' & '+ q +' is: ' + lca.data);
    animatorModule.highlightAnswerNodes([lca]);
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
