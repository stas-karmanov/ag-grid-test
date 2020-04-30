import { ColDef } from 'ag-grid-community';

import { ThumbnailCellComponent, VideoLinkCellComponent, PublishDateCellComponent } from './components';

export const gridColumns: ColDef[] = [
    {
        headerName: '',
        field: 'thumbnail',
        width: 150,
        cellRendererFramework: ThumbnailCellComponent,
    },
    {
        headerName: 'Published on',
        field: 'publishedAt',
        width: 120,
        cellRendererFramework: PublishDateCellComponent,
    },
    {
        headerName: 'Video Title',
        field: 'title',
        width: 100,
        cellRendererFramework: VideoLinkCellComponent,
    },
    { headerName: 'Description', field: 'description', width: 350 },
];