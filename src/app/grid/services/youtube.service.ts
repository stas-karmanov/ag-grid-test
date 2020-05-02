import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { IVideosResponse, IVideo, IRawVideo, responseMock } from './youtube.models';

@Injectable({
    providedIn: 'root',
})
export class YoutubeService {
    private readonly requestUrl =
        'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

    private readonly videoLink = 'https://www.youtube.com/watch?v=';

    constructor(private http: HttpClient) {}

    public getVideos(): Observable<IVideo[]> {
        return this.http.get<IVideosResponse>(this.requestUrl).pipe(map(({ items }) => this.transformVideos(items)));
        // TODO remove it before "release"
        // return of(responseMock).pipe(map(({ items }) => this.transformVideos(items)));
    }

    public generateVideoLink(videoId: string): string {
        return `${this.videoLink}${videoId}`;
    }

    private transformVideos(videos: IRawVideo[]): IVideo[] {
        return videos.map((video) => ({
            id: video.id.videoId,
            description: video.snippet.description,
            publishedAt: video.snippet.publishedAt,
            thumbnail: video.snippet.thumbnails.medium.url,
            title: video.snippet.title,
        }));
    }
}
