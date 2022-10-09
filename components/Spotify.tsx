import { useLanyard } from 'use-lanyard';
import { SiSpotify } from 'react-icons/si';
import { clearSongName, DISCORD_ID } from '../util/utils';

export function Spotify({menu}: {menu: boolean}) {
	const {data: user} = useLanyard(DISCORD_ID);

	const style = `${ menu ? 'hidden' : ''} truncate text-left ext-xl text-white font-bold tracking-wide items-center space-x-3 no-underline text-1x1 select-none sm:select-text text-2xl inline-flex `
	if (!user || !user.spotify) {
		return <p className={style}>
			<span> <SiSpotify/> </span>
			<span id="hoverAnimation" className="truncate">I'm not listening anything</span>
		</p>;
	}

	return <a target="_blank" rel="noreferrer" className={style} href={`https://open.spotify.com/track/${user.spotify.track_id}`}>
		<span> <SiSpotify /> </span>
		<span className="break-all truncate " id="hoverAnimation">
			{clearSongName(user.spotify.song)}
		</span>
	</a>;
}
