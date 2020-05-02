import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IStatusPanelParams } from 'ag-grid-community';

import { SelectionToggleComponent } from './selection-toggle.component';
import { CHECKBOX_COLUMN_ID } from '../../grid.models';

describe('SelectionToggleComponent', () => {
    let selectionToggleComponent: SelectionToggleComponent;
    let fixture: ComponentFixture<SelectionToggleComponent>;

    let columnApiStub: { setColumnVisible: jasmine.Spy };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectionToggleComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SelectionToggleComponent);
        selectionToggleComponent = fixture.componentInstance;

        columnApiStub = jasmine.createSpyObj('node', ['setColumnVisible']);

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(selectionToggleComponent).toBeDefined();
    });

    it('should toggle visibility state while clicking', () => {
        selectionToggleComponent.agInit(({ columnApi: columnApiStub } as any) as IStatusPanelParams);
        const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

        button.click();
        fixture.detectChanges();
        expect(columnApiStub.setColumnVisible).toHaveBeenCalledWith(CHECKBOX_COLUMN_ID, true);

        button.click();
        fixture.detectChanges();
        expect(columnApiStub.setColumnVisible).toHaveBeenCalledWith(CHECKBOX_COLUMN_ID, false);
    });
});
