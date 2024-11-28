// Animator switch: Controls whether to animate access to the tree
class AnimationSwitch {
    static animate = false;
}

class TreeNode {
    #data = null;
    #left = null;
    #right = null;

    constructor(data, nodePoint) {
        this.#data = data;
        this.#left = null;
        this.#right = null;

        this.nodePoint = nodePoint;
    }

    set data(data) {
        this.#data = data;
    }

    set left(left) {
        this.#left = left;
    }

    set right(right) {
        this.#right = right;
    }

    get data() {
        if (AnimationSwitch.animate) {
            animatorModule.highlightNode(this.nodePoint, this.#data);
        }

        return this.#data;
    }

    get left() {
        if (AnimationSwitch.animate && this.#left !== null) {
            animatorModule.highlightLine(this.nodePoint, this.#left.nodePoint);
        }

        return this.#left;
    }

    get right() {
        if (AnimationSwitch.animate && this.#right !== null) {
            animatorModule.highlightLine(this.nodePoint, this.#right.nodePoint);
        }

        return this.#right;
    }

    // Read the node data without highlighting or animation
    dryRead() {
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

    // Circle center coordinates for the top node
    let x = 340;
    let y = 50;
    nodePoints.push({x: x, y: y});

    // Circle center coordinates for the 2nd level nodes
    x = 180;
    y = 150;
    for (var i = 0; i < 2; i++) {
        nodePoints.push({x: x, y: y});
        x += 334;
    }

    // Circle center coordinates for the 3rd level nodes
    x = 100;
    y = 250;
    for (var i = 0; i < 4; i++) {
        nodePoints.push({x: x, y: y});
        x += 166.67;
    }

    // Circle center coordinates for the 4th level nodes
    x = 60;
    y = 350;
    for (var i = 0; i < 8; i++) {
        nodePoints.push({x: x, y: y});
        x += 83;
    }

    let root = buildTree(nodes, nodePoints, 0, nodes.length);

    traverseToDraw(root);

    // Enable animations in the solution functions
    AnimationSwitch.animate = true;

    return root;
}

// Do the inorder traversal to draw the tree on the canvas
function traverseToDraw(root) {
    if (root !== null) {
        drawTree(root, root.left);
        traverseToDraw(root.left);

        drawTree(root, root.right);
        traverseToDraw(root.right);
    }
}

function drawTree(node, child) {
    if (node !== null && child !== null) {
        drawCircle(node);
        drawCircle(child);

        drawLine(node.nodePoint, child.nodePoint);
    }
}

function drawCircle(node) {
    let nodePoint = node.nodePoint;

    ctx.beginPath();
    ctx.arc(nodePoint.x, nodePoint.y, 25, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = '#ECECEC';
    // ctx.fillStyle = '#FFFAE6';
    // ctx.fillStyle = '#D6EBF2';
    // ctx.fillStyle = '#ADD8E6';
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.fillText(node.data, nodePoint.x, nodePoint.y);
}

function drawLine(c1, c2, strokeColor = 'black') {
    let p1 = getPointOnCircle(c1, c2);
    let p2 = getPointOnCircle(c2, c1);

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    ctx.strokeStyle = 'black';
}

function getPointOnCircle(c1, c2) {
    let vector = {x: c2.x - c1.x, y: c2.y - c1.y}

    // Determine length b/w the centers
    let length = Math.sqrt(Math.pow(vector.x,2) + Math.pow(vector.y,2));

    let radius = 25;

    // Determine the ratio between the radius and the full hypotenuse.
    let ratio = radius / length;

    let newX = c1.x + vector.x * ratio;
    let newY = c1.y + vector.y * ratio;

    return {x: newX, y: newY};
}