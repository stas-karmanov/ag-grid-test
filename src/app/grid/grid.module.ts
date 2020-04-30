import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { GridComponent } from './grid.component';
import { GRID_COMPONENTS } from './components';

@NgModule({
    declarations: [GridComponent, ...GRID_COMPONENTS],
    imports: [CommonModule, AgGridModule.withComponents([...GRID_COMPONENTS])],
    exports: [GridComponent],
})
export class GridModule {}
