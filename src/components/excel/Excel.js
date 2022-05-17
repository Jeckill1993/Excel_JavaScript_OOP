
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
        root.classList.add('excel');

        const components = this.options.components;

        components.forEach((Component) => {
            const element = document.createElement('div');
            element.classList.add(Component.className);
            const component = new Component(element);
            element.innerHTML = component.renderHTML();

            root.append(element);
        });

        return root;
    }
}