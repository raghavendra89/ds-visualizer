let animatorModule = (function() {
    let animations = [];
    let animationsRunning = false;
    let animationSpeed = 2500;

    function getMoveDownAnimation(animation) {
        let topElement = animation.stackElement.children[0];

        let distance = animation.stackElement.offsetHeight;
        if (topElement) {
            distance = topElement.getBoundingClientRect().y
                        - animation.pushElement.getBoundingClientRect().y
                        - animation.pushElement.getBoundingClientRect().height
                        - 2; // Margin bottom
        }

        let moveDownAnimation = [
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            (0.2 * distance) +  'px',
            (0.37 * distance) +  'px',
            (0.55 * distance) +  'px',
            (0.7 * distance) +  'px',
            (0.87 * distance) +  'px',
            distance  + 'px',
            distance  + 'px'
        ];

        return moveDownAnimation;
    }

    function getMoveUpAnimation(animation) {
        let topElement = animation.stackElement.children[0];
        let distance = topElement.getBoundingClientRect().y
                        - animation.pushElement.getBoundingClientRect().y;

        let moveUpAnimation = [
            (distance - 0.95 * distance) +  'px',
            (distance - 0.87 * distance) +  'px',
            (distance - 0.7 * distance) +  'px',
            (distance - 0.55 * distance) +  'px',
            (distance - 0.37 * distance) +  'px',
            (distance - 0.2 * distance) +  'px',
            distance + 'px',
            distance + 'px',
            distance + 'px',
            distance + 'px',
            distance + 'px',
            distance + 'px',
            distance + 'px'
        ];

        return moveUpAnimation;
    }

    function pushAnimate(animation) {
        animation.pushElement.textContent = animation.value;

        let pushAnimationKeyFrames = {
            // 25% - Show element
            opacity: ['0', '0.3', '0.7', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
            left: ['0', '0', '0', '0', '7px', '20px', '35px', '60px', '75px', '90px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px', '100px'],
            top: getMoveDownAnimation(animation),
            offset: [0, 0.08, 0.16, 0.25, 0.25, 0.31, 0.37, 0.43, 0.5, 0.56, 0.62, 0.68, 0.73, 0.78, 0.83, 0.88, 0.93, 0.98, 1]
        };

        let duplicateElement = animation.pushElement.cloneNode(true);
        duplicateElement.classList.remove('hidden');

        // TODO: Increase the height of the stack before pushing

        let pushAnimation = animation.pushElement.animate(pushAnimationKeyFrames, animationSpeed);

        return new Promise((resolve) => {
            return pushAnimation.finished.then(() => {
                animation.stackElement.prepend(duplicateElement);
                console.log(`Push Animation completed!`);
                resolve(`Push Animation completed!`);
            });
        })
    }

    function popAnimate(animation) {
        let popAnimationKeyFrames = {
            bottom: getMoveUpAnimation(animation),
            left: ['0', '0', '0', '0', '0', '0', '7px', '20px', '35px', '60px', '75px', '90px', '100px'],
            offset: [0, 0.07, 0.15, 0.22, 0.3, 0.37, 0.45, 0.52, 0.6, 0.67, 0.75, 0.82, 0.9, 1]
        };

        let topElement = animation.stackElement.children[0];

        let popAnimation = topElement.animate(popAnimationKeyFrames, animationSpeed);
        // The animation is not smooth
        // So remove the item before animation is completed
        setTimeout(() => {
            topElement.remove();
            animation.popElement.textContent = topElement.textContent;
        }, animationSpeed - 200);

        return new Promise((resolve) => {
            return popAnimation.finished.then(() => {
                // topElement.remove();
                // animation.popElement.textContent = topElement.textContent;
                console.log(`Pop Animation completed!`);
                resolve(`Pop Animation completed!`);
            });
        })
    }

    function displayCommentAnimate(animation) {
        return new Promise((resolve) => {
            document.getElementsByClassName('sv-comment')[0]
                    .innerText = animation.value;
            resolve('Comment displayed!');
        })
    }

    function displayOutputAnimate(animation) {
        return new Promise((resolve) => {
            let outputELement = document.getElementById('final-output');
            outputELement.innerHTML = animation.value;
            resolve('Output displayed!');
        })
    }

    function runSingleAnimation(animation) {
        switch (animation.type) {
            case 'push':
                return pushAnimate(animation);
                break;
            case 'pop':
                return popAnimate(animation);
                break;
            case 'display-comment':
                return displayCommentAnimate(animation);
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

    function getStackElements(stackId) {
        let stackWrapper = document.getElementById(stackId);
        return {
            stackElement: stackWrapper.getElementsByClassName('stack')[0],
            pushElement: stackWrapper.getElementsByClassName('push-element')[0],
            popElement: stackWrapper.getElementsByClassName('pop-element')[0]
        }
    }

    let performPushAnimation = function (stackId, value) {
        let animationObject = Object.assign(
                                {type: 'push', value: value},
                                getStackElements(stackId)
                            );
        animations.push(animationObject);

        runAnimations();
    }

    let performPopAnimation = function (stackId, value) {
        let animationObject = Object.assign(
                                {type: 'pop', value: value},
                                getStackElements(stackId)
                            );
        animations.push(animationObject);

        runAnimations();
    }

    /**
     * Set the animation duration.
     *
     * @param flot speed Duration in seconds (1, 2.5...)
     */
    let setAnimationSpeed = function (speed) {
        animationSpeed = speed * 1000;
    }

    let displayComment = function (comment) {
        let animationObject = {
            type: 'display-comment',
            value: comment
        };

        animations.push(animationObject);
    }

    let displayOutput = function (output) {
        let animationObject = {
            type: 'display-output',
            value: output
        };

        animations.push(animationObject);
    }

    return {
        performPushAnimation: performPushAnimation,
        performPopAnimation: performPopAnimation,
        setAnimationSpeed: setAnimationSpeed,
        displayComment: displayComment,
        displayOutput: displayOutput
    }
})();