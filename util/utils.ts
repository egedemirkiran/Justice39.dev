import {LastFMData, LastFMResponse} from "./typings";
import useSWR from "swr";
export const songCleanerRegex = /\(\w.+\)/gm;
export const DISCORD_ID = process.env.DISCORD_ID;
export const avatar = "https://api.lanyard.rest/"+DISCORD_ID+".png";
const detectableAPI = "https://discord.com/api/v9/applications/detectable";
const fetcher = url => fetch(url).then(res => res.json());

export function clearSongName(songName: any): String {
    const match = songName.match(songCleanerRegex);
    if(match == null) return songName
    return songName.replace(match[0], "")
}

export function getAge(): Number {
    const currentYear = new Date().getFullYear();
    return currentYear - parseInt(process.env.BORN_DATE); // you can change it with your born date
}

export const getFlags = (flag: number, avatar: string): string[] => {
    const flags: string[] = [];

    if (flag & 1) flags.push("Discord_Employee")
    if (flag & 2) flags.push("Partnered_Server_Owner")
    if (flag & 4) flags.push("HypeSquad_Events")
    if (flag & 8) flags.push("Bug_Hunter_Level_1")
    if (flag & 64) flags.push("House_Bravery")
    if (flag & 128) flags.push("House_Brilliance")
    if (flag & 256) flags.push("House_Balance")
    if (flag & 512) flags.push("Early_Supporter")
    if (flag & 16384) flags.push("Bug_Hunter_Level_2")
    if (flag & 131072) flags.push("Early_Verified_Bot_Developer")
    if (flag & 4194304) flags.push("Active_Developer");
    if (avatar && avatar.includes("a_")) flags.push("Nitro");

    return flags;
}

export function LastFM(): LastFMData {
    const {data} = useSWR<LastFMResponse>("/api/lastfm", fetcher, {refreshInterval: 10000});
    if (!data) return {status: "connecting", song: null};
    if (data.error) return {status: "error", song: null};
    const last = data.recenttracks.track?.[0];
    const image = last?.image.find(img => img.size === "extralarge") ?? last.image[0];
    if (!last || !last["@attr"]?.nowplaying) return {status: "idle", song: null};

    return {
        status: "playing",
        song: {
            name: last.name,
            artist: last.artist,
            album: last.album,
            image,
            url: last.url,
        }
    }
}

export default {
    getAge: getAge(),
    DISCORD_ID,
    avatar,
    LastFM
}
