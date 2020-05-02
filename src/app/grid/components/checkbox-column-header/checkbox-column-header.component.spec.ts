import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IHeaderParams } from 'ag-grid-community';
import { ChangeDetectorRef } from '@angular/core';

import { CommonCheckboxComponent } from '../checkbox/checkbox.component';
import { CheckboxColumnHeaderComponent } from './checkbox-column-header.component';

describe('CheckboxColumnHeaderComponent', () => {
    let checkboxColumnHeaderComponent: CheckboxColumnHeaderComponent;
    let fixture: ComponentFixture<CheckboxColumnHeaderComponent>;
    let changeDetector: ChangeDetectorRef;

    let gridApiStub: {
        getDisplayedRowCount: jasmine.Spy;
        getSelectedRows: jasmine.Spy;
        selectAll: jasmine.Spy;
        deselectAll: jasmine.Spy;
        refreshCells: jasmine.Spy;
    } & HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheckboxColumnHeaderComponent, CommonCheckboxComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CheckboxColumnHeaderComponent);
        checkboxColumnHeaderComponent = fixture.componentInstance;
        changeDetector = fixture.componentRef.injector.get(ChangeDetectorRef);

        gridApiStub = Object.assign(
            document.createElement('div'),
            jasmine.createSpyObj('api', [
                'getDisplayedRowCount',
                'getSelectedRows',
                'selectAll',
                'deselectAll',
                'refreshCells',
            ]),
            {},
        );

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(checkboxColumnHeaderComponent).toBeDefined();
    });

    it('should update checkbox state on selection change', () => {
        gridApiStub.getDisplayedRowCount.and.callFake(() => 2);
        gridApiStub.getSelectedRows.and.callFake(() => [{}, {}]);

        checkboxColumnHeaderComponent.agInit(({ api: gridApiStub } as any) as IHeaderParams);
        gridApiStub.dispatchEvent(new CustomEvent('selectionChanged'));
        changeDetector.detectChanges();

        const checkbox: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
        expect(checkbox.checked).toBeTrue();

        gridApiStub.getSelectedRows.and.callFake(() => [{}]);
        gridApiStub.dispatchEvent(new CustomEvent('selectionChanged'));
        changeDetector.detectChanges();
        expect(checkbox.checked).toBeFalse();
    });

    it('should call grid api for selection/deselection all rows', () => {
        checkboxColumnHeaderComponent.agInit(({ api: gridApiStub } as any) as IHeaderParams);
        const checkbox: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

        checkbox.click();
        changeDetector.detectChanges();
        expect(gridApiStub.selectAll).toHaveBeenCalled();
        expect(gridApiStub.refreshCells).toHaveBeenCalled();

        checkbox.click();
        changeDetector.detectChanges();
        expect(gridApiStub.deselectAll).toHaveBeenCalled();
        expect(gridApiStub.refreshCells).toHaveBeenCalled();
    });
});
