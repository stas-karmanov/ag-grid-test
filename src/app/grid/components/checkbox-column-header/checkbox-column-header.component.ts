import { Component, OnDestroy } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { BehaviorSubject, Subscription, fromEvent } from 'rxjs';
import { GridApi, IHeaderParams } from 'ag-grid-community';
import { map } from 'rxjs/operators';

@Component({
    selector: 'test-checkbox-column-header',
    templateUrl: './checkbox-column-header.component.html',
})
export class CheckboxColumnHeaderComponent implements IHeaderAngularComp, OnDestroy {
    public checkboxState$ = new BehaviorSubject<boolean>(false);

    private gridApi: GridApi;
    private subscription: Subscription;

    agInit({ api }: IHeaderParams) {
        this.gridApi = api;

        this.subscription = fromEvent(this.gridApi, 'selectionChanged')
            .pipe(map(() => this.gridApi.getDisplayedRowCount() === this.gridApi.getSelectedRows().length))
            .subscribe(this.checkboxState$);
    }

    public onSelectedStateChange(checkboxState: boolean) {
        if (checkboxState) {
            this.gridApi.selectAll();
        } else {
            this.gridApi.deselectAll();
        }

        this.gridApi.refreshCells();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
