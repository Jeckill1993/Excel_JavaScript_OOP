import { ExcelComponent } from "Core/ExcelComponent";

export class Toolbar extends ExcelComponent {
    static className = 'excel-toolbar';

    renderHTML() {
        return `<h1>Toolbar</h1>`
    }
}