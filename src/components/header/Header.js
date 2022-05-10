import { ExcelComponent } from "Core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel-header';

    renderHTML() {
        return `<h1>Header</h1>`
    }
}