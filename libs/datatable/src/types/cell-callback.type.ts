import {DataTableRowComponent} from '../components/row/row.component';
import {DataTableColumnDirective} from '../directives/column/column.directive';

export type CellCallback = (item: any, row: DataTableRowComponent, column: DataTableColumnDirective, index: number) => string;
