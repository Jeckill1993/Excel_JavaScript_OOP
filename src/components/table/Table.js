import { ExcelComponent } from "Core/ExcelComponent";

export class Table extends ExcelComponent {
    static className = 'excel-table';

    renderHTML() {
        return `<h1>Table</h1>`
    }
}