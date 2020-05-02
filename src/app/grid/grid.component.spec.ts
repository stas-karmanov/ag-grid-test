import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import 'ag-grid-enterprise';

import { GRID_COMPONENTS } from './components';
import { GridComponent } from './grid.component';
import { IVideo } from './services/youtube.models';
import { YoutubeService } from './services/youtube.service';
import { WINDOW } from '../window';
import { expectedVideos } from './services/youtube.mocks';

describe('GridComponent', () => {
    let checkboxColumnHeaderComponent: GridComponent;
    let fixture: ComponentFixture<GridComponent>;

    let youtubeServiceStub: {
        getVideos: jasmine.Spy<() => Observable<IVideo[]>>;
        generateVideoLink: jasmine.Spy<(id: string) => string>;
    };
    let windowStub: { open: jasmine.Spy<(url: string, target: string) => void> };

    beforeEach(async(() => {
        youtubeServiceStub = jasmine.createSpyObj('YoutubeService', ['getVideos', 'generateVideoLink']);
        windowStub = jasmine.createSpyObj('Window', ['open']);

        youtubeServiceStub.getVideos.and.callFake(() => of(expectedVideos));

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: YoutubeService,
                    useValue: youtubeServiceStub,
                },
                {
                    provide: WINDOW,
                    useValue: windowStub,
                },
            ],
            declarations: [GridComponent, ...GRID_COMPONENTS],
            imports: [CommonModule, AgGridModule.withComponents([...GRID_COMPONENTS])],
        }).compileComponents();

        fixture = TestBed.createComponent(GridComponent);
        checkboxColumnHeaderComponent = fixture.componentInstance;

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(checkboxColumnHeaderComponent).toBeDefined();
    });

    it('should create "Open in new tab" context menu option', async (done) => {
        youtubeServiceStub.generateVideoLink.and.callFake((id) => `http://youtubeurl/${id}`);

        await checkboxColumnHeaderComponent.gridReady$;

        const publishDate: HTMLElement = document.querySelector('test-publish-date-cell > div');
        publishDate?.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
        fixture.detectChanges();

        const menuItem: HTMLElement = document.querySelector('.open-in-new-tab > span.ag-menu-option-text');

        expect(menuItem).toBeTruthy();
        expect(menuItem.textContent).toBe('Open in new tab');

        menuItem.click();
        expect(windowStub.open).toHaveBeenCalledWith(`http://youtubeurl/${expectedVideos[0].id}`, '_blank');

        done();
    });

    it('should open checkbox column while Toggle Selection clicking', async (done) => {
        await checkboxColumnHeaderComponent.gridReady$;

        expect(document.querySelector('test-checkbox-cell')).toBeFalsy();

        const toggleSelectionButton: HTMLButtonElement = document.querySelector('.toggle-selection-button');
        toggleSelectionButton.click();
        fixture.detectChanges();

        expect(document.querySelector('test-checkbox-cell')).toBeDefined();
        done();
    });

    it('should display selected rows count after rows selection', async (done) => {
        await checkboxColumnHeaderComponent.gridReady$;

        const toggleSelectionButton: HTMLButtonElement = document.querySelector('.toggle-selection-button');
        toggleSelectionButton.click();
        fixture.detectChanges();

        // wait until checkbox column appears
        await sleep(1000);

        const checkbox: HTMLInputElement = document.querySelector('test-checkbox-cell > test-checkbox >input');
        checkbox.click();
        fixture.detectChanges();

        expect(
            document.querySelector('.ag-status-panel-selected-row-count > .ag-status-name-value-value').textContent,
        ).toBe('1');

        done();
    });
});

const sleep = (time: number) => {
    let resolveSleep: () => void;
    const sleep$ = new Promise<void>((res) => (resolveSleep = res));

    setTimeout(() => resolveSleep(), time);

    return sleep$;
};
