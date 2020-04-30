import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { GridComponent } from './grid.component';

@NgModule({
    declarations: [GridComponent],
    imports: [CommonModule, AgGridModule.withComponents([])],
    exports: [GridComponent],
})
export class GridModule {}
