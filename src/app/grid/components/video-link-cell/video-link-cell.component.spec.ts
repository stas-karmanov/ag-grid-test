import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICellRendererParams } from 'ag-grid-community';

import { VideoLinkCellComponent } from './video-link-cell.component';
import { YoutubeService } from '../../services/youtube.service';

describe('VideoLinkCellComponent', () => {
    let videoLinkCellComponent: VideoLinkCellComponent;
    let fixture: ComponentFixture<VideoLinkCellComponent>;

    let youtubeServiceStub: { generateVideoLink: jasmine.Spy };

    beforeEach(async(() => {
        youtubeServiceStub = jasmine.createSpyObj('YoutubeService', ['generateVideoLink']);

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: YoutubeService,
                    useValue: youtubeServiceStub,
                },
            ],
            declarations: [VideoLinkCellComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(VideoLinkCellComponent);
        videoLinkCellComponent = fixture.componentInstance;

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(videoLinkCellComponent).toBeDefined();
    });

    it('should render anchor tag with correct href', () => {
        youtubeServiceStub.generateVideoLink.and.callFake((videoId: string) => `http://youtubeurl/${videoId}`);

        videoLinkCellComponent.agInit({ data: { title: 'href', id: '123' } } as ICellRendererParams);
        fixture.detectChanges();

        const anchor: HTMLAnchorElement = fixture.debugElement.query(By.css('a')).nativeElement;

        expect(anchor.href).toBe('http://youtubeurl/123');
        expect(anchor.target).toBe('_blank');
        expect(anchor.textContent).toBe('href');
    });
});
