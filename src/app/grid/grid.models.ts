import { ColDef, StatusPanelDef } from 'ag-grid-community';

import {
    ThumbnailCellComponent,
    VideoLinkCellComponent,
    PublishDateCellComponent,
    SelectionToggleComponent,
    CheckboxCellComponent,
    CheckboxColumnHeaderComponent,
} from './components';

export const gridColumns: ColDef[] = [
    {
        headerName: '',
        cellRendererFramework: CheckboxCellComponent,
        headerComponentFramework: CheckboxColumnHeaderComponent,
        width: 30,
        // hide: true,
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
        width: 150,
        cellRendererFramework: PublishDateCellComponent,
    },
    {
        headerName: 'Video Title',
        field: 'title',
        width: 240,
        cellRendererFramework: VideoLinkCellComponent,
    },
    { headerName: 'Description', field: 'description', width: 350 },
];

export const statusPanels: StatusPanelDef[] = [
    {
        statusPanelFramework: SelectionToggleComponent,
        align: 'left',
    },
    {
        statusPanel: 'agSelectedRowCountComponent',
        align: 'right',
    },
    {
        statusPanel: 'agTotalRowCountComponent',
        align: 'right',
    },
];
