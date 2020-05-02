import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, RowNode } from 'ag-grid-community';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'test-checkbox-cell',
    templateUrl: './checkbox-cell.component.html',
})
export class CheckboxCellComponent implements ICellRendererAngularComp {
    public checkboxState$: Observable<boolean>;

    private node: RowNode;

    agInit({ node, api }: ICellRendererParams) {
        this.node = node;

        this.checkboxState$ = fromEvent(api, 'selectionChanged').pipe(
            map(() => this.node.isSelected()),
            startWith(this.node.isSelected()),
        );
    }

    refresh() {
        return false;
    }

    public onSelectedStateChange(checkboxState: boolean) {
        this.node.setSelected(checkboxState);
    }
}
