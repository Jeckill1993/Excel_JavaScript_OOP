import './css/style.scss';
import { Excel } from "Source/components/excel/Excel";
import {Header} from "Source/components/header/Header";
import {Toolbar} from "Source/components/toolbar/Toolbar";
import {Formula} from "Source/components/formula/Formula";
import {Table} from "Source/components/table/Table";

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
});

excel.render();