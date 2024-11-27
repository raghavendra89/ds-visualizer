class TreeNode {
    #data = null;

    constructor(data, nodePoint) {
        this.#data = data;
        this.left = null;
        this.right = null;

        this.nodePoint = nodePoint;
    }

    get data() {
        animatorModule.highlightNode(this.nodePoint, this.#data);

        return this.#data;
    }
}

function buildTree(nodes, nodePoints, index, size) {
    if (index < size) {
        if (nodes[index] === null) {
            return null;
        }

        let root = new TreeNode(nodes[index], nodePoints[index]);
        root.left = buildTree(nodes, nodePoints, 2 * index + 1, size);
        root.right = buildTree(nodes, nodePoints, 2 * index + 2, size);

        return root;
    }

    return null;
}

function drawBinaryTree(nodes) {
    let nodePoints = [];

    // const levels = [];
    // var i = 0;
    // while (nodes.length) {
    //     levels.push(
    //         nodes.splice(0, Math.pow(2, i))
    //     );
    //     i++;
    // }

    // let subLevels;
    // let x;
    // let y;
    // let gap;
    // for (var i = 0; i < levels.length; i++) {
    //     subLevels = levels[i];

    //     gap = 700 / (Math.pow(2, i) + 1);
    //     x = gap;
    //     y = 100 + (100 * i);
    //     for (var j = 0; j < subLevels.length; j++) {
    //         ctx.beginPath();
    //         ctx.arc(x, y, 25, 0, Math.PI * 2, true);
    //         ctx.stroke();

    //         x += gap;
    //     }
    // }

    let x = 340;
    let y = 100;
    nodePoints.push({x: x, y: y});

    x = 180;
    y = 200;
    for (var i = 0; i < 2; i++) {
        nodePoints.push({x: x, y: y});
        x += 334;
    }

    x = 100;
    y = 300;
    for (var i = 0; i < 4; i++) {
        nodePoints.push({x: x, y: y});
        x += 166.67;
    }

    x = 60;
    y = 400;
    for (var i = 0; i < 8; i++) {
        nodePoints.push({x: x, y: y});
        x += 83;
    }

    drawLines(nodePoints);
    drawCircles(nodePoints, nodes);

    return buildTree(nodes, nodePoints, 0, nodes.length);
}

function drawLines(nodePoints) {
    let connectingNode = 1;
    for (var i = 0; connectingNode < nodePoints.length; i++) {
        ctx.beginPath();
        ctx.moveTo(nodePoints[i].x, nodePoints[i].y);
        ctx.lineTo(nodePoints[connectingNode].x, nodePoints[connectingNode].y);
        ctx.stroke();

        connectingNode++;
        ctx.beginPath();
        ctx.moveTo(nodePoints[i].x, nodePoints[i].y);
        ctx.lineTo(nodePoints[connectingNode].x, nodePoints[connectingNode].y);
        ctx.stroke();

        connectingNode++;
    }
}

function drawCircles(nodePoints, nodes) {
    for (var i = 0; i < nodePoints.length; i++) {
        ctx.beginPath();
        ctx.arc(nodePoints[i].x, nodePoints[i].y, 25, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.fillStyle = '#ECECEC';
        // ctx.fillStyle = '#FFFAE6';
        // ctx.fillStyle = '#D6EBF2';
        // ctx.fillStyle = '#ADD8E6';
        ctx.fill();

        ctx.fillStyle = 'black';
        ctx.fillText(nodes[i], nodePoints[i].x, nodePoints[i].y);
    }
}