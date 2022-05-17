import {ExcelComponent} from "Core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel-header';

    constructor(element) {
        super(element, {
            name: 'header',
            listeners: ['input']
        });
    }

    renderHTML() {
        return `
            <div class="wrapper">
                <div class="excel-header__content">
                    <div class="excel-header__fieldset">
                        <input class="excel__input" type="text" value="New Table" />
                    </div>
                    <div class="excel-header__buttons">
                        <button class="excel__button">
                            <span class="material-icons">delete</span>
                        </button>
                        <button class="excel__button excel__button_dark">
                            <span class="material-icons">login</span>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}