function findMaximumSumPath(root, sum, maxSum, currentPathNodes, nodes) {
    if (root === null) return [maxSum, nodes];

    sum += root.data;
    currentPathNodes.push(root);
    if (root.left === null && root.right === null) {
        if (sum > maxSum) {
            maxSum = sum;
            nodes = [...currentPathNodes];
            currentPathNodes.pop();
            return [maxSum, nodes];
        } else {
            currentPathNodes.pop();
            return [maxSum, nodes];
        }
    }

    [maxSum, nodes] = findMaximumSumPath(root.left, sum, maxSum, currentPathNodes, nodes);
    [maxSum, nodes] = findMaximumSumPath(root.right, sum, maxSum, currentPathNodes, nodes);
    currentPathNodes.pop();

    return [maxSum, nodes];
}

const nodes = [1,2,3,4,null,6,7,8,9,null,null,null,13];
const root = buildTree(nodes, 0, nodes.length);

let sum = 0;
let pathNodes = [];
let maxSum = 0;
[maxSum, pathNodes] = findMaximumSumPath(root, sum, maxSum, [], pathNodes);

let nodesData = [];
pathNodes.forEach((node) => {
    nodesData.push(node.data);
})

console.log(maxSum, nodesData); // 23, [1, 3, 6, 13]