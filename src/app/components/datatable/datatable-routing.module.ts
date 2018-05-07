import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableDemo1Component } from './demo1/data-table-demo1';
import { DataTableDemo2Component } from './demo2/data-table-demo2';
import { DataTableDemo3Component } from './demo3/data-table-demo3';
import { DataTableDemo4Component } from './demo4/data-table-demo4';
import { DataTableDemo5Component } from './demo5/data-table-demo5';

const routes: Routes = [
  {
    path: 'demo1',
    component: DataTableDemo1Component,
    data: {src: 'datatable/demo1/data-table-demo1' }
  },
  {
    path: 'demo2',
    component: DataTableDemo2Component,
    data: {src: 'datatable/demo2/data-table-demo2' }
  },
  {
    path: 'demo3',
    component: DataTableDemo3Component,
    data: {src: 'datatable/demo3/data-table-demo3' }
  },
  {
    path: 'demo4',
    component: DataTableDemo4Component,
    data: {src: 'datatable/demo4/data-table-demo4' }
  },
  {
    path: 'demo5',
    component: DataTableDemo5Component,
    data: {src: 'datatable/demo5/data-table-demo5' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
