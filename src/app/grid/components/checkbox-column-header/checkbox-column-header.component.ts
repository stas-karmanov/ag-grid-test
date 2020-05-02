import { Component, OnDestroy } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { Subscription, fromEvent, BehaviorSubject } from 'rxjs';
import { GridApi, IHeaderParams } from 'ag-grid-community';
import { map } from 'rxjs/operators';

@Component({
    selector: 'test-checkbox-column-header',
    templateUrl: './checkbox-column-header.component.html',
})
export class CheckboxColumnHeaderComponent implements IHeaderAngularComp, OnDestroy {
    public static state$ = new BehaviorSubject<boolean>(false);

    public get checkboxState$() {
        return CheckboxColumnHeaderComponent.state$;
    }

    private gridApi: GridApi;
    private subscription = new Subscription();

    agInit({ api }: IHeaderParams) {
        this.gridApi = api;

        this.subscription.add(
            fromEvent(this.gridApi, 'selectionChanged')
                .pipe(map(() => this.gridApi.getDisplayedRowCount() === this.gridApi.getSelectedRows().length))
                .subscribe(CheckboxColumnHeaderComponent.state$),
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
