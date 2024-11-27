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

    function runSingleAnimation(animation) {
        switch (animation.type) {
            case 'highlight-node':
                return highlightNodeAnimate(animation);
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

    return {
        highlightNode: highlightNode
    }
})();