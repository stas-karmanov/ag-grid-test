import { Component } from '@angular/core';
import { IStatusPanelAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'test-selection-toggle',
    templateUrl: './selection-toggle.component.html',
})
export class SelectionToggleComponent implements IStatusPanelAngularComp {
    private state = false;

    agInit() {
        // ...
    }

    public onClick() {
        // ...
    }
}
