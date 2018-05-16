import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// import { MarkdownModule } from 'ngx-md';
import { AppRoutingModule } from './app-routing.module';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';
import { DocsViewerComponent } from './components/docs-viewer/docs-viewer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CodeViewerComponent,
    DocsViewerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    // MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
