import '../styles/globals.css'
import '../styles/nprogress.css'
import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import Router, {useRouter} from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-extreme.css';

const pages = [{ name: "Home", href: "/" }, { name: "Social", href: "/social" }];

function MyApp({ Component, pageProps }: any) {
    const {asPath} = useRouter();
    useEffect(() => {
      //@ts-ignore
      Router.onRouteChangeStart = () => NProgress.start();Router.onRouteChangeComplete = () => NProgress.done();Router.onRouteChangeError = () => NProgress.done();
    }, []);
    const isSnowActive = !!process.env.SNOW;
    return <html className="text-slate-200 font-Lato">
      <div>
        <Navbar pages={pages}/>
      </div>

      <Head>
        <meta charSet ="utf-8" />
        <link rel="icon" type="image/png" href="/avatar.png" />
        <title>{asPath== "/" && "/home" || asPath }</title>
        <meta name="theme-color" content="#2f3136" />
        <link rel="apple-touch-icon" href="/avatar.png" />
        {isSnowActive === true && <script type="text/javascript" src="snowstorm.js" /> }
      </Head>

      <Component {...pageProps}/>
    </html>
}

export default MyApp;
