import { DomListener } from "Core/DomListener";

export class ExcelComponent extends DomListener {

    constructor(element, options) {
        super(element, options.listeners);
    }

    renderHTML() {
        return '';
    }

    init() {
        this.initDomListeners()
    }
}