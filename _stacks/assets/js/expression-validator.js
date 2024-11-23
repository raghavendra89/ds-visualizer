function stackSolution(args) {
    let string = args[0];

    const stack = new Stack(
                        [],
                        {
                            name: 'Stack',
                            description: 'This stack is used to hold the string characters.'
                        }
                    );

    animatorModule.displayComment('Push individual characters of the string to the stack.');
    for (var i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }

    animatorModule.displayComment('Now pop the characters from stack and concatenate them.');
    let reversedString = '';
    while (! stack.isEmpty()) {
        reversedString += stack.pop();
        animatorModule.displayOutput(reversedString);
    }

    animatorModule.displayComment('');
    return reversedString;
}