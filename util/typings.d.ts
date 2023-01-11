import type { IconType } from 'react-icons'

interface SocialAccount {
    data: {
        siteName: string;
        color: string;
        username: string;
        url: string;
    }
    Icon: IconType
}

interface PropsType {
    index: number;
    label: string;
    children: any;
    props?: any;
    id?: string;
}

interface Pages {
    name: string;
    href: string;
}

interface LastFMData {
    status: string;
    song: {
        name: string,
        artist: object,
        album: object,
        image: object,
        url: string,
    } | null;
}

interface LastFMResponse {
    recenttracks: {
        track: LastFMTracks[]
        "@attr": {
            user: string;
            totalPages: string;
            page: string;
            perPage: string;
            total: string;
        }
    }
    error?: number;
}

interface LastFMTracks {
    artist: {
        mbid: string;
        "#text": string
    }
    streamable: string;
    image: TrackImages[];
    mbid: string;
    album: {
        mbid: string;
        "#text": string
    }
    name: string
    "@attr"?: {
        nowplaying: string
    }
    url: string;
    date?: {
        uts: string;
        "#text": string;
    }
}

interface TrackImages {
    size: "small" | "medium" | "large" | "extralarge";
    "#text": string;
}
