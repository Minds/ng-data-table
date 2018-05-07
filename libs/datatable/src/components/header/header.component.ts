import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Inject
} from '@angular/core';
import { DataTableComponent } from '../table/table.component';

@Component({
  selector: 'data-table-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class DataTableHeaderComponent {

  columnSelectorOpen = false;

  constructor(@Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent,
              private elemRef: ElementRef) {
  }

  @HostListener('document:click', ['$event']) onClickHandler(event) {
    if (!this.elemRef.nativeElement.contains(event.target)) {
      this.columnSelectorOpen = false;
    }
  }

  @HostListener('document:keyup', ['$event']) onKeyUpHandler(event) {
    if (event.keyCode === 27 || (event.keyCode === 9 && !this.elemRef.nativeElement.contains(event.target))) {
      this.columnSelectorOpen = false;
    }
  }

  onChange(event: Event) {
    const isChecked = (<HTMLInputElement> event.target).checked;
    const columnName = (<HTMLInputElement> event.target).parentElement.textContent.trim();
    const interpolateParams = {
      'column_name': columnName,
      'title': this.dataTable.title
    };

    this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
      this.dataTable.labels.headerColumnSelectorRemoved)
      .replace('{column_name}', interpolateParams.column_name)
      .replace('{title}', interpolateParams.title);
  }
}
