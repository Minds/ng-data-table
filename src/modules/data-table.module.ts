import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTable } from '../components/table.component';
import { DataTableRow } from '../components/row.component';
import { DataTableColumn } from '../components/column.component';
import { DataTableHeader } from '../components/header.component';
import { DataTablePagination } from '../components/pagination.component';

import { Hide } from '../utils/hide';
import { MinPipe } from '../utils/min';
import { PixelConverter } from '../utils/px';

@NgModule({
	declarations: [
		DataTable, DataTableColumn,
		DataTableRow, DataTablePagination, DataTableHeader,
		PixelConverter, Hide, MinPipe
	],
	imports: [CommonModule, FormsModule],
	exports: [
		DataTable, DataTableColumn
	]
})
export class DataTableModule {
}