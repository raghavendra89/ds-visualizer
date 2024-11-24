function stackSolution(args) {
    let array = args[0];

    const stack = new Stack(
        [],
        {
            name: 'Input Stack',
            description: 'This stack holds the input array elements.'
        }
    );

    const tempStack = new Stack(
        [],
        {
            name: 'Temp Stack',
            description: 'This stack will hold the sorted array elements.'
        }
    );

    animatorModule.displayComment('Push the array elements to the stack.');
    while (array.length) {
        stack.push(array.pop());
    }

    let temp = '';
    while (! stack.isEmpty()) {
        animatorModule.displayComment('Pop the element from the input stack.', 500);
        temp = stack.pop();

        while (! tempStack.isEmpty() && tempStack.top() < temp) {
            animatorModule.displayComment(
                'If the popped element('+ temp +') is greater than the elements in the tempStack, then push the elements from tempStack to input stack.',
                700
            );
            stack.push(tempStack.pop());
        }

        animatorModule.displayComment('Add the popped element to the tempStack.', 500);
        tempStack.push(temp);
    }

    let sortedArray = [];
    while (! tempStack.isEmpty()) {
        animatorModule.displayComment(
            'Finally we get the sorted list in the tempStack. Pop and get the sorted list.',
            500
        );
        animatorModule.displayOutput([...sortedArray]);
        sortedArray.push(tempStack.pop());
    }

    animatorModule.displayOutput(sortedArray);
    animatorModule.displayComment('');
    return sortedArray;
}