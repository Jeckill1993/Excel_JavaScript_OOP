
export class Excel {
    constructor(selector, propOptions) {

        this.defaultOptions = [];

        this.container = document.querySelector(selector);
        this.options = {
            ...this.defaultOptions,
            ...propOptions
        };
    }

    render() {
        this.container.append(this.#getRoot());
    }

    #getRoot() {
        const root = document.createElement('div');
        const components = this.options.components;

        components.forEach((Component) => {
            const component = new Component();

            root.insertAdjacentHTML('beforeend', component.renderHTML());
        });

        return root;
    }
}