import { Component } from '@angular/core';
import { IStatusPanelAngularComp } from 'ag-grid-angular';
import { IStatusPanelParams, ColumnApi } from 'ag-grid-community';

@Component({
    selector: 'test-selection-toggle',
    templateUrl: './selection-toggle.component.html',
})
export class SelectionToggleComponent implements IStatusPanelAngularComp {
    private columnApi: ColumnApi;
    private isCheckboxColumnVisible = false;

    agInit({ columnApi }: IStatusPanelParams) {
        this.columnApi = columnApi;
    }

    public onClick() {
        this.isCheckboxColumnVisible = !this.isCheckboxColumnVisible;
        this.columnApi.setColumnVisible('checkboxColumn', this.isCheckboxColumnVisible);
    }
}
