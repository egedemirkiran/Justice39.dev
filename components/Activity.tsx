import React from 'react';
import { Counter, tsString } from './Counter';
import Tippy from '@tippyjs/react';

function getDiscordActivities(user): Activities[]|void {
    const activities = user?.activities || [];
    const arrOfActivities = [];
    activities.forEach(activity => {
        if (activity.assets) {
            if(activity.name === "Spotify") {
                const spotify = user.spotify;
                let data = { imageURL: spotify.album_art_url, timestamps: spotify.timestamps, name: spotify.song, id: activity.id }
                if(activity.state) {
                    const state = { state: "by "+activity.state, spotify: spotify.song+" by "+activity.state }
                    data = {...data, ...state}
                }
                return arrOfActivities.push(data)
            }

            const imageURL = getactivityImages(activity);
            let data = { imageURL, timestamps: activity.timestamps, name: activity.name, id: activity.id }
            if(activity.state) {
                const state = { state: activity.state };
                data = {...data, ...state};
            }
            arrOfActivities.push(data);
        }
    })

    // put spotify at the top
    const spotify = arrOfActivities.find(activity => activity.id === "spotify:1");
    if(spotify) {
        arrOfActivities.splice(arrOfActivities.indexOf(spotify), 1);
        arrOfActivities.unshift(spotify);
    }
    return arrOfActivities;
}

interface Activities {
    imageURL: string;
    name: string;
    id: string;
    state?: string;
    spotify: string;
    timestamps: {
        start: number;
        end?: number;
    };
}

export function getactivityImages(activity) {
    return activity.assets.large_image.startsWith("mp:external")
        ? activity.assets.large_image.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/')
        : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp`
}

export function Activity({user}: any) {
    const array: Activities[] = getDiscordActivities(user) || [];
    if(array.length == 0) return <p>I'm not playing anything</p>;

    return <ul className="space-y-5">
        {array.map(item =>
            <li key={item.id} className={ item.id === "spotify:1" && array.length > 1 && "pb-3 border-b-2 border-gray-600" }>

                { item.id === "spotify:1" && <span className="text-xl font-extrabold text-gray-300"> Listening to Spotify </span> }

                <div className="flex items-start gap-5 text-white ">
                    <Tippy content={item.spotify ?? item.state} delay={[200, 350]} interactive={true}
                           animation="scale-extreme" className={item.state ? "visible" : "invisible"}><img
                           src={item.imageURL} className="rounded-xl sm:sticky right-full" alt={item.imageURL}
                           id="activityImage"/>
                    </Tippy>
                    <h1 className="text-2xl ">{item.name}
                        <br/>
                        { item.state && <h1> {item.state} </h1> }
                        { item.timestamps && <Counter start={item.timestamps.start} end={item.timestamps.end}/> }
                    </h1>
                </div>
            </li>
        )}
    </ul>;
}

