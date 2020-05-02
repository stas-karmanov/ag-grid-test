import { Component } from '@angular/core';
import { IStatusPanelAngularComp } from 'ag-grid-angular';
import { IStatusPanelParams, ColumnApi, GridApi } from 'ag-grid-community';

import { CHECKBOX_COLUMN_ID } from '../../grid.models';

@Component({
    selector: 'test-selection-toggle',
    templateUrl: './selection-toggle.component.html',
})
export class SelectionToggleComponent implements IStatusPanelAngularComp {
    private columnApi: ColumnApi;
    private gridApi: GridApi;
    private isCheckboxColumnVisible = false;

    agInit({ columnApi, api }: IStatusPanelParams) {
        this.columnApi = columnApi;
        this.gridApi = api;
    }

    public onClick() {
        this.isCheckboxColumnVisible = !this.isCheckboxColumnVisible;
        this.columnApi.setColumnVisible(CHECKBOX_COLUMN_ID, this.isCheckboxColumnVisible);

        if (!this.isCheckboxColumnVisible) {
            this.gridApi.deselectAll();
        }
    }
}
