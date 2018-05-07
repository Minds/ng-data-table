import {ContentChild, Directive, ElementRef, Input, OnInit} from '@angular/core';
import {DataTableRowComponent} from '../../components/row/row.component';
import {CellCallback} from '../../types/cell-callback.type';


@Directive({
  selector: 'data-table-column'
})
export class DataTableColumnDirective implements OnInit {

  private styleClassObject = {}; // for [ngClass]

  // init:
  @Input() header: string;
  @Input() sortable = false;
  @Input() resizable = false;
  @Input() property: string;
  @Input() styleClass: string;
  @Input() cellColors: CellCallback;

  // init and state:
  @Input() width: number | string;
  @Input() visible = true;

  @ContentChild('dataTableCell') cellTemplate: ElementRef;
  @ContentChild('dataTableHeader') headerTemplate: ElementRef;

  getCellColor(row: DataTableRowComponent, index: number) {
    if (this.cellColors !== undefined) {
      return (<CellCallback>this.cellColors)(row.item, row, this, index);
    }
  }

  ngOnInit() {
    this._initCellClass();
  }

  private _initCellClass() {
    if (!this.styleClass && this.property) {
      if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
        this.styleClass = 'column-' + this.property;
      } else {
        this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
      }
    }

    if (this.styleClass != null) {
      this.styleClassObject = {
        [this.styleClass]: true
      };
    }
  }
}
