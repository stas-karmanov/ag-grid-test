import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, RowNode } from 'ag-grid-community';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'test-checkbox-cell',
    templateUrl: './checkbox-cell.component.html',
})
export class CheckboxCellComponent implements ICellRendererAngularComp, OnDestroy {
    public checkboxState = false;

    private node: RowNode;
    private subscription: Subscription;

    agInit({ node, api }: ICellRendererParams) {
        this.node = node;
        this.checkboxState = this.node.isSelected();

        this.subscription = fromEvent(api, 'selectionChanged')
            .pipe(map(() => this.node.isSelected()))
            .subscribe((checkboxState) => (this.checkboxState = checkboxState));
    }

    refresh() {
        return false;
    }

    public onSelectedStateChange(checkboxState: boolean) {
        this.node.setSelected(checkboxState);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
