export interface IRawVideo {
    id: { videoId: string };
    snippet: {
        description: string;
        publishedAt: string;
        title: string;
        thumbnails: {
            medium: { url: string };
        };
    };
}

export interface IVideosResponse {
    items: IRawVideo[];
}

export interface IVideo {
    id: string;
    description: string;
    publishedAt: string;
    thumbnail: string;
    title: string;
}
