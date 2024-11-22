class Stack {
    metaData = {
        'name': 'Stack',
        'description': '',
        'animation_duration': 1500,
    }

    constructor(initialData, metaData) {
        this.initialData = [...initialData];
        this.metaData = Object.assign({}, this.metaData, metaData);

        this.stackDisplayer = new StackDisplayer(initialData, this.metaData);
        this.stackId = this.stackDisplayer.display();
    }

    getStackData() {
        return this.initialData;
    }

    push(value) {
        this.initialData.push(value);

        // Perform the animation
        animatorModule.performPushAnimation(this.stackId, value);
    }

    pop() {
        if (this.initialData.length == 0) return;

        const value = this.initialData.pop();

        // Perform the animation
        animatorModule.performPopAnimation(this.stackId, value);

        return value;
    }
}