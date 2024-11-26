function stackSolution(args) {
    let array = args[0];

    const stack1 = new Stack(
        [],
        {
            name: 'Stack 1',
            description: 'Stack 1.'
        }
    );

    const stack2 = new Stack(
        [],
        {
            name: 'Stack 2',
            description: 'Stack 2'
        }
    );

    let popOpsCount = 0;
    let currentValue = null;
    let stockSpan = [];
    let currentStockSpan = 1;
    while (array.length) {
        animatorModule.displayComment(
            'Loop through the array and compare the previous values in stack. <br>'
            + highlightArray([...array], 0)
            + '<br> Stock Span: ' + currentStockSpan,
            500
        );

        currentValue = array[0];
        currentStockSpan = 1;

        while (! stack1.isEmpty()) {
            if (stack1.top() > currentValue) {
                break;
            }

            animatorModule.displayComment(
                'If the top element of Stack 1 is smaller then push it Stack 2. <br>'
                + highlightArray([...array], 0)
                + '<br> Stock Span: ' + currentStockSpan,
                500
            );

            stack2.push(stack1.pop());
            popOpsCount++;
            currentStockSpan++;
        }

        while (popOpsCount > 0) {
            if (stack1.isEmpty()) {
                animatorModule.displayComment(
                    'Stack 1 is empty. Now push the elements back to Stack 1 <br>'
                    + highlightArray([...array], 0)
                    + '<br> Stock Span: ' + currentStockSpan,
                    500
                );
            } else {
                animatorModule.displayComment(
                    'We hit the larger value. Now push the elements back to Stack 1 <br>'
                    + highlightArray([...array], 0)
                    + '<br> Stock Span: ' + currentStockSpan,
                    500
                );
            }

            stack1.push(stack2.pop());
            popOpsCount--;
        }

        array.shift();
        stack1.push(currentValue);
        stockSpan.push(currentStockSpan);
        animatorModule.displayOutput([...stockSpan]);
    }

    animatorModule.displayOutput(stockSpan);
    animatorModule.displayComment('');
    return stockSpan;
}