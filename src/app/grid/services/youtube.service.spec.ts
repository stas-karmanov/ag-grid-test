import { TestScheduler } from 'rxjs/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { YoutubeService } from './youtube.service';
import { mockResponse, expectedVideos } from './youtube.mocks';

describe('YoutubeService', () => {
    let testScheduler: TestScheduler;
    let youtubeService: YoutubeService;
    let httpStub: { get: jasmine.Spy };

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });

        httpStub = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: httpStub,
                },
                YoutubeService,
            ],
        });

        youtubeService = TestBed.inject(YoutubeService);
    });

    describe('#getVideos', () => {
        it('should return correctly transformed result', () => {
            httpStub.get.and.returnValue(of(mockResponse));

            testScheduler.run(({ expectObservable }) => {
                const expectedMarble = '(a|)';
                const expectedValues = { a: expectedVideos };

                expectObservable(youtubeService.getVideos()).toBe(expectedMarble, expectedValues);
            });
        });
    });

    describe('#generateVideoLink', () => {
        it('should generate correct links', () => {
            const videoIds = ['3fumBcKC6RE', 'EMKDsIKVFX8'];
            const expectedLinks = [
                'https://www.youtube.com/watch?v=3fumBcKC6RE',
                'https://www.youtube.com/watch?v=EMKDsIKVFX8',
            ];

            expect(videoIds.map((videoId) => youtubeService.generateVideoLink(videoId))).toEqual(expectedLinks);
        });
    });
});
