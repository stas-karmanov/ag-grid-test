import { StatusPanelDef } from 'ag-grid-community';

import { SelectionToggleComponent } from './components';

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
