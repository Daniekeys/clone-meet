import Head from 'next/head'
import Image from 'next/image'
import ComingSoon from '../components/ComingSoon';
import DesktopView from '../components/DesktopView';
import MobileView from '../components/MobileView';


export default function Home() {
  return (
    <>
      <Head>
        <title>Make we Bet</title>
        <meta
          name="description"
          content="Make we Bet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
  <div className='w-full '>
        <ComingSoon />
  </div>
    </>
  );
}
