import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { YoutubeService } from '../../services/youtube.service';

@Component({
    selector: 'test-video-link-cell',
    templateUrl: './video-link-cell.component.html',
})
export class VideoLinkCellComponent implements ICellRendererAngularComp {
    public videoLink: string;
    public title: string;

    constructor(private youtubeService: YoutubeService) {}

    public agInit({ data: { title, id } }: ICellRendererParams) {
        this.videoLink = this.youtubeService.generateVideoLink(id);
        this.title = title;
    }

    public refresh() {
        return false;
    }
}
