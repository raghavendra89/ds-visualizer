
function checkIfPathExists(root, sum, targetSum, exists, pathNodes) {
    if (exists == 'TRUE') {
        return [exists, pathNodes];
    }

    if (root === null) return ['FALSE', pathNodes];

    sum += root.data;
    pathNodes.push(root);
    if (root.left === null && root.right === null) {
        if (sum == targetSum) {
            return ['TRUE', pathNodes];
        } else {
            pathNodes.pop();
            return ['FALSE', pathNodes];
        }
    }

    [exists, pathNodes] = checkIfPathExists(root.left, sum, targetSum, exists, pathNodes);
    [exists, pathNodes] = checkIfPathExists(root.right, sum, targetSum, exists, pathNodes);
    if (exists == 'FALSE') {
        pathNodes.pop();
    }

    return [exists, pathNodes];
}

const nodes = [1,2,3,4,5,6,7,8,9,null,null,null,13];
const root = buildTree(nodes, 0, nodes.length);

let pathNodes = [];
[exists, pathNodes] = checkIfPathExists(root, 0, 23, 'FALSE', pathNodes);

let nodeValues = [];
pathNodes.forEach(node => {
    nodeValues.push(node.data);
});
console.log(exists, pathNodes) // TRUE - 1, 3, 6, 13
