import type { NextPage } from 'next';
import utils, {DISCORD_ID, getFlags} from '../util/utils';
import { ListBadges } from '../components/ListBadges';
import typings from '../util/typings'
import { useLanyard } from 'use-lanyard';
import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaLastfm, FaSpotify, FaSteam, FaTwitch, FaXbox } from 'react-icons/fa'
import {Activity} from "../components/Activity";

function TabItem({props}: typings.PropsType) {
    return <div {...props} />
}

const Tabs = ({ defaultIndex = 0, onTabClick, children }: {children: any, onTabClick?: any, defaultIndex: number}) => {
    const [bindIndex, setBindIndex] = React.useState(1);
    const changeTab = (newIndex: React.SetStateAction<number>) => {
      if (typeof onTabClick === 'function') onTabClick(newIndex);
      setBindIndex(newIndex);
    };
    
    return <div className="wrapper ">
      <div className="flex tab-menu right-full" >
        {children.map(({ props: { index, label } }: {props: typings.PropsType} ) => <button
            key={`tab-btn-${index}`}
            onClick={() => changeTab(index)}
            className={bindIndex === index ? 'focus' : ''}
          >
            {label}
          </button>)}
      </div>
      <div className="tab-view py-5">
        {children.map(({ props }: {props: typings.PropsType}) => <div
            {...props}
            className={`tab-content ${
              bindIndex === props.index ? 'selected' : ''
            }`}
            key={`tab-content-${props.index}`}
          />)}
      </div>
    </div>;
};



const Home: NextPage = () => {
  const { data: user } = useLanyard(DISCORD_ID);
  const avatar = user?.discord_user.avatar || null;
  const status = user?.discord_status || "offline";
  const discordStatusCss = `w-24 h-24  rounded-full ${statusNameToColor(status)} ring-4 sticky right-full`;
  const username = user?.discord_user.username || null;
  const discordTag = user?.discord_user.discriminator;

  return <main className="text-left text-4xl py-16 mx-auto max-w-1xl sm:max-w-3xl h-max">
      <div className="bg-slate-800 rounded-xl p-8">
          <div id="container">
          <div className={discordStatusCss}>
              <img className={discordStatusCss} src={avatar === null ? utils.avatar : avatarURL(DISCORD_ID, avatar)} alt="" id="discordAvatar" height="120px" width="120px" />
          </div>
              <ul className="sm:sticky right-full sm:mx-36 py-12 text-1x1 gap-2 sm:grid-cols-3 flex items-center  ">
                  {getFlags(user?.discord_user.public_flags || 0, avatar).map(key => <ListBadges key={key} icon={key} className=""/>)}
              </ul>
          </div>
          <div className="pt-6 space-y-4">
              <p className={`text-2x text-white font-extrabold`}>
                   <h1>{username || "Loading"}<span className="text-[#b9bbaf] ">#{discordTag||"0000"}</span></h1>
              </p>
          </div>
          <div className="py-3 ">
              <Tabs defaultIndex={1} >
                  <TabItem label="Accounts" index={1} id="Accounts">
                      <div className="col-12">
                              <div className="grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-2 ">
                                  {socialAccounts.map(item => <CreateAccountButton key={item.siteName} data={item} Icon={item.Icon}/>)}
                              </div>
                          </div>
                  </TabItem>
                  <TabItem label="Activity" index={2} id="Activity">
                      <div>
                          <Activity user={user}/>
                      </div>
                  </TabItem>
              </Tabs>
          </div>

      </div>
  </main>;

}

function avatarURL(ID,code): string {
    return `https://cdn.discordapp.com/avatars/${ID}/${code}.${code.startsWith("a_") ? "gif" : "png"}`;
}

function CreateAccountButton({data, Icon}: typings.SocialAccount) {
    const c =`fw-bold text-white card max-w-xs ${data.color}`
    return <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
    <div className={c} >
        <div className="m-2 d-flex flex flex-nowrap justify-between ">
        {/* Icon will come here */}
        <Icon size="24" className="self-center"/>
        <p className="place-self-start d-flex flex-grow-1  text-2xl"> {data.username}</p>
        <a className="self-center" target="_blank" rel="noreferrer" href={data.url}>
            <FaExternalLinkAlt size="24" className="self-center hover:scale-125  transition duration-300 ease-in-out" />
        </a>
        </div>
    </div>
</div>
}

// If you want to change icon, all icons from react-icon: https://react-icons.github.io/react-icons/
const socialAccounts = [
    {siteName:"Twitch", color: "bg-[#583991]", username: "Justicee39", url: "https://www.twitch.tv/justicee39", Icon: FaTwitch },
    {siteName:"Github", color: "bg-[#202429]", username: "Justice39", url: "https://github.com/Justice39", Icon: FaGithub },
    {siteName:"Xbox", color: "bg-[#258312]", username: "Justice1352", url: "https://account.xbox.com/tr-tr/profile?gamertag=Justice1352", Icon: FaXbox },
    {siteName:"Steam", color: "bg-[#075a8e]", username: "Justice", url: "https://steamcommunity.com/id/Justice39/", Icon: FaSteam },
    {siteName:"Spotify", color: "bg-[#19a34a]", username: "Ege", url: "https://open.spotify.com/user/3omx2kbvwzhmvizbhbpl5r4e0", Icon: FaSpotify },
    {siteName: "LastFM", color: "bg-[#ec2400]", username: "Justice39", url: "https://www.last.fm/user/Justice39", Icon: FaLastfm },
]

function statusNameToColor(status: String): String {
    switch(status) {
        case "online":
            return "ring-[#3ea25e]"
        case "idle":
            return "ring-[#f4a620]"
        case "dnd":
            return "ring-[#e94649]"
        case "offline":
            return "ring-[#757f8c]"
        default:
            return "ring-[#757f8c]"
    }
}

export default Home
