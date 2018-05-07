import { Component, ViewChild } from '@angular/core';
import { DataTable, DataTableResource } from 'angular5-datatable';


@Component({
  selector: 'app-data-table-demo-5',
  templateUrl: './data-table-demo5.html',
  styleUrls: ['./data-table-demo5.css']
})
export class DataTableDemo5Component {

    filmResource = new DataTableResource([]);
    films = [];
    filmCount = 0;

    @ViewChild(DataTable) filmsTable;

    constructor() {
        this.filmResource.count().then(count => this.filmCount = count);
    }

    reloadFilms(params) {
        this.filmResource.query(params).then(filmsRes => this.films = filmsRes);
    }

}
