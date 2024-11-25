function stackSolution(args) {
    let expression = args[0];

    const stack = new Stack(
        [],
        {
            name: 'Stack',
            description: 'This stack is used to hold the brackets.'
        }
    );

    let bracketMapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < expression.length; i++) {
        animatorModule.displayComment(
            'Loop through the expression and push all opening brackets onto the stack. <br>'
            + highlightCharacter(expression, i),
            500
        );

        char = expression[i];
        charToMatch = bracketMapping[char] ?? null;

        if (charToMatch) {
            animatorModule.displayComment(
                'When a closing bracket is encountered, pop the top element from the stack. <br>'
                + highlightCharacter(expression, i),
                500
            );

            if (stack.isEmpty() || stack.pop() !== charToMatch) {
                animatorModule.displayComment(
                    'There is no corresponding opening bracket, so the expression is invalid. <br>'
                    + highlightCharacter(expression, i),
                    1000
                );

                break;
            } else {
                animatorModule.displayComment(
                    'There is a matching opening bracket. <br>'
                    + highlightCharacter(expression, i),
                    1000
                );
            }

        } else {
            if (Object.values(bracketMapping).includes(char)) {
                stack.push(char);
            }
        }
    }

    let result = stack.isEmpty() ? 'TRUE' : 'FALSE';

    animatorModule.displayOutput(result);
    if (stack.isEmpty()) {
        animatorModule.displayComment(
            'It is valid expression.',
            500
        );
    } else {
        animatorModule.displayComment(
            'The expression has unmatched brackets, so it is invalid.',
            500
        );
    }

    return result;
}