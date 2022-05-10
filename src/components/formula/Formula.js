import { ExcelComponent } from "Core/ExcelComponent";

export class Formula extends ExcelComponent {
    static className = 'excel-formula';

    renderHTML() {
        return `<h1>Formula</h1>`
    }
}