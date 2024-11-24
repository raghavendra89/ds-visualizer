function stackSolution(args) {
    let string = args[0];
    let startIndex = parseInt(args[1]);
    let endIndex = -1;

    if (string[startIndex] !== '[') {
        animatorModule.displayComment(
            '<span class="sv-comment-error">Error: There is no opening bracket ([) at the given index.</span>',
            15000
        );
    }

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

            // If stack is empty, then the brackets are not valid
            if (stack.isEmpty()) {
                animatorModule.displayComment(
                    '<span class="sv-comment-error">Error: The string does not contain the valid pair of brackets.</span>',
                    15000
                );
                return;
            }

            stack.pop();

            if (stack.isEmpty()) {
                animatorModule.displayComment(
                    'If stack is empty then we have found the end index.',
                    1500
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