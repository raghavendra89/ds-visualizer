function stackSolution(args) {
    let string = args[0];
    let length = 0;
    let maxLength = 0;
    let startIndex = 0;
    let validParentheses = {};

    const stack = new Stack(
        [],
        {
            name: 'Stack',
            description: 'This stack will hold the opening parentheses.'
        }
    );

    for (var i = 0; i < string.length; i++) {
        if (string[i] == '(') {
            animatorModule.displayComment(
                'Loop through the string and push all opening brackets onto the stack. <br>'
                + highlightCharacter(string, i),
                500
            );

            stack.push('(');
            startIndex++;
        } else {
            if (! stack.isEmpty()) {
                animatorModule.displayComment(
                    'When a closing parentheses is encountered, pop the top element from the stack. <br>'
                    + highlightCharacter(string, i),
                    500
                );

                stack.pop();
                length +=2;
                startIndex--;

                animatorModule.displayComment(
                    'Current valid substring. <br>'
                    + highlightSubstring(string, startIndex, length),
                    750
                );
            } else {
                if (length > 0) {
                    animatorModule.displayComment(
                        'Unmatched closing parentheses. <br>'
                        + highlightCharacter(string, i),
                        1500
                    );

                    animatorModule.displayComment(
                        'A valid substring is found, continue searching for the next substring. <br>'
                        + highlightSubstring(string, startIndex, length),
                        1500
                    );
                }

                startIndex = i + 1;
                length = 0;
            }
        }

        validParentheses[startIndex] = length;
    }

    let key = Object.keys(validParentheses)
                    .reduce((a, b) => validParentheses[a] > validParentheses[b] ? a : b);

    maxLength = validParentheses[key];

    animatorModule.displayOutput(maxLength);
    animatorModule.displayComment(
        'Longest valid parentheses: <br>' + highlightSubstring(string, parseInt(key), maxLength)
    );
    return maxLength;
}