import { Component } from '@angular/core';
import persons from './data-table-demo1-data';
import { DataTableResource } from 'angular5-data-table';

@Component({
    selector: 'app-data-table-demo-1',
    providers: [],
    templateUrl: './data-table-demo1.html',
    styleUrls: ['./data-table-demo1.css']
})
export class DataTableDemo1Component {

    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;
    limits = [10, 20, 40, 80];

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:
    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) {
      return item.jobTitle;
    }
}
