function stackSolution(args) {console.log(args);
    let array = args[0];
    let referenceNumber = args[1];

    const stack = new Stack(
        array,
        {
            name: 'Stack',
            description: 'This stack holds the input array elements.'
        }
    );

    const tempStack = new Stack(
        [],
        {
            name: 'Temp Stack',
            description: 'Temporary stack to get the compare the numbers.'
        }
    );

    animatorModule.displayComment(
        'Pop from the input stack until the reference number('+ referenceNumber +') is found.',
        1000
    );

    let nextBiggerNumber = -1;
    while (! stack.isEmpty()) {
        if (stack.top() == referenceNumber) {
            animatorModule.displayComment(
                'The reference number('+ referenceNumber +') is found.',
                1000
            );
            break;
        }

        tempStack.push(stack.pop());
    }

    animatorModule.displayComment(
        'Now pop from the second stack and check if the popped number is bigger than reference number.',
        1000
    );

    let topElement = '';
    while (! tempStack.isEmpty()) {
        topElement = tempStack.pop();

        if (topElement > referenceNumber) {
            animatorModule.displayComment(
                'Next bigger number is found: ' + topElement,
                1000
            );
            nextBiggerNumber = topElement;
            break;
        }
    }

    if (nextBiggerNumber == -1) {
        animatorModule.displayComment(
            'There is no next bigger number.',
            1000
        );
    }

    animatorModule.displayOutput(nextBiggerNumber);
    return nextBiggerNumber;
}