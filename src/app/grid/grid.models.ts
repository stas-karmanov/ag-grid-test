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
        colId: 'checkboxColumn',
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
