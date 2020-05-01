import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICellRendererParams, GridApi, RowNode } from 'ag-grid-community';
import { ChangeDetectorRef } from '@angular/core';

import { CheckboxCellComponent } from './checkbox-cell.component';
import { CommonCheckboxComponent } from '../checkbox/checkbox.component';

describe('CheckboxCellComponent', () => {
    let checkboxCellComponent: CheckboxCellComponent;
    let fixture: ComponentFixture<CheckboxCellComponent>;
    let changeDetector: ChangeDetectorRef;

    let nodeStub: { setSelected: jasmine.Spy; isSelected: jasmine.Spy };

    const gridApiStub = document.createElement('div');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheckboxCellComponent, CommonCheckboxComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CheckboxCellComponent);
        checkboxCellComponent = fixture.componentInstance;
        changeDetector = fixture.componentRef.injector.get(ChangeDetectorRef);

        nodeStub = jasmine.createSpyObj('node', ['setSelected', 'isSelected']);

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(checkboxCellComponent).toBeDefined();
    });

    it('should set checkbox state to "true" on selection change', () => {
        nodeStub.isSelected.and.callFake(() => true);

        checkboxCellComponent.agInit({
            node: (nodeStub as any) as RowNode,
            api: (gridApiStub as any) as GridApi,
        } as ICellRendererParams);

        gridApiStub.dispatchEvent(new CustomEvent('selectionChanged'));

        changeDetector.detectChanges();

        const checkbox: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

        expect(checkbox.checked).toBeTrue();
    });

    it('should change node selected state while checkbox clicking', () => {
        nodeStub.isSelected.and.callFake(() => false);

        checkboxCellComponent.agInit({
            node: (nodeStub as any) as RowNode,
            api: (gridApiStub as any) as GridApi,
        } as ICellRendererParams);

        const checkbox: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
        checkbox.click();

        expect(nodeStub.setSelected).toHaveBeenCalledWith(true);
    });
});
