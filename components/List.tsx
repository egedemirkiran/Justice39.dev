import {ReactNode} from 'react';
import type {IconType} from 'react-icons';

export function List({text, icon}: {text: ReactNode; icon: IconType}) {
	return <li className="flex space-x-4">
		<span>{icon({className: 'h-5 w-5 text-1clex1'})}</span>
		<span id="hoverAnimation">{text}</span>
	</li>;
}
