import { ColDef } from 'ag-grid-community';

export const gridColumns: ColDef[] = [
    { headerName: '', field: 'thumbnail', autoHeight: true, width: 150 },
    { headerName: 'Published on', field: 'publishedAt', width: 100 },
    { headerName: 'Video Title', field: 'title', width: 100 },
    { headerName: 'Description', field: 'description', width: 350 },
];
