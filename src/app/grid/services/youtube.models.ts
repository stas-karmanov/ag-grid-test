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

export const responseMock = {
    kind: 'youtube#searchListResponse',
    etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/xIf1sTU-_DeeoO1FpEYgJpV0ix8"',
    nextPageToken: 'CDIQAA',
    regionCode: 'BY',
    pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 50,
    },
    items: [
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Kq-9mzFf1I2LRyeEko4DAb5CdBA"',
            id: {
                kind: 'youtube#video',
                videoId: '3fumBcKC6RE',
            },
            snippet: {
                publishedAt: '2011-05-12T20:01:31.000Z',
                channelId: 'UCEOhcOACopL42xyOBIv1ekg',
                title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
                description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'LilWayneVEVO',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/fEG8sszQvEpypIn9EBq63qJ_YWw"',
            id: {
                kind: 'youtube#video',
                videoId: 'EMKDsIKVFX8',
            },
            snippet: {
                publishedAt: '2020-04-30T19:42:36.000Z',
                channelId: 'UCojsj6T5tNPGPZSx7wn4coQ',
                title: 'Nuclear Update, can&#39;t win | Tower Defense Simulator ROBLOX',
                description: 'very cool, thank you games #roblox.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/EMKDsIKVFX8/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/EMKDsIKVFX8/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/EMKDsIKVFX8/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'JOHN ROBLOX',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/YU6I9Yb1wk_Huul_UPrA87dnecY"',
            id: {
                kind: 'youtube#video',
                videoId: 'OTAoNXmISkI',
            },
            snippet: {
                publishedAt: '2020-04-30T17:19:46.000Z',
                channelId: 'UCdntfVwTKE9c3zs0P9VwwxA',
                title: 'SCP-3199 A TUÉ MON FRÈRE SUR MINECRAFT SURVIE ....',
                description:
                    'Dans ce nouvel épisode de ma survie scp sur minecraft pour la découverte de scp 3199 Contact pro : jon.57@outlook.fr ✔️ ABONNE-TOI ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/OTAoNXmISkI/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/OTAoNXmISkI/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/OTAoNXmISkI/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'John 2.0',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/csgxSNK3HVe3Lx--wdcYiK3Zky4"',
            id: {
                kind: 'youtube#video',
                videoId: 'yBGez1Y-gus',
            },
            snippet: {
                publishedAt: '2020-05-01T11:40:07.000Z',
                channelId: 'UCrfp53v4tTUmCFPHG-5FmeA',
                title: '🔴 En Direct - Morvan John Colem 1 Mai 2020',
                description:
                    'Abonnez ak TAK INFO Siw bezwen konn tout sa kap pase nan nouvèl Haiti yo , Nou bay tout nouvèl kap pase pandan jounen an Avèk reyaksyon politisyen yo ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/yBGez1Y-gus/default_live.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/yBGez1Y-gus/mqdefault_live.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/yBGez1Y-gus/hqdefault_live.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Tak info',
                liveBroadcastContent: 'live',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/zQUc2iZ443xEwmAyxENO9NQa_0A"',
            id: {
                kind: 'youtube#video',
                videoId: 'ndTf483gLP0',
            },
            snippet: {
                publishedAt: '2020-04-29T17:37:43.000Z',
                channelId: 'UCdntfVwTKE9c3zs0P9VwwxA',
                title: 'CE HACK TIK TOK EST COMPLETEMENT DINGUE ! (diamant et émeraude infini ) sur Minecraft #12',
                description:
                    'Dans ce nouvel épisode de ma série en 1.16, on se retrouve pour tester un nouveau hack tiktok minecraft ! Contact pro : jon.57@outlook.fr ✔️ ABONNE-TOI ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/ndTf483gLP0/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/ndTf483gLP0/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/ndTf483gLP0/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'John 2.0',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/2HxHWsmx18Eh_l8NH9rQkD1B0CY"',
            id: {
                kind: 'youtube#video',
                videoId: 'VMjk_7yBboY',
            },
            snippet: {
                publishedAt: '2020-04-28T15:00:26.000Z',
                channelId: 'UCFBO5h2l4Py0hXtSzETH7mw',
                title: 'Let&#39;s Keep You Safe Baby John | No No Seat Belt! | Little Angel Kids Songs',
                description:
                    'Baby John decides to venture out in the world, but he needs to learn how to be safe. With the help of his family, Baby John learns the importance of always ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/VMjk_7yBboY/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/VMjk_7yBboY/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/VMjk_7yBboY/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Little Angel Playtime',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/3oqcNz-5sDPRX5dmsV8uxfkuzxo"',
            id: {
                kind: 'youtube#video',
                videoId: 'WNd0Ewzd1tw',
            },
            snippet: {
                publishedAt: '2020-02-28T10:59:32.000Z',
                channelId: 'UCtke4StIE5z2EiF85Zeqb-A',
                title: '5GANG - JOHN CENA (Official Video)',
                description:
                    'Magazin Oficial 5GANG™: https://shop.5gang.ro @5GANG: @Selly @Gami @Diana C @Madalin Serban @PAIN Daca vreti sa va inscrieti in concurs pentru a ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/WNd0Ewzd1tw/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/WNd0Ewzd1tw/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/WNd0Ewzd1tw/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Selly',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/HY_Q6YVFuxTsJwCLCFq1tibsK7w"',
            id: {
                kind: 'youtube#video',
                videoId: '450p7goxZqg',
            },
            snippet: {
                publishedAt: '2013-10-02T14:00:06.000Z',
                channelId: 'UCNnnwVSI5Ndo2I4Y-LPuuew',
                title: 'John Legend - All of Me (Edited Video)',
                description:
                    "John Legend's official music video for 'All Of Me'. Click to listen to John Legend on Spotify: http://smarturl.it/JohnLSpotify?IQid=... As featured on Love In The ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/450p7goxZqg/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/450p7goxZqg/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/450p7goxZqg/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'johnlegendVEVO',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/wXZgJfxPyl7WVjwVyJr9U-t7Csg"',
            id: {
                kind: 'youtube#video',
                videoId: 'CfihYWRWRTQ',
            },
            snippet: {
                publishedAt: '2013-05-08T20:00:30.000Z',
                channelId: 'UC7KqPOHnMTzdBjkbTQp5ebg',
                title: 'John Newman - Love Me Again',
                description:
                    "Debut album 'Tribute' is out now: https://JohnNewman.lnk.to/tributeID New album 'Revolve' is available to pre-order now (released 16th Oct 2015). Get signed ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'JohnNewmanVEVO',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/FVJnYmLIrv_qeEUsaS186rv-i0Q"',
            id: {
                kind: 'youtube#video',
                videoId: 'IfZ3lUJlXD4',
            },
            snippet: {
                publishedAt: '2020-04-30T16:00:10.000Z',
                channelId: 'UC2ozVs4pg2K3uFLw6-0ayCQ',
                title: 'John Wall | Ep 32 | ALL THE SMOKE Full Episode | #StayHome with SHOWTIME Basketball',
                description:
                    'On the newest episode of All The Smoke, Wizards point guard John Wall joins Matt and Stephen to talk about his rehab, his relationship with teammate Bradley ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/IfZ3lUJlXD4/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/IfZ3lUJlXD4/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/IfZ3lUJlXD4/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'SHOWTIME Basketball',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/5Nk_SwekBReAM83dIDLJObViIHo"',
            id: {
                kind: 'youtube#video',
                videoId: 'fJTBmCVaaTc',
            },
            snippet: {
                publishedAt: '2020-03-08T14:00:10.000Z',
                channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                title: 'Baby John To The Rescue | Wheels On The Ambulance &amp; More Little Angel Kids Songs',
                description:
                    'When the family gets to the playground, Baby John becomes an ambulance driver. He decides to go out and save the day. Enjoy this version of the Wheels on ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/EMpV69251s_qzsaMre59Dbu3LCI"',
            id: {
                kind: 'youtube#video',
                videoId: 'iXvy8ZeCs5M',
            },
            snippet: {
                publishedAt: '2012-03-13T07:00:07.000Z',
                channelId: 'UCNnnwVSI5Ndo2I4Y-LPuuew',
                title: 'John Legend - Tonight (Best You Ever Had) ft. Ludacris (Official Music Video)',
                description:
                    "John Legend's official music video for 'Tonight (Best You Ever Had) ft. Ludacris'. Click to listen to John Legend on Spotify: http://smarturl.it/JohnLSpotify?",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'johnlegendVEVO',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/5ngbmdwSGpv6e_ctr4a9doMbv-c"',
            id: {
                kind: 'youtube#video',
                videoId: '6ACl8s_tBzE',
            },
            snippet: {
                publishedAt: '2014-09-12T07:00:01.000Z',
                channelId: 'UCaHNFIob5Ixv74f5on3lvIw',
                title: 'Calvin Harris - Blame ft. John Newman',
                description:
                    'Blame ft. John Newman is taken from the new album Motion, out now: Digital: http://smarturl.it/CHMotion?IQid=YT Stream: http://smarturl.it/StreamCH?IQid=YT ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/6ACl8s_tBzE/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/6ACl8s_tBzE/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/6ACl8s_tBzE/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'CalvinHarrisVEVO',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/qJOZlx2m7kawMairCVz8zdOSKds"',
            id: {
                kind: 'youtube#video',
                videoId: 'EO9KrTUdvLE',
            },
            snippet: {
                publishedAt: '2020-04-26T18:53:17.000Z',
                channelId: 'UCdntfVwTKE9c3zs0P9VwwxA',
                title: 'CONSTRUCTION DE MES PREMIÈRES USINES EN REDSTONE SUR MINECRAFT SURVIE 1.16 ! #11',
                description:
                    'Me faire un don : https://streamlabs.com/john20skyl ○▭ TU VEUX ME REJOINDRE ? ▭○ Mon discord : https://asgardiamc.fr/discord ▻Instagram ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/EO9KrTUdvLE/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/EO9KrTUdvLE/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/EO9KrTUdvLE/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'John 2.0',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/i6IGcWU7s7R4gUyTTJm1rMo2MBc"',
            id: {
                kind: 'youtube#video',
                videoId: 'ThGpvgETmsQ',
            },
            snippet: {
                publishedAt: '2020-04-30T18:30:03.000Z',
                channelId: 'UCNJdce1Ae9cxSqpf-fSsOpQ',
                title: 'JOHN vs NEUE WAFFE in WARZONE (Top oder Flop?)',
                description:
                    '60€ SPAREN mit Code: JOHN (Special Rabatt) ᵂᴱᴿᴮᵁᴺᴳ ⭐Die Besten Controller: https://eu.aimcontrollers.com ▻AimContollers Erklärungs-Video: ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/ThGpvgETmsQ/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/ThGpvgETmsQ/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/ThGpvgETmsQ/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'JohnRaqe',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Y7tzGO0rHgB13MDNkVfv9v2JwzQ"',
            id: {
                kind: 'youtube#video',
                videoId: 'SDqQY2qMMxw',
            },
            snippet: {
                publishedAt: '2012-10-31T03:02:34.000Z',
                channelId: 'UCCXmpUg7EJTf8pDsEDQUKrQ',
                title: 'The Holy Bible - Book 43 - John - KJV Dramatized Audio',
                description:
                    'This is the holy book of John, known as "The Gospel According to Saint John". The recording is dramatized, from the King James Bible. This is, in my opinion, the ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'tmantz625',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Ss8NgTIfLHbtjqi3e6rIC2pTZ3E"',
            id: {
                kind: 'youtube#video',
                videoId: 'en9ZkOo2rRA',
            },
            snippet: {
                publishedAt: '2017-09-10T08:52:42.000Z',
                channelId: 'UC4NALVCmcmL5ntpV0thoH6w',
                title: 'Are You Sleeping (Brother John)? - Amazing Songs for Children | LooLoo Kids',
                description:
                    "Are You Sleeping? Watch this super fun animated nursery rhyme created by LooLoo Kids and let's sing together Download our new app for and now: ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "LooLoo Kids - Nursery Rhymes and Children's Songs",
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/P_z7nh56LGnUsFvVR1pYAVPcrRM"',
            id: {
                kind: 'youtube#video',
                videoId: 'dRFbwjwQ4VE',
            },
            snippet: {
                publishedAt: '2020-04-20T06:30:04.000Z',
                channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
                title: 'Coronavirus V: Last Week Tonight with John Oliver (HBO)',
                description:
                    'As COVID-19 continues to dominate the news cycle, John Oliver looks at the various sources of misinformation about the disease - from televangelists and the ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/dRFbwjwQ4VE/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/dRFbwjwQ4VE/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/dRFbwjwQ4VE/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'LastWeekTonight',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/qz1aXYGHJ_ZHlDKz6zt5D3_jH1s"',
            id: {
                kind: 'youtube#video',
                videoId: '5UV-RhBS16k',
            },
            snippet: {
                publishedAt: '2020-04-30T03:09:27.000Z',
                channelId: 'UCMgbYmq6I5zcQUiCN-k_pFA',
                title:
                    'Praying for the World | #LIVE Worship | 30th April 2020 | #Dr John Wesly &amp; Mrs #Blessie Wesly',
                description:
                    'Welcome to John Wesly International Ministries and John Wesly Foundation. God has anointed Man of God, John Wesly to reach out millions around the world ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/5UV-RhBS16k/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/5UV-RhBS16k/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/5UV-RhBS16k/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'John Wesly Ministries',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/DpUy4H0FZKW_PS_iAIn2yN0RFu8"',
            id: {
                kind: 'youtube#video',
                videoId: 'Wu71w5KHd80',
            },
            snippet: {
                publishedAt: '2019-01-02T12:58:47.000Z',
                channelId: 'UCf3cbiNQccgbgzkQccLTKtw',
                title: 'John Cena Workout Motivation Best of John Cena 2018',
                description: 'Best videos of John Cena working out 2018.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/Wu71w5KHd80/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/Wu71w5KHd80/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/Wu71w5KHd80/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Workout Motivation',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/7-6sTGTKq7uzvFibV7hym7rPqNM"',
            id: {
                kind: 'youtube#video',
                videoId: 'DXKHgA1e71E',
            },
            snippet: {
                publishedAt: '2020-02-28T16:00:02.000Z',
                channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                title: 'Daddy Got Sick | Baby John To The Rescue | Little Angel Kids Songs and Nursery Rhymes',
                description:
                    'While building a snowman outside, Daddy gets a cold. Watch as Jill and Baby John attempt to nurse Daddy back to full health. Enjoy this new version of the ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/DXKHgA1e71E/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/DXKHgA1e71E/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/DXKHgA1e71E/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/K_HECi_b_pldIMQtHqLXq8QD-yM"',
            id: {
                kind: 'youtube#video',
                videoId: 'H9bGITkIHmM',
            },
            snippet: {
                publishedAt: '2019-08-15T13:00:14.000Z',
                channelId: 'UC2Qw1dzXDBAZPwS7zm37g8g',
                title: 'Sho Madjozi - John Cena | A COLORS SHOW',
                description:
                    "South African based artist Sho Madjozi shares a vibrant performance of previously unreleased single 'John Cena' Follow ▷ Stream: ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/H9bGITkIHmM/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/H9bGITkIHmM/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/H9bGITkIHmM/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'COLORS',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/uKUc4ZKn-FZPWV1EUf6-VA1sMeU"',
            id: {
                kind: 'youtube#video',
                videoId: 'AM0mxqPpCQM',
            },
            snippet: {
                publishedAt: '2020-04-07T14:00:04.000Z',
                channelId: 'UCFBO5h2l4Py0hXtSzETH7mw',
                title: 'Baby John&#39;s New Best Friend | Pin Pon | Little Angel Kids Songs &amp; Nursery Rhymes',
                description:
                    'While playing indoors, Baby John decides to build himself a new best friend, Pin Pon. As best friends, they begin fun new adventures that include, cutting their ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/AM0mxqPpCQM/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/AM0mxqPpCQM/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/AM0mxqPpCQM/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Little Angel Playtime',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/gUKt1V7Xxsic7zuxi68eOnM_tYE"',
            id: {
                kind: 'youtube#video',
                videoId: '3kyUPp6xpPc',
            },
            snippet: {
                publishedAt: '2012-05-22T02:42:53.000Z',
                channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                title: 'John Cena vs. David Otunga: Raw, May 21, 2012',
                description:
                    'David Otunga looks to do what his boss did a night earlier and beat John Cena. Check out Superstar reactions to this moment - http://youtu.be/L5RIufakGN8.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'WWE',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/E-X5maDQ_BBS58wvrrb5SN-mSH8"',
            id: {
                kind: 'youtube#video',
                videoId: '0RSY3Agv11E',
            },
            snippet: {
                publishedAt: '2017-11-16T20:51:05.000Z',
                channelId: 'UCkIBen3YHH9OiaidJYRoYhA',
                title: 'KREŠO BENGALKA - JOHN 3:16 (OFFICIAL VIDEO)',
                description:
                    'http://www.kresobengalka.com http://www.facebook.com/kresobengalkaofficial/ http://www.instagram.com/kresobengalkaofficial/ Booking contact: ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/0RSY3Agv11E/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/0RSY3Agv11E/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/0RSY3Agv11E/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Krešo Bengalka',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/tgTbv3DBJ6ovQ9lCjIun-aRaxBI"',
            id: {
                kind: 'youtube#video',
                videoId: 'j8bDOqtogMg',
            },
            snippet: {
                publishedAt: '2020-03-30T01:00:05.000Z',
                channelId: 'UCojsj6T5tNPGPZSx7wn4coQ',
                title: 'hey john, roblox games meme',
                description: 'haha owned!! #roblox.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/j8bDOqtogMg/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/j8bDOqtogMg/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/j8bDOqtogMg/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'JOHN ROBLOX',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/N01tVLgMBJRhUDK4-nVVVzdaolU"',
            id: {
                kind: 'youtube#video',
                videoId: 'r1DWcxXcSRc',
            },
            snippet: {
                publishedAt: '2020-04-30T21:00:18.000Z',
                channelId: 'UCtw7q4SyOeoCwM1i_3x8lDg',
                title: 'John Mulaney: New in Town - Full Special',
                description:
                    'John Mulaney critiques the title of “Home Alone 2: Lost in New York,” confesses his fear of eighth graders and describes a wild high school party. (Contains ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/r1DWcxXcSRc/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/r1DWcxXcSRc/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/r1DWcxXcSRc/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Comedy Central Stand-Up',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/FydSPlVKvXgnJDZ9hLn3dNVla50"',
            id: {
                kind: 'youtube#video',
                videoId: '2qERgf6UWIA',
            },
            snippet: {
                publishedAt: '2017-12-01T12:56:00.000Z',
                channelId: 'UCsPF3cApzCohxPp5oKdoWSQ',
                title: 'Are You Sleeping Brother John - 3D Nursery Rhymes &amp; Songs For Children',
                description: 'Are You Sleeping Brother John 3D Animation Nursery Rhymes & Kids Songs For Children.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/2qERgf6UWIA/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/2qERgf6UWIA/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/2qERgf6UWIA/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'CVS 3D Rhymes & Kids Songs',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/kH08mXBZwnOE1SAEWWiL8J6xpwk"',
            id: {
                kind: 'youtube#video',
                videoId: '3VCyQqbH11s',
            },
            snippet: {
                publishedAt: '2020-03-04T14:00:01.000Z',
                channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                title:
                    'No More Snacks Baby John! | Yummy Vegetables &amp; Healthy Habits Song | Little Angel Kids Songs',
                description:
                    "Baby John's tummy hurts after eating too much snacks. Thankfully, mommy is here to prepare him yummy, healthy snacks like fruits and vegetables. Enjoy this ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/3VCyQqbH11s/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/3VCyQqbH11s/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/3VCyQqbH11s/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/O8__pL1MY_79faM19-Wlt5GBfbQ"',
            id: {
                kind: 'youtube#video',
                videoId: 'Lwi6b4zBP08',
            },
            snippet: {
                publishedAt: '2019-07-13T13:00:02.000Z',
                channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                title: 'Where&#39;s Baby John&#39;s Suzie | Nursery Rhyme and Kids Song Little Angel',
                description:
                    "Baby John lost his Suzie! Where is it? Where did it go? Watch the whole family look for Baby John's pacifier and sing-along with this super fun nursery rhyme.",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/Lwi6b4zBP08/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/Lwi6b4zBP08/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/Lwi6b4zBP08/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/1FyRC_Y9Ys8tDvokCQqQYjxOPzw"',
            id: {
                kind: 'youtube#video',
                videoId: 'z3-Tm_aS3N0',
            },
            snippet: {
                publishedAt: '2019-06-18T07:00:05.000Z',
                channelId: 'UCbCmjCuTUZos6Inko4u57UQ',
                title: 'John Jacob Jingleheimer Schmidt | CoComelon Nursery Rhymes &amp; Kids Songs',
                description:
                    'Let\'s play "follow the leader". In this game, everyone follows and also leads. Subscribe for new videos every week: ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Cocomelon - Nursery Rhymes',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/knW0ujRK7txXgokcKC3OhDEUhjk"',
            id: {
                kind: 'youtube#video',
                videoId: 'YtZIHd3LN3w',
            },
            snippet: {
                publishedAt: '2016-10-11T18:00:01.000Z',
                channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                title: 'John teaches Brie how to drive stick shift: Total Bellas Preview Clip, Oct. 12, 2016',
                description:
                    'Brie says John is a patient teacher. More ACTION on WWE NETWORK : http://wwenetwork.com Subscribe to WWE on YouTube: http://bit.ly/1i64OdT Must-See ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/YtZIHd3LN3w/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/YtZIHd3LN3w/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/YtZIHd3LN3w/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'WWE',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/OwRRWsz691EvaPg75m8PAohB1xU"',
            id: {
                kind: 'youtube#video',
                videoId: '42J_clIvoWA',
            },
            snippet: {
                publishedAt: '2020-04-12T13:00:02.000Z',
                channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                title: 'FULL MATCH - John Cena vs Mark Henry – WWE Title Match: WWE Money in the Bank 2013',
                description:
                    "The Cenation Leader defends the WWE Championship against “The World's Strongest Man” Mark Henry: Courtesy of WWE Network. GET YOUR 1st MONTH of ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/42J_clIvoWA/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/42J_clIvoWA/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/42J_clIvoWA/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'WWE',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/rFSVEPaOhDLFY5_i1ZL4QaL0aOc"',
            id: {
                kind: 'youtube#video',
                videoId: 'JxxEuar_HV8',
            },
            snippet: {
                publishedAt: '2020-04-23T14:23:28.000Z',
                channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                title: 'John Cena&#39;s most underrated moments: WWE Playlist',
                description:
                    "From providing an assist to The Rock at WrestleMania to taking on the entire Raw roster with Randy Orton, relive some of John Cena's most underrated ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/JxxEuar_HV8/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/JxxEuar_HV8/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/JxxEuar_HV8/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'WWE',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/UvEMyv-IfLcNIERpQueSNgOszlo"',
            id: {
                kind: 'youtube#video',
                videoId: 'r9D-uvKih_k',
            },
            snippet: {
                publishedAt: '2019-11-14T07:01:02.000Z',
                channelId: 'UCa1yUHQmV6Z0PpAUtfgNd9g',
                title: 'Christmas 2019 Ad | John Lewis &amp; Partners and Waitrose &amp; Partners',
                description:
                    "Together with Waitrose & Partners, we're excited to share the festive tale of a little girl and her excitable friend, Edgar. #ExcitableEdgar Our story this year is all ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/r9D-uvKih_k/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/r9D-uvKih_k/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/r9D-uvKih_k/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'John Lewis & Partners',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/eAbk-cY2lXqLAlwayNE4RxFrQbE"',
            id: {
                kind: 'youtube#video',
                videoId: 'vCs9Y3ZPmcs',
            },
            snippet: {
                publishedAt: '2020-04-30T12:54:59.000Z',
                channelId: 'UCkDSAQ_5-yx5hmuvUcsJL7A',
                title: 'Is Extraction The New John Wick?',
                description:
                    "Chris Hemsworth's new Netflix film Extraction, sees Tyler Rake murder his way across India in order the son of an international crime lord in the vein of John ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/vCs9Y3ZPmcs/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/vCs9Y3ZPmcs/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/vCs9Y3ZPmcs/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Mr Sunday Movies',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/bynNSL26LcuvfzW85u6OO0PLdwo"',
            id: {
                kind: 'youtube#video',
                videoId: 'EZforRcwTko',
            },
            snippet: {
                publishedAt: '2019-12-03T14:00:02.000Z',
                channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                title: 'Baby John Does the Chicken Dance | Little Angel Nursery Rhymes &amp; Kids Songs',
                description:
                    'Baby John puts his little chicken costume and gets ready for the animal costume party at the daycare. He shakes his little chicken tail and learns how to do the ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/EZforRcwTko/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/EZforRcwTko/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/EZforRcwTko/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Oar34kCWOYeFPKlDqN5CXBejNQg"',
            id: {
                kind: 'youtube#video',
                videoId: 'c09m5f7Gnic',
            },
            snippet: {
                publishedAt: '2020-03-02T07:30:02.000Z',
                channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
                title: 'Coronavirus: Last Week Tonight with John Oliver (HBO)',
                description:
                    "As coronavirus spreads to the US, John Oliver discusses what's being done to fight the illness, what's gone wrong, and how to stay safe. Connect with Last Week ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/c09m5f7Gnic/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/c09m5f7Gnic/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/c09m5f7Gnic/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'LastWeekTonight',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/8qa3xk7LHXUNEhwtyn53B2hRwB0"',
            id: {
                kind: 'youtube#video',
                videoId: '_066dEkycr4',
            },
            snippet: {
                publishedAt: '2020-03-16T06:30:02.000Z',
                channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
                title: 'Coronavirus II: Last Week Tonight with John Oliver (HBO)',
                description:
                    "As the spread of coronavirus worsens in the US, John Oliver discusses how the government is handling the outbreak, how they're not, and what we can do to ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/_066dEkycr4/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/_066dEkycr4/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/_066dEkycr4/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'LastWeekTonight',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/thm2rMp8mSRIJvSlZQu9Pec7fh0"',
            id: {
                kind: 'youtube#video',
                videoId: 'tb-g9YTBOGY',
            },
            snippet: {
                publishedAt: '2020-04-26T13:00:33.000Z',
                channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
                title: 'FULL MATCH - John Cena vs. Dolph Ziggler – Ladder Match: WWE TLC 2012',
                description:
                    "The Showoff's World Heavyweight Title Money in the Bank contract is at stake in a high-risk Ladder Match against The Cenation Leader: Courtesy of WWE ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/tb-g9YTBOGY/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/tb-g9YTBOGY/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/tb-g9YTBOGY/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'WWE',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/ami0SDEfWaWeLTKjY7IRByAR-u0"',
            id: {
                kind: 'youtube#video',
                videoId: 'JPQsip61_o0',
            },
            snippet: {
                publishedAt: '2019-11-14T08:25:17.000Z',
                channelId: 'UC7RQon_YwCnp_LbPtEwW65w',
                title:
                    'John Lewis Christmas advert 2019: Edgar the Dragon stars in Christmas ad for John Lewis &amp; Waitrose',
                description:
                    'Subscribe to the Evening Standard on YouTube: https://www.youtube.com/channel/UC7RQon_YwCnp_LbPtEwW65w?sub_confirmation=1 An exuberant young ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/JPQsip61_o0/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/JPQsip61_o0/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/JPQsip61_o0/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Evening Standard',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/ysvp56XOQkk1yxttZcpNQ6if5SQ"',
            id: {
                kind: 'youtube#video',
                videoId: '6s4Bx7mzNkM',
            },
            snippet: {
                publishedAt: '2020-04-13T06:45:02.000Z',
                channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
                title: 'Coronavirus IV: Last Week Tonight with John Oliver (HBO)',
                description:
                    'John Oliver discusses how Coronavirus is impacting the US workforce, from mass unemployment to the problems faced by essential workers. Connect with Last ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/6s4Bx7mzNkM/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/6s4Bx7mzNkM/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/6s4Bx7mzNkM/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'LastWeekTonight',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/bZZo8ryQId962yRJB2JlqRVcjrY"',
            id: {
                kind: 'youtube#video',
                videoId: 'XAVHvipkbIE',
            },
            snippet: {
                publishedAt: '2020-04-28T21:08:47.000Z',
                channelId: 'UCg7lal8IC-xPyKfgH4rdUcA',
                title:
                    'John Salley: Magic, Not Jordan, was the Reason Isiah Thomas Didn&#39;t Make the Dream Team (Flashback)',
                description:
                    "In this flashback, John Salley denied that Michael Jordan was the reason Isiah Thomas wasn't on the Dream Team, adding that Magic Johnson was behind the ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/XAVHvipkbIE/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/XAVHvipkbIE/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/XAVHvipkbIE/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'djvlad',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/4mHNKT9SY0Vpsw74jHgquSGyEog"',
            id: {
                kind: 'youtube#video',
                videoId: 'J9QX5r4Z1H8',
            },
            snippet: {
                publishedAt: '2020-01-22T15:00:02.000Z',
                channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
                title: 'It&#39;s Time to Sleep, Baby John! | Bedtime Routine Song | Little Angel Nursery Rhymes',
                description:
                    "Baby John doesn't want to follow his bedtime routine. The family comes together to get Baby John ready for bed! Enjoy this new version of The Bath and Bedtime ...",
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/J9QX5r4Z1H8/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/J9QX5r4Z1H8/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/J9QX5r4Z1H8/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/32E9cCGzDXYwZCRwbrkBJZTOW1k"',
            id: {
                kind: 'youtube#video',
                videoId: 'y-7dcUL0yzg',
            },
            snippet: {
                publishedAt: '2016-10-24T02:30:00.000Z',
                channelId: 'UCN8S4CqMRy6tVKVXvs7Bzeg',
                title: 'Big John - Motu Patlu in Hindi WITH ENGLISH, SPANISH &amp; FRENCH SUBTITLES',
                description:
                    'John the don is constantly teased about his tiny stature and short height. People mistake him for a child and treat him that way. He is so furious that he sets out to ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/y-7dcUL0yzg/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/y-7dcUL0yzg/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/y-7dcUL0yzg/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Wow Kidz',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/jVnKTem1b23JKsEkQxAaC9Nb0Gs"',
            id: {
                kind: 'youtube#video',
                videoId: 'ZHwVBirqD2s',
            },
            snippet: {
                publishedAt: '2010-09-01T16:07:55.000Z',
                channelId: 'UCI8Ry7NdFNLel-S8dWU7mDA',
                title: 'Elton John - I&#39;m Still Standing',
                description:
                    'Now in 4K! The video for "I\'m Still Standing" was directed by Russell Mulcahy and filmed in Cannes and Nice, France. It is the second single from Elton\'s 1983 ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/ZHwVBirqD2s/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/ZHwVBirqD2s/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/ZHwVBirqD2s/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'EltonJohnVEVO',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/vY8fGSp9numn5m4jo_LouC_OH4k"',
            id: {
                kind: 'youtube#video',
                videoId: 'r_4Pkqad0k8',
            },
            snippet: {
                publishedAt: '2020-04-30T18:50:09.000Z',
                channelId: 'UCqCMJT0E9e1im2UpycGUYAw',
                title: 'John Lloyd namigay ng Vitamins sa kanilang barangay sa Cebu City',
                description:
                    'BeaAlonzo #JohnLloyd #OneMoreChance #EllenAdarna #Elias #JohnLloydCruz Thank you for watching. Please Subscribe to know the latest Philippine ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/r_4Pkqad0k8/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/r_4Pkqad0k8/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/r_4Pkqad0k8/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Showbiz Bulletin',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/6bzyyVORlYkpwEWZjx1ci3XbDHI"',
            id: {
                kind: 'youtube#video',
                videoId: '6qSgNoGRs-0',
            },
            snippet: {
                publishedAt: '2019-03-23T15:02:10.000Z',
                channelId: 'UCB0XRO0Q14cHKIGIyXcYJ_A',
                title: 'Are you sleeping Baby John Nursery Rhyme Song - Kids Video',
                description:
                    'Are you sleeping Brother John Nursery Rhyme Songs for Kids Pretend Play with Tim and Sonya. Song Are you sleeping brother John Nursery Rhyme. Hello ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/6qSgNoGRs-0/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/6qSgNoGRs-0/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/6qSgNoGRs-0/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'La La Kids',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/P7tZLPWpYsCI03s8oX1--Wf4-W4"',
            id: {
                kind: 'youtube#video',
                videoId: '0TN5QIGjzfA',
            },
            snippet: {
                publishedAt: '2020-04-28T18:30:00.000Z',
                channelId: 'UCMgbYmq6I5zcQUiCN-k_pFA',
                title: 'యేసుతో స్నేహం (29 ఏప్రిల్ 2020) | నీ స్వభావమును మార్చు దేవుడు | Dr John Wesly',
                description:
                    'Welcome to John Wesly International Ministries and John Wesly Foundation. God has anointed Man of God, John Wesly to reach out millions around the world ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/0TN5QIGjzfA/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/0TN5QIGjzfA/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/0TN5QIGjzfA/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'John Wesly Ministries',
                liveBroadcastContent: 'none',
            },
        },
        {
            kind: 'youtube#searchResult',
            etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/nrqJxLE6jKsXpiD-RLzYGLIAfeE"',
            id: {
                kind: 'youtube#video',
                videoId: 'a-YI_EXTi-w',
            },
            snippet: {
                publishedAt: '2013-02-28T17:46:15.000Z',
                channelId: 'UCHdE-Y4uF0YnSRlqdltRpXw',
                title: 'Taylor Swift Dear John Lyrics',
                description: '',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/a-YI_EXTi-w/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/a-YI_EXTi-w/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/a-YI_EXTi-w/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Dana Hlaine Htet',
                liveBroadcastContent: 'none',
            },
        },
    ],
};
