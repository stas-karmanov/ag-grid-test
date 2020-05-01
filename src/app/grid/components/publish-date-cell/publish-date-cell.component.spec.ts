import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PublishDateCellComponent } from './publish-date-cell.component';

describe('PublishDateCellComponent', () => {
    let publishDateComponent: PublishDateCellComponent;
    let fixture: ComponentFixture<PublishDateCellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublishDateCellComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PublishDateCellComponent);
        publishDateComponent = fixture.componentInstance;

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(publishDateComponent).toBeDefined();
    });

    it('should render date', () => {
        const date = new Date().toLocaleDateString();
        publishDateComponent.publishDate = date;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('div')).nativeElement.textContent).toBe(date);
    });
});
