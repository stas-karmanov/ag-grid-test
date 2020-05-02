import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { fromEvent, Observable } from 'rxjs';
import { GridApi, IHeaderParams } from 'ag-grid-community';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'test-checkbox-column-header',
    templateUrl: './checkbox-column-header.component.html',
})
export class CheckboxColumnHeaderComponent implements IHeaderAngularComp {
    public checkboxState$: Observable<boolean>;

    private gridApi: GridApi;

    agInit({ api }: IHeaderParams) {
        this.gridApi = api;

        this.checkboxState$ = fromEvent(this.gridApi, 'selectionChanged').pipe(
            map(() => this.gridApi.getDisplayedRowCount() === this.gridApi.getSelectedRows().length),
            startWith(false),
        );
    }

    public onSelectedStateChange(checkboxState: boolean) {
        if (checkboxState) {
            this.gridApi.selectAll();
        } else {
            this.gridApi.deselectAll();
        }

        this.gridApi.refreshCells();
    }
}
