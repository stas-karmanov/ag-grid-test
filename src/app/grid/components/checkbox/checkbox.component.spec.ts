import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CommonCheckboxComponent } from './checkbox.component';

describe('CommonCheckboxComponent', () => {
    let checkboxComponent: CommonCheckboxComponent;
    let fixture: ComponentFixture<CommonCheckboxComponent>;
    let changeDetector: ChangeDetectorRef;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommonCheckboxComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CommonCheckboxComponent);
        checkboxComponent = fixture.componentInstance;
        changeDetector = fixture.componentRef.injector.get(ChangeDetectorRef);

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(checkboxComponent).toBeDefined();
    });

    it('should react on input property change', () => {
        const checkboxInput: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

        checkboxComponent.selectedState = true;
        changeDetector.detectChanges();
        expect(checkboxInput.checked).toBeTrue();

        checkboxComponent.selectedState = false;
        changeDetector.detectChanges();
        expect(checkboxInput.checked).toBeFalse();
    });

    it('should emit checkbox state', () => {
        const checkboxInput: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
        let checkboxState: boolean = null;

        checkboxComponent.selectedStateChange.subscribe((state: boolean) => (checkboxState = state));

        checkboxComponent.selectedState = true;
        checkboxInput.click();
        changeDetector.detectChanges();
        expect(checkboxState).toBeTrue();

        checkboxComponent.selectedState = false;
        checkboxInput.click();
        changeDetector.detectChanges();
        expect(checkboxState).toBeFalse();
    });
});
