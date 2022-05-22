import { DomListener } from "Core/DomListener";

export class ExcelComponent extends DomListener {

    renderHTML() {
        return '';
    }

    init() {
        this.initDomListeners()
    }
}