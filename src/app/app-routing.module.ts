import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocsViewerComponent } from './components/docs-viewer/docs-viewer.component';

const routes: Routes = [
  {
    path: 'datatable',
    loadChildren: 'app/components/datatable/datatable.module#DataTableDemoModule'
  },
  {
    path: 'docs/:component',
    component: DocsViewerComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
