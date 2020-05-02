import { ColDef } from 'ag-grid-community';

import {
    CheckboxCellComponent,
    CheckboxColumnHeaderComponent,
    ThumbnailCellComponent,
    PublishDateCellComponent,
    VideoLinkCellComponent,
} from './components';
import { CHECKBOX_COLUMN_ID } from './grid.models';

export const gridColumns: ColDef[] = [
    {
        headerName: '',
        colId: CHECKBOX_COLUMN_ID,
        cellRendererFramework: CheckboxCellComponent,
        headerComponentFramework: CheckboxColumnHeaderComponent,
        width: 30,
        hide: true,
        cellStyle: { display: 'flex' },
    },
    {
        headerName: '',
        field: 'thumbnail',
        width: 240,
        cellRendererFramework: ThumbnailCellComponent,
    },
    {
        headerName: 'Published on',
        field: 'publishedAt',
        flex: 1,
        cellRendererFramework: PublishDateCellComponent,
    },
    {
        headerName: 'Video Title',
        field: 'title',
        flex: 1,
        cellRendererFramework: VideoLinkCellComponent,
    },
    { headerName: 'Description', field: 'description', flex: 2 },
];
