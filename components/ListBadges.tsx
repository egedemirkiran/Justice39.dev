import { Badges } from '../util/Badges'

export function ListBadges({icon, className}: {icon: string, className?: string}) {
	return <li className="flex space-x-6">
		<span><img className={className} src={"data:image/png;base64,"+Badges[icon]} alt="" id="badge" width="24" height="24"/></span>
	</li>;
}
