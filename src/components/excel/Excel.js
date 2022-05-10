
export class Excel {
    constructor(selector, componentsOptions) {

        this.defaultOptions = [];

        this.container = document.querySelector(selector);
        this.options = {
            ...this.defaultOptions,
            ...componentsOptions
        };
    }
}