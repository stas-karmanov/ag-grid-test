import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { gridColumns } from './grid.models';
import { YoutubeService } from './services/youtube.service';
import { IVideo } from './services/youtube.models';

@Component({
    selector: 'test-grid',
    templateUrl: './grid.component.html',
})
export class GridComponent {
    public gridOptions: GridOptions = {
        columnDefs: gridColumns,
        rowSelection: 'multiple',
    };

    public videos: Observable<IVideo[]> = this.youtubeService.getVideos();

    constructor(private youtubeService: YoutubeService) {}
}
