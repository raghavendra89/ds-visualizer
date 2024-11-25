function stackSolution(args) {
    let browserOps = [
        'visit(x.com)',
        'visit(fb.com)',
        'visit(ytb.in)',
        'back(1)',
        'back(1)',
        'forward(1)',
        'visit(one.com)',
        'forward(1)',
        'back(2)'
    ];

    const stack = new Stack(
        ['wp.com'],
        {
            name: 'Stack',
            description: 'This stack holds the browser history.'
        }
    );

    const forwardStack = new Stack(
        [],
        {
            name: 'Forward Stack',
            description: 'This stack holds the urls for forward operation.'
        }
    );

    let browserOp, value;
    for (var i = 0; i < browserOps.length; i++) {
        browserOp = browserOps[i].substr(0, browserOps[i].indexOf('('));
        value = browserOps[i].replace(browserOp, '').replaceAll(/[\(\)]/g, '');

        if (browserOp == 'visit') {
            animatorModule.displayComment(
                'Loop through the browser operations. <br><br><strong class="sv-comment-highlight-char">'+ browserOps[i] +'</strong><br><br>'
                + 'For visit operation push url to the stack and clear the forward stack.',
                500
            );
            stack.push(value);

            while (! forwardStack.isEmpty()) {
                forwardStack.pop();
            }
        }

        if (browserOp == 'back') {
            animatorModule.displayComment(
                'Loop through the browser operations. <br><br><strong class="sv-comment-highlight-char">'+ browserOps[i] +'</strong><br><br>'
                + 'For back operation move the urls from input Stack to Forward Stack.',
                500
            );

            value = parseInt(value);
            while (value > 0) {
                if (stack.isEmpty()) {
                    break;
                }
                forwardStack.push(stack.pop());
                value--;
            }

            if (value > 0 && ! stack.isEmpty()) {
                stack.push(forwardStack.pop());
            }
        }

        if (browserOp == 'forward') {
            animatorModule.displayComment(
                'Loop through the browser operations. <br><br><strong class="sv-comment-highlight-char">'+ browserOps[i] +'</strong><br><br>'
                + 'For forward operation move the urls from Forward Stack to input Stack.',
                500
            );

            value = parseInt(value);
            while (value > 0) {
                if (forwardStack.isEmpty()) {
                    animatorModule.displayComment(
                        'Loop through the browser operations. <br><br><strong class="sv-comment-highlight-char">'+ browserOps[i] +'</strong><br><br>'
                        + 'For forward operation move the urls from Forward Stack to input Stack. <br>'
                        + 'No URLs to forward.',
                        1000
                    );
                    break;
                }
                stack.push(forwardStack.pop());
                value--;
            }
        }
    }

    animatorModule.displayComment(
        'The current active page: ' + stack.top(),
        500
    );
    animatorModule.displayOutput(stack.top());
    return stack.top();
}