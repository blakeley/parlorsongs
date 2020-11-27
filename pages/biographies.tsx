import Head from "next/head";
import { FunctionComponent } from "react";
import { NavBar } from "../components/NavBar";

interface Biography {
  name: string;
  element: JSX.Element;
}

const biographies: Biography[] = [
  {
    name: "Maurice Abrahams",
    element: (
      <>
        <p>
          Maurice Abrahams was born in Russia in 1883 and died in NYC in 1931.
          He was a popular composer and lyricist, writing a number of popular
          songs including some we have featured in past issues such as{" "}
          <em>The Pullman Porters On Parade</em> in our{" "}
          <a href="http://www.parlorsongs.com/parlorsongs.com/archive/issues/0200/0200.html">
            February, 2000 issue
          </a>{" "}
          about the artist E.H. Pfeiffer. Some of his other hits include, Hitchy
          Koo, 1912, Oh, You Million Dollar Doll, 1913 and Cowboy Joe. He
          started his own publishing company in 1923 and was married to the
          popular singer Belle Baker.
        </p>
      </>
    ),
  },
  {
    name: "Frank R. Adams",
    element: (
      <>
        <p>
          <img src="/frankadams.jpg" />
          Frank R. Adams (1883 - 1963) Attended the University of Chicago at the
          same time as Will Hough. For a time he was a reporter for thye Chicago
          Tribune and then for the Daily News and Examiner. His most famous
          collaboration was with Will Hough and Joe Howard on{" "}
          <i>I Wonder Who's Kissing Her Now</i> in 1909.
        </p>
      </>
    ),
  },
];

const BiographyListItem: FunctionComponent<Biography> = (biography) => (
  <li>
    <h3>{biography.name}</h3>
    <section {...{ name: biography.name }}>{biography.element}</section>
  </li>
);

const Biographies: FunctionComponent = () => (
  <div className="flex flex-col fixed inset-0">
    <Head>
      <title>The Parlor Songs Academy - Issues</title>
    </Head>

    <NavBar />

    <main className="flex-1 flex flex-row mx-auto">
      <nav className="mx-4 font-display py-8">
        <ol>
          {biographies.map((biography) => (
            <li key={biography.name}>
              <a
                href={`#${biography.name}`}
                className="hover:text-green-800 hover:bg-gray-50 px-8 py-1 transition-all w-full h-full block"
              >
                {biography.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="biographies flex-1" style={{ margin: 0 }}>
        <h1 style={{ textAlign: "left" }}>Composer Biographies</h1>
        <ol>{biographies.map(BiographyListItem)}</ol>
      </article>
    </main>
  </div>
);

export default Biographies;
