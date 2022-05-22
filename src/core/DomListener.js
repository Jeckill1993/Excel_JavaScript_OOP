
export class DomListener {
    constructor() {
        this.listeners = []
    }

    setListeners() {
        this.listeners.forEach((listener) => {
            const { element, event, callback } = listener;
            console.log(listener);
            element.addEventListener(event, callback);
        })
    }

    initDomListeners() {
        this.setListeners();
    }

    removeDomListeners() {
        this.listeners.forEach((listener) => {
            const { element, event, callback } = listener;
            element.removeEventListener(event, callback);
        })
    }
}