import { ExcelComponent } from "Core/ExcelComponent";

export class Toolbar extends ExcelComponent {
    static className = 'excel-toolbar';

    constructor(element) {
        super(element, {
            name: 'toolbar',
            listeners: ['input']
        });
    }

    renderHTML() {
        return `
            <div class="wrapper wrapper_large">
                <div class="excel-toolbar__content">
                    <div class="excel-toolbar__group">
                        <button class="excel__button">
                            <span class="material-icons">list</span>
                        </button>
                        <button class="excel__button">
                            <span class="material-icons">checklist</span>
                        </button>
                        <button class="excel__button">
                            <span class="material-icons">format_list_numbered</span>
                        </button>
                    </div>
                    <div class="excel-toolbar__group">
                        <button class="excel__button">
                            <span class="material-icons">format_align_left</span>
                        </button>
                        <button class="excel__button">
                            <span class="material-icons">format_align_center</span>
                        </button>
                        <button class="excel__button">
                            <span class="material-icons">format_align_right</span>
                        </button>
                    </div>
                    <div class="excel-toolbar__group">
                        <button class="excel__button">
                            <span class="material-icons">format_size</span>
                        </button>
                        <button class="excel__button">
                            <span class="material-icons">format_italic</span>
                        </button>
                        <button class="excel__button">
                            <span class="material-icons">format_bold</span>
                        </button>
                    </div>
                    <div class="excel-toolbar__group">
                        <button class="excel__button">
                            <span class="material-icons">format_color_text</span>
                        </button>
                        <button class="excel__button">
                            <span class="material-icons">format_color_fill</span>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}