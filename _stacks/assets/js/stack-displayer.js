class StackDisplayer {
    constructor(initialData, metaData) {
        this.initialData = initialData;
        this.metaData = metaData;
    }

    display() {
        // Display stack on the screen
        const stackTemplate = document.getElementById('stack-template');
        const clone = stackTemplate.content.cloneNode(true);
        const stackCount = document.getElementsByClassName('stack-wrapper').length + 1;

        // Add an unique ID to the clone
        const stackWrapperId = 'stack-' + stackCount;
        const stackWrapper = clone.querySelector('.stack-wrapper');
        stackWrapper.id = stackWrapperId;

        // Add initial stack items
        const stackElement = clone.querySelector('.stack');
        while(this.initialData.length) {
            stackElement.insertAdjacentHTML(
                'beforeend',
                '<div class="stack-item">'+ this.initialData.pop() +'</div>'
            )
        }

        clone.querySelector('.stack-description h4')
             .textContent = this.metaData.name;
        clone.querySelector('.stack-description p')
             .textContent = this.metaData.description;

        document.getElementById('stack-visualizer')
                .appendChild(clone);

        return stackWrapperId;
    }
}