import { IVideosResponse, IVideo } from './youtube.models';

export const mockResponse: IVideosResponse = {
    items: [
        {
            id: {
                videoId: '3fumBcKC6RE',
            },
            snippet: {
                publishedAt: '2011-05-12T20:01:31.000Z',
                title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
                description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
                thumbnails: {
                    medium: {
                        url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                    },
                },
            },
        },
        {
            id: {
                videoId: 'EMKDsIKVFX8',
            },
            snippet: {
                publishedAt: '2020-04-30T19:42:36.000Z',
                title: 'Nuclear Update, can&#39;t win | Tower Defense Simulator ROBLOX',
                description: 'very cool, thank you games #roblox.',
                thumbnails: {
                    medium: {
                        url: 'https://i.ytimg.com/vi/EMKDsIKVFX8/mqdefault.jpg',
                    },
                },
            },
        },
    ],
};

export const expectedVideos: IVideo[] = [
    {
        id: '3fumBcKC6RE',
        publishedAt: '2011-05-12T20:01:31.000Z',
        title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
        description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
        thumbnail: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
    },
    {
        id: 'EMKDsIKVFX8',
        publishedAt: '2020-04-30T19:42:36.000Z',
        title: 'Nuclear Update, can&#39;t win | Tower Defense Simulator ROBLOX',
        description: 'very cool, thank you games #roblox.',
        thumbnail: 'https://i.ytimg.com/vi/EMKDsIKVFX8/mqdefault.jpg',
    },
];
