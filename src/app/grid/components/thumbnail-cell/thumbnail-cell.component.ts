import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'test-thumbnail-cell',
    templateUrl: './thumbnail-cell.component.html',
})
export class ThumbnailCellComponent implements ICellRendererAngularComp {
    public thumbnailUrl: string;

    public agInit({ value }: ICellRendererParams) {
        this.thumbnailUrl = value;
    }

    public refresh() {
        return false;
    }
}
