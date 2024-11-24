function stackSolution(args) {
    let string = args[0];
    let startIndex = parseInt(args[1]);
    let endIndex = -1;

    const stack = new Stack(
        [],
        {
            name: 'Stack',
            description: 'This stack will hold the opening brackets.'
        }
    );

    for (var i = startIndex; i < string.length; i++) {
        animatorModule.displayComment(
            'Loop through the characters and push all opening brackets onto the stack. <br>'
            + highlightCharacter(string, i),
            500
        );
        if (string[i] == '[') {
            stack.push('[');
        }

        if (string[i] == ']') {
            animatorModule.displayComment(
                'When a closing bracket is encountered, pop the top element from the stack. <br>'
                + highlightCharacter(string, i),
                500
            );
            stack.pop();

            if (stack.isEmpty()) {
                animatorModule.displayComment(
                    'If stack is empty then we have found the end index.',
                    2000
                );
                endIndex = i;
                break;
            }
        }
    }

    animatorModule.displayOutput(endIndex);
    animatorModule.displayComment('');
    return endIndex;
}