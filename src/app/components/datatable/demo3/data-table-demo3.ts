import { Component, ViewChild } from '@angular/core';
import { films } from './data-table-demo3-data';
import { DataTable, DataTableResource, DataTableTranslations } from 'angular5-datatable';


@Component({
  selector: 'app-data-table-demo-3',
  templateUrl: './data-table-demo3.html',
  styleUrls: ['./data-table-demo3.css']
})
export class DataTableDemo3Component {

    filmResource = new DataTableResource(films);
    films = [];
    filmCount = 0;
    labels = <DataTableTranslations>{
      loadingText: 'Your {title} table is reloading - and this is my custom message.',
      paginationText: 'Your table displays {from} to {to} of {total} rows.'
    };

    @ViewChild(DataTable) filmsTable;

    constructor() {
        this.filmResource.count().then(count => this.filmCount = count);
    }

    reloadFilms(params) {
        this.filmResource.query(params).then(filmsRes => this.films = filmsRes);
    }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    }
}
