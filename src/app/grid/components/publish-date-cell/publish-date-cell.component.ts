import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'test-publish-date-cell',
    templateUrl: './publish-date-cell.component.html',
})
export class PublishDateCellComponent implements ICellRendererAngularComp {
    public publishDate: string;

    public agInit({ value }: ICellRendererParams) {
        this.publishDate = new Date(value).toLocaleString();
    }

    public refresh() {
        return false;
    }
}
