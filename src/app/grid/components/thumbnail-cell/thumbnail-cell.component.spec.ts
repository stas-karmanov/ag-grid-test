import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICellRendererParams } from 'ag-grid-community';

import { ThumbnailCellComponent } from './thumbnail-cell.component';

describe('ThumbnailCellComponent', () => {
    let thumbnailCellComponent: ThumbnailCellComponent;
    let fixture: ComponentFixture<ThumbnailCellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThumbnailCellComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ThumbnailCellComponent);
        thumbnailCellComponent = fixture.componentInstance;

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(thumbnailCellComponent).toBeDefined();
    });

    it('should set src to an image', () => {
        const urlToImage = 'http://urltoimg/';

        thumbnailCellComponent.agInit({ value: urlToImage } as ICellRendererParams);
        fixture.detectChanges();

        const image: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;

        expect(image.src).toBe(urlToImage);
    });
});
