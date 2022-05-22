import { ExcelComponent } from "Core/ExcelComponent";

export class Formula extends ExcelComponent {
    static className = 'excel-formula';

    constructor(element) {
        super();

        this.element = element;
    }

    renderHTML() {
        return `
                <div class="wrapper wrapper_large">
                    <div class="excel-formula__content">
                        <div class="excel-formula__info"><em>fn</em></div>
                        <div class="excel-formula__fieldset">
                            <input class="excel__input" />
                        </div>
                    </div>
                </div>
            `
    }

    init() {
        this.listeners.push({
            element: this.element,
            event: 'input',
            callback: this.inputHandler,
        })

        this.initDomListeners();
    }

    initDomListeners() {
        super.initDomListeners();
    }

    /* events handlers */
    inputHandler() {
        console.log('input event for formula');
    }
}