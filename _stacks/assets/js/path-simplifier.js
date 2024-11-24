function stackSolution(args) {
    let string = args[0];
    let paths = string.split('/');

    const stack = new Stack(
        [],
        {
            name: 'Stack',
            description: 'This stack holds the path segments.'
        }
    );

    animatorModule.displayComment('Push the individual path segments to the stack.');
    for (var i = 0; i < paths.length; i++) {
        if (paths[i] !== '') {
            stack.push(paths[i]);
        }
    }

    let simplifiedPath = '';
    let skipNextPath = false;
    while (! stack.isEmpty()) {
        if (skipNextPath) {
            animatorModule.displayComment('If ".." is encountered skip the next path.', 500);
        } else {
            animatorModule.displayComment(
                'Pop individual path segments and prepend them. <br><div class="sv-comment-highlight">'+ simplifiedPath +'</div>'
            );
        }
        path = stack.pop();

        if (path == '..') {
            skipNextPath = true;
        } else {
            if (path == '.') {
                animatorModule.displayComment('If "." is encountered ignore it.', 1500);
            }

            if (path !== '.' && ! skipNextPath) {
                // The first letter in simplifiedPath is '/'
                simplifiedPath = '/' + path + simplifiedPath;
            }

            animatorModule.displayOutput(simplifiedPath);
            skipNextPath = false;
        }
    }

    simplifiedPath = (simplifiedPath == '') ? '/' : simplifiedPath;

    animatorModule.displayComment('Final path: <br><div class="sv-comment-highlight">' + simplifiedPath + '<div>', 1000);
    animatorModule.displayOutput(simplifiedPath);
    animatorModule.displayComment('');
    return simplifiedPath;
}