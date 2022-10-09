
import type { NextPage } from 'next'
import { List } from '../components/List';
import utils from '../util/utils';
import { DiMongodb, DiRedis } from 'react-icons/di';
import { FaNodeJs, FaRust } from 'react-icons/fa';
import { SiJetbrains, SiTypescript, SiNextdotjs as SiNextDotJs, SiJavascript, SiExpress } from 'react-icons/si';
import Typical from 'react-typical'

const favLangs = [
  "TypeScript.",7000,
  "Rust.",7000,
]

const Home: NextPage = () =>
    <main className="text-left content-center text-3xl mx-auto space-y-12 max-w-3xl p-5 ">
        <div className="text-left font-Lato" id="about">
            <h1 className="text-left text-3xl sm:text-3xl md:text-6xl underline">
                About me
            </h1>
            <p className="text-left text-2x1 font-extralight p-4">My name is Ege. I am {utils.getAge} years old. I'm
                interested in TypeScript & Rust.</p>
        </div>
        <div className="text-left font-Lato" id="I Use">
            <h1 className="text-left text-3xl sm:text-4xl md:text-6xl underline">
                I Use
            </h1>
            <p className="text-left text-2x1 font-extralight p-4">I ❤️ working with <Typical steps={favLangs}
                                                                                             loop={Infinity}
                                                                                             wrapper="span"/></p>
            <ul className="py-12 grid grid-cols-1 text-1x1 gap-5 sm:grid-cols-3 font-extralight">
                <List icon={FaRust} text="Rust"/>
                <List icon={SiJavascript} text="JavaScript"/>
                <List icon={SiTypescript} text="TypeScript"/>
                <List icon={FaNodeJs} text="Node.js"/>
                <List icon={SiNextDotJs} text="Next.js"/>
                <List icon={SiExpress} text="Express"/>
                <List icon={SiJetbrains} text="JetBrains"/>
                <List icon={DiMongodb} text="MongoDB"/>
                <List icon={DiRedis} text="Redis"/>
            </ul>
        </div>
    </main>

export default Home
