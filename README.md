# Angular 5 DataTable

*Note*: Originally this was fork of this [package](https://github.com/MIt9/angular-4-data-table).

A simple Angular 5 data table, with built-in solutions for features including:
* pagination
* sorting
* row selection (single/multi)
* expandable rows
* column resizing
* selecting visible columns
* accessibility

The component can be used not just with local data, but remote resources too, ie. when sorting and/or pagination are implemented server side.

The library is packaged with [`ng-packagr`](https://github.com/dherges/ng-packagr).

## Dependencies
Furthermore the component is based on Bootstrap v4.0 (*CSS-only*) and Font-Awesome v4.7, hence be sure to include them into your project.
Most likely you need to install them as dependencies...

```bash 
npm install bootstrap@4.0.0 font-awesome@4.7.0
```
   
... then you need to include the CSS bundles into .angular-cli.json file as show below.
```json
{
  "apps": [
    {
      "root": "src",
      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/font-awesome/css/font-awesome.css",
        "styles.css"
      ]
    }
 ]
}
```

## Installation

```bash
npm install angular5-data-table
```

## Usage

##### 1.Import Datatable module
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableModule } from 'angular5-data-table';

@NgModule({
  imports: [
  ...
  DataTableModule.forRoot()
  ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
      
##### 2. Include `<data-table>` and `<data-table-column>` into your component's template.
```HTML
<!-- my.component.template -->
<div>
...
 <data-table id="my-table"
  ...
  [title]="'Employees'"
  [items]="items"
  [itemCount]="itemCount"
  ...
  >
  <data-table-column
    [property]="'name'"
    [header]="'name'"
    ... >
  </data-table-column>
  <data-table-column
    ...
  </data-table-column>
</data-table>
...
</div>
```

## API        

### data-table
* `title` (`string` | default: `''`) table's name - it's highly recommend it's set for accessibility reasons as this will provide a better experience when interacting with the component, especially through a SR.
* `showTitle` (`boolean` | default: `true`): if `false`, the title is not shown into the component. Useful when want the header component visible (with its Reload and Coulumn Selector buttons), but not the title.
* `items` (`JsonObject[]` | default: `[]`) table data to show.
* `itemsCount` (`number` | default: `0`) items's count.
* `header` (`boolean` | default: `true`) show/hide the table header sub-component - this holds the table name and two buttons (_reload table_ and _column selector_).
* `pagination` (`boolean` | default: ) enable pagination. If `true`, pagination controls are shown at the bottom of the table.
* `indexColumn` (`boolean` | default: `true`) when `true` the table shows a 0-indexed column.
* `indexColumnHeader` (`string` | default: `''`) text shown as column header for the index column.
* `selectColumn` (`boolean` | default: `false`) when `true` the table shows a checkbox column for selecting specific row.
* `multiSelect` (`boolean` | default: `false`) allows multi-row selection, showing a checkbox at select's column header.
* `labels` (`DataTableTranslations` | default: `defaultTranslations`) interface holding all needed labels. You can pass a subset of the labels. The missing labels will be defaulted.
* `expandableRow` (`boolean` | default: `false`) when `true` each row will have a collapsible content.
* `selectOnRowClick` (`boolean` | default: `false`) when `true` each row is selectable via a single-click.
* `reload` (`function(): void` | default: `null`) function that is invoked when the table needs to re-render its data. Note: most of the times this is the place where the developer connects to a server in order to pull down the item set.
* `autoReload`  (`boolean` | default: `false`) when `true`, the `reload` function gets invoked and init time (`ngOnInit`).
* `rowColors` (`function(): 'color` | default: `null`) custom function that must return a _CSS color_ that will be applied to the entire row.
* `rowTooltip` (`function` | default: `null`) custom function to show a title tooltip when hovering the row.
* `showReloading` (`boolean` | default: `true`) when `true` an overlay with a gear icon is shown on top of the table while it's reloading.
* `noDataMessage` (`string` | default: `''`) message displayed when no item are displayed. If it's empty nothing is shown.
* `pageLimits` (`number[]` | default: `[10, 25, 50, 100, 250]`) items per page selector options.
* `primaryColumn` (`string` | default: first data column) it identifies which columns has be marked as primary. This is an important aspect from an accessibility and SR perspective. If not given, the first column will be the primary column.
* `page` (`number` | default: `0`) page to load, valid only if pagination is enabled.
* `limit` (`number` | default: `10`) number of items per page, valid only pagination is enabled. If `limit` value is not a valid (not contained into `pageLimits` array) it will be defaulted to `pageLimits`'s first value. 
* `sortBy` (`string` | default: `''`) column table is sorted by.
* `sortAsc` (`boolean` | default: `true`) valid only if `sortBy` is not defaulted. Defines the sorting order. If `true` sort is ascending, descending otherwise.

### data-table-column
* `property` (`string` | default: _no default_) item's `JSONObject` key used to retrieve the row cell content.
* `header` (`string` | default: _no default_) column header text.
* `sortable` (`boolean` | default: `false`) marks the columns as sortable.
* `resizable` (`boolean` | default: `false`) marks the columns as resizable.
* `visible` (`boolean` | default: `true`) marks the columns visible.
* `width` (`number | string` | default: `''`) defines the column width. It can be a string like `2rem` or a number. If it's a number, it will be considered as pixels.

### Custom column templates
data-column's content and header are not restricted to be text only - they can hold complex content too. In order to do that developers can use two references: `#dataTableHeader` and `#dataTableCell`.

# Usage and sample
```html
</data-table>
  ...
  <data-table-column
    header="Actions">
    <ng-template #dataTableHeader let-item="item">
      <i>Actions</i>
    </ng-template>
    <ng-template #dataTableCell let-item="item">
      <button (click)="carClicked(item)" class="btn btn-sm btn-default">Buy</button>
    </ng-template>
  </data-table-column>
  ...
</data-table>
```
As it can be seen from the above snippet, the `dataTableHeader` and `dataTableCell` are targeting two `<ng-template>`s nodes which will be used respectively as column header and cell content. In both cases `item` refers to the whole row item, so developers can use whatever they may need.

## Demo app
Clone this repository, run `npm install` and `ng serve`, then navigate to `http:localhost:4200` where you can access to the demo application sporting a few demos with code viewer and docs.

##Examples
![Demo1](https://user-images.githubusercontent.com/4410485/39678176-ce90ecc6-517f-11e8-82fd-ec85162ccf80.png)
![Demo2](https://user-images.githubusercontent.com/4410485/39678189-fcd6a080-517f-11e8-8cca-6dd5395703b0.png)
![Demo3](https://user-images.githubusercontent.com/4410485/39678197-1513fed6-5180-11e8-8ad6-64c08c9689fa.png)
![Demo4](https://user-images.githubusercontent.com/4410485/39678201-29df8740-5180-11e8-80f5-68249311aa20.png)
![Demo5](https://user-images.githubusercontent.com/4410485/39678204-425001f6-5180-11e8-8b7d-1decacd406a6.png)

## License
MIT License
