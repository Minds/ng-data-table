// modules
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// utils
import { HideDirective } from './utils/hide';
import { MinPipe } from './utils/min';
import { PixelConverter } from './utils/px';
// types & tools
import { DataTableTranslations } from './types/data-table-translations.type';
import { CellCallback } from './types/cell-callback.type';
import { RowCallback } from './types/row-callback.type';
import { DataTableResource } from './tools/data-table-resource';
import { DataTableParams } from './types/data-table-params.type';
// components & directives
import { DataTableComponent } from './components/table/table.component';
import { DataTableRowComponent } from './components/row/row.component';
import { DataTableColumnDirective } from './directives/column/column.directive';
import { DataTableHeaderComponent } from './components/header/header.component';
import { DataTablePaginationComponent } from './components/pagination/pagination.component';

export {
  DataTableComponent, DataTableColumnDirective, DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
  DataTableResource,
  DataTableParams, DataTableTranslations,
  CellCallback, RowCallback
};

@NgModule({
  declarations: [
    DataTableComponent, DataTableColumnDirective,
    DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent,
    PixelConverter, HideDirective, MinPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DataTableComponent, DataTableColumnDirective]
})

export class DataTableModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataTableModule,
      providers: []
    };
  }
}


