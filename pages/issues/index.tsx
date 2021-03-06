import Head from "next/head";
import Link from "next/link";
import { FunctionComponent } from "react";
import { NavBar } from "../../components/NavBar";

interface Issue {
  slug: string;
  publishedOn: Date;
  h2: string;
  h3: string;
  imgSrc: string;
}

const issues: Issue[] = [
  {
    slug: "swan-song",
    publishedOn: new Date("nov 2019"),
    h2: "Schwanengesang (Swan Song)",
    h3: "The Final Parlorsongs Article",
    imgSrc: "swansongs-forindex.jpg",
  },
  {
    slug: "rivers-of-melody",
    publishedOn: new Date("sept 2018"),
    h2: "Rivers of Melody",
    h3: "How Rivers Made America and Americans Made Music",
    imgSrc: "riverboat-forindex.jpg",
  },
];

const IssuesListItem: FunctionComponent<Issue> = (props) => (
  <li className="border-solid border-b border-gray-300 hover:bg-gray-50">
    <Link href={`issues/${props.slug}`}>
      <a className="p-4 space-y-2 grid grid-cols-4 space-y-0 items-baseline">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base leading-6 font-medium text-gray-500">
            <time className="font-display">
              {props.publishedOn.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </time>
          </dd>
        </dl>
        <div className="col-span-3 flex flex-row">
          <div className="flex-1">
            <h3 className="font-display text-2xl text-green-800 tracking-tight mb-2">
              {props.h2}
            </h3>

            <h2 className="font-display text-xl text-gray-700 leading-4 tracking-tight">
              {props.h3}
            </h2>
          </div>

          <div className="bg-red-500 relative overflow-hidden rounded-lg shadow-lg w-16 h-16">
            <img className="w-full h-full object-cover" src={props.imgSrc} />
          </div>
        </div>
      </a>
    </Link>
  </li>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Parlor Songs Academy - Issues</title>
      </Head>

      <NavBar />

      <main className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-display text-center my-8">
          Monthly issues
        </h1>

        <ol className="border-t border-solid border-gray-300">
          {issues.map(IssuesListItem)}
        </ol>
      </main>
    </div>
  );
}
