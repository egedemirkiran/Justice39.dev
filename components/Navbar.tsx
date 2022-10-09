import Link from 'next/link';
import { useState } from 'react';
import { Spotify } from './Spotify'
import { Pages } from '../util/typings';

export const Navbar = ({pages}: {pages: Pages[]}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return <nav className={`flex items-center pl-5 pt-5 ${ active ? 'flex-wrap' : ''}  `}>
    <Spotify menu={active}/>
    <button className='inline-flex p-3 lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
     <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
      </svg>
    </button>

    <div className={`${ active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto `}>
      <div className='flex-wrap gap-5 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto text-2xl px-5'>
        {pages.map((page, index) =>
            <Link key={page.name} href={page.href}>
                <a className='text-center elg:inline-flx lg:w-auto w-full px-3 py-2 rounded-full text-white items-center dark:sm:hover:bg-white/10 justify-center sm:bg-white/0 sm:hover:bg-gray-900/5 hover:text-white focus:outline-none focus:ring-0'>
                    <p id="hoverAnimation">{page.name}</p>
                </a>
            </Link>)
        }
      </div>
    </div>
  </nav>;

}
