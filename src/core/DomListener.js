
export class DomListener {
    constructor(element, listeners) {
        if (!element) {
            throw new Error('Element is undefined');
        }

        this.element = element;

        this.defaultListeners = [];

        this.listeners = [
            ...this.defaultListeners,
            ...listeners
        ]
    }

    initDomListeners() {
        this.listeners.forEach((listener) => {
            this.element.addEventListener(listener, () => {
                console.log('add events by setListeners');
            });
        })
    }

    removeDomListeners() {

    }
}