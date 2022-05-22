import { ExcelComponent } from "Core/ExcelComponent";

export class Table extends ExcelComponent {
    static className = 'excel-table';

    constructor(element) {
        super();

        this.element = element;
    }

    renderHTML() {
        return `
                <div class="wrapper wrapper_large">

                    <div class="excel-table__row">
                        <div class="excel-table__row-info"></div>
                        <div class="excel-table__column-info">A</div>
                        <div class="excel-table__column-info">B</div>
                        <div class="excel-table__column-info">C</div>
                    </div>
                    <div class="excel-table__row">
                        <div class="excel-table__row-info">1</div>
                        <div class="excel-table__cell excel-table__cell_selected" contenteditable="">content1</div>
                        <div class="excel-table__cell" contenteditable="">content2</div>
                        <div class="excel-table__cell" contenteditable="">content3</div>
                    </div>
                    <div class="excel-table__row">
                        <div class="excel-table__row-info">2</div>
                        <div class="excel-table__cell" contenteditable="">content21</div>
                        <div class="excel-table__cell" contenteditable="">content22</div>
                        <div class="excel-table__cell" contenteditable="">content23</div>
                    </div>

                </div>
            `
    }
}