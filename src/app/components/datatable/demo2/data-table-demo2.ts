import { Component, ViewChild } from '@angular/core';
import { Cars } from './data-table-demo2-data';
import { DataTable, DataTableResource } from '@angular5/datatable';


@Component({
  selector: 'app-data-table-demo-2',
  templateUrl: './data-table-demo2.html'
})
export class DataTableDemo2Component {

    yearLimit = 1999;
    carResource = new DataTableResource(Cars);
    cars = [];
    carCount = 0;

    @ViewChild(DataTable) carsTable: DataTable;

    constructor() {
        this.rowColors = this.rowColors.bind(this);

        this.carResource.count().then(count => this.carCount = count);
    }

    reloadCars(params) {
        this.carResource.query(params).then(cars => this.cars = cars);
    }

    // custom features:
    carClicked(car) {
        alert(car.model);
    }

    rowColors(car) {
        if (car.year >= this.yearLimit) {
          return 'rgb(255, 255, 197)';
        }
    }
}
