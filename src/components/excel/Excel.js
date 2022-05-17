
export class Excel {
    constructor(selector, propOptions) {

        this.defaultOptions = {};

        this.container = document.querySelector(selector);
        this.options = {
            ...this.defaultOptions,
            ...propOptions
        };
    }

    render() {
        this.container.append(this.#getRoot());
        this.components.forEach((component) => {component.init()});
    }

    #getRoot() {
        const root = document.createElement('div');
        root.classList.add('excel');

        const components = this.options.components;

        this.components = components.map((Component) => {
            const element = document.createElement('div');
            element.classList.add(Component.className);
            const component = new Component(element);
            element.innerHTML = component.renderHTML();

            root.append(element);

            return component;
        });

        return root;
    }
}