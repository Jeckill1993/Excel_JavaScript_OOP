
export class DomListener {
    constructor(element) {
        if (!element) {
            throw new Error('Element is undefined');
        }

        this.element = element;
    }
}