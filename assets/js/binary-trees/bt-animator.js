let animatorModule = (function() {
    let animations = [];
    let animationsRunning = false;
    let animationSpeed = 750;

    function highlightNodeAnimate(animation) {
        return new Promise((resolve) => {
            ctx.beginPath();
            ctx.arc(animation.nodePoint.x, animation.nodePoint.y, 25, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.fillStyle = '#81C784';
            // ctx.fillStyle = '#66BB6A';
            ctx.fill();

            ctx.fillStyle = 'black';
            ctx.fillText(animation.data, animation.nodePoint.x, animation.nodePoint.y);

            setTimeout(() => {
                resolve('Node highlighted!');
            }, animationSpeed);
        });
    }

    function highlightLineAnimate(animation) {
        return new Promise((resolve) => {
            drawLine(animation.nodePoint1, animation.nodePoint2, '#FF3D00');

            setTimeout(() => {
                resolve('Node highlighted!');
            }, 300);
        });
    }

    function displayOutputAnimate(animation) {
        return new Promise((resolve) => {
            let outputELement = document.getElementById('final-output');
            outputELement.innerHTML = animation.value;

            ctx.textAlign = 'left';
            ctx.fillText(animation.text, 20, 30);
            ctx.textAlign = 'center';

            resolve('Output displayed!');
        })
    }

    function runSingleAnimation(animation) {
        switch (animation.type) {
            case 'highlight-node':
                return highlightNodeAnimate(animation);
                break;
            case 'highlight-line':
                return highlightLineAnimate(animation);
                break;
            case 'display-output':
                return displayOutputAnimate(animation);
                break;
        }
    }

    function runAnimations() {
        if (animationsRunning) return;

        animationsRunning = true;
        // Perform the animations one after the other
        let animation = animations.shift();
        runSingleAnimation(animation)
            .then(() => {
                animationsRunning = false;
                if (animations.length) {
                    runAnimations();
                }
            });
    }

    let highlightNode = function (nodePoint, data) {
        let animation = {
            type: 'highlight-node',
            nodePoint: nodePoint,
            data: data
        }

        animations.push(animation);

        runAnimations();
    }

    let highlightLine = function (nodePoint1, nodePoint2) {
        let animation = {
            type: 'highlight-line',
            nodePoint1: nodePoint1,
            nodePoint2: nodePoint2
        }

        animations.push(animation);

        runAnimations();
    }

    let displayOutput = function (output, outputText) {
        let animationObject = {
            type: 'display-output',
            value: output,
            text: outputText
        };

        animations.push(animationObject);
        runAnimations();
    }

    let clearAnimations = function () {
        animations = [];
        animationsRunning = false;
    }

    return {
        highlightNode: highlightNode,
        highlightLine: highlightLine,
        displayOutput: displayOutput,
        clearAnimations: clearAnimations
    }
})();