import Head from "next/head";
import Image from "next/image";
import DesktopView from "../components/DesktopView";
import MobileView from "../components/MobileView";

export default function Home() {
  return (
    <div className=" w-full">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Welcome to Versus pay scan pay and go"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="w-full ">
        <DesktopView />
        <MobileView />
      </div>
    </div>
  );
}
