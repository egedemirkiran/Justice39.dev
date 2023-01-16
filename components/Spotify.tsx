import { SiSpotify } from 'react-icons/si';
import { MdErrorOutline } from 'react-icons/md';
import { Puff } from 'react-loading-icons';
import { clearSongName, LastFM } from '../util/utils';

export function Spotify({menu}: {menu: boolean}) {
	const lastfm = LastFM();
	const style = `${ menu ? 'hidden' : ''} truncate text-left ext-xl text-white font-bold tracking-wide items-center space-x-3 no-underline text-1x1 select-none sm:select-text text-2xl inline-flex `

	switch (lastfm.status) {
		case "connecting":
			return <p className={style}> <span> <Puff stroke="#06bcee" /> </span> <span id="hoverAnimation" className="truncate">Connecting to Last.fm</span> </p>;
		case "idle":
			return <p className={style}> <span> <SiSpotify /> </span> <span id="hoverAnimation" className="truncate">I'm not listening anything</span> </p>;
		case "playing":
			return <a target="_blank" rel="noreferrer" className={style} href={lastfm.song.url}> <span> <SiSpotify /> </span> <span className="break-all truncate" id="hoverAnimation"> {clearSongName(lastfm.song.name)} </span> </a>;
		case "error": 
			return <p className={style}> <span> <MdErrorOutline /> </span> <span id="hoverAnimation" className="truncate">Could not connect to Last.FM</span> </p>;
		default:
			return <p className={style}> <span> <Puff stroke="#06bcee" /> </span> <span id="hoverAnimation" className="truncate">Connecting to Last.fm</span> </p>;
	}
}
