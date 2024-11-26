function stackSolution(args) {
    let string = args[0];
    let smallestString = '';

    const stack = new Stack(
        string.split(''),
        {
            name: 'Stack',
            description: 'This stack will hold the characters of the given string.'
        }
    );

    let topChar = '';
    let charCount = {};
    let i = string.length - 1;
    while (! stack.isEmpty()) {
        animatorModule.displayComment(
            'Pop each element from the stack and compare it with first letter of string. <br>'
            + highlightCharacter(string, i)
            + '<br> Current smallest subsequence: <div class="sv-comment-highlight">'
            + highlightCharacter(smallestString, 0) +'</div>',
            200
        );

        topChar = stack.pop();

        // Increment the count or set the count to 1
        charCount[topChar] = (charCount[topChar] || 0) + 1;

        if (smallestString.length > 0 && charCount[topChar] > 1) {
            if (topChar > smallestString[0]) {
                animatorModule.displayComment(
                    'Popped element ('+ topChar +') > first letter ('+ smallestString[0] +'). So ignore it. <br>'
                    + highlightCharacter(string, i)
                    + ' <br> Current smallest subsequence: <div class="sv-comment-highlight">'
                    + highlightCharacter(smallestString, 0) +'</div>',
                    2000
                );
            } else {
                smallestString = smallestString.replace(topChar, '');
                smallestString = topChar + smallestString;

                animatorModule.displayComment(
                    'Popped element ('+ topChar +') <= first letter ('+ smallestString[0] +'). So ignore the duplicate character already present in the string. <br>'
                    + highlightCharacter(string, i)
                    + ' <br> Current smallest subsequence: <div class="sv-comment-highlight">'
                    + highlightCharacter(smallestString, 0) +'</div>',
                    2000
                );
            }

        } else {
            if (smallestString.length > 0) {
                animatorModule.displayComment(
                    'Pop each element from the stack and compare it with first letter of string. <br>'
                    + highlightCharacter(string, i)
                    + ' <br> Current smallest subsequence: <div class="sv-comment-highlight">'
                    + highlightCharacter(smallestString, 0) +'</div>',
                    200
                );
            }

            smallestString = topChar + smallestString;
        }

        i--;
    }

    animatorModule.displayOutput(smallestString);
    animatorModule.displayComment(
        'Lexicographically smallest subsequence: <br>'
        + highlightSubstring(smallestString, 0, smallestString.length)
    );
    return smallestString;
}