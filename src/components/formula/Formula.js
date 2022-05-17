import { ExcelComponent } from "Core/ExcelComponent";

export class Formula extends ExcelComponent {
    static className = 'excel-formula';

    constructor(element) {
        super(element, {
            name: 'formula',
            listeners: ['input']
        });
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

    inputHandler() {
        console.log('input event for formula');
    }
}