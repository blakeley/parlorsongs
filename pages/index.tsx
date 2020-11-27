import Head from "next/head";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Parlor Songs Academy</title>
      </Head>

      <NavBar />

      <main>
        <div className="text-center bg-gray-100 px-12 py-16 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-6xl tracking-tight leading-10 font-extrabold text-gray-900">
              The <span className="text-green-700">Parlor Songs</span> academy
            </h1>
            <h2 className="text-4xl mt-4  mx-auto text-gray-800">
              Preserving America's Popular Music Heritage
            </h2>
          </div>
        </div>

        <p className="my-8 max-w-screen-md mx-auto text-center text-gray-700">
          The Parlor Songs Academy has been founded as a part of the Open
          Educational Resources (OER) Movement. According to the American
          Council on Education, “Higher education institutions worldwide are
          joining an emerging movement to provide universal and free access to
          digital educational content through OER”. You can learn at your own
          pace by browsing through our over 130 articles about America's music
          and read about the songs and narratives about the various aspects of
          our music.
        </p>
      </main>
    </div>
  );
}
