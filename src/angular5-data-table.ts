// Public classes.
import { DataTable } from "./components/table.component";
import { DataTableColumn } from './components/column.component';
import { DataTableRow } from "./components/row.component";
import { DataTablePagination } from "./components/pagination.component";
import { DataTableHeader } from "./components/header.component";
import { DataTableTranslations } from "./types/data-table-translations.type";
import { CellCallback } from "./types/cell-callback.type";
import { RowCallback } from "./types/row-callback.type";
import { defaultTranslations } from "./types/default-translations.type";
import { DataTableResource } from './tools/data-table-resource';
import { DataTableParams } from './types/data-table-params.type';

export { DataTableModule } from './modules/data-table.module'
export * from './tools/data-table-resource';
export {
	DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableResource, DataTableParams,
	DataTableHeader, DataTableTranslations, CellCallback, RowCallback, defaultTranslations
};
export const DATA_TABLE_DIRECTIVES = [DataTable, DataTableColumn];

