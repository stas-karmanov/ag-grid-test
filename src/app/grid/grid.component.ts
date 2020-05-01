import { Component, Inject } from '@angular/core';
import { GridOptions, MenuItemDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { gridColumns, statusPanels } from './grid.models';
import { YoutubeService } from './services/youtube.service';
import { IVideo } from './services/youtube.models';
import { WINDOW } from '../window';

@Component({
    selector: 'test-grid',
    templateUrl: './grid.component.html',
})
export class GridComponent {
    public gridOptions: GridOptions = {
        columnDefs: gridColumns,
        rowSelection: 'multiple',
        getContextMenuItems: (params) => {
            const videoId = params.node.data.id;
            const videoLink = this.youtubeService.generateVideoLink(videoId);

            const openInNewTapItem: MenuItemDef = {
                name: 'Open in new tab',
                action: () => this.window.open(videoLink, '_blank'),
            };

            return [...params.defaultItems, openInNewTapItem];
        },
        defaultColDef: {
            autoHeight: true,
            sortable: true,
            resizable: true,
            cellStyle: {
                'white-space': 'normal',
            },
        },
        statusBar: {
            statusPanels,
        },
    };

    public videos: Observable<IVideo[]> = this.youtubeService.getVideos();

    constructor(private youtubeService: YoutubeService, @Inject(WINDOW) private window: Window) {}
}
