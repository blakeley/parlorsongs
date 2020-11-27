import fs from "fs";
import Markdown from "markdown-to-jsx";
import { GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import { FunctionComponent } from "react";
import { NavBar } from "../components/NavBar";

interface File {
  name: string;
  contents: string;
}

export const getStaticProps: GetStaticProps<{ files: File[] }> = async (
  context
) => {
  const postsDirectory = path.join(process.cwd(), "biographies");
  const filenames = fs.readdirSync(postsDirectory);

  const files = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const contents = fs.readFileSync(filePath, "utf8");
      const name = path.parse(filename).name; // hello

      return {
        name,
        contents,
      };
    })
    .sort((file1, file2) =>
      file1.name
        .split(" ")
        .reverse()[0]
        .localeCompare(file2.name.split(" ").reverse()[0])
    );

  return {
    props: { files },
  };
};

const Page: FunctionComponent<{ files: File[] }> = ({ files }) => (
  <div className="flex flex-col fixed inset-0">
    <Head>
      <title>The Parlor Songs Academy - Issues</title>
    </Head>

    <NavBar />

    <main className="flex-1 flex flex-row mx-auto max-h-full">
      <nav className="mx-4 font-display">
        <ol className="py-8 overflow-y-scroll max-h-full">
          {files.map((file) => (
            <>
              <li key={file.name}>
                <a
                  href={`#${file.name}`}
                  className="hover:text-green-800 hover:bg-gray-50 px-8 py-1 transition-all w-full h-full block"
                >
                  {file.name}
                </a>
              </li>
            </>
          ))}
        </ol>
      </nav>

      <article className="biographies flex-1 overflow-y-scroll">
        <h1 style={{ textAlign: "left" }}>Composer Biographies</h1>
        <ol className="mb-32">
          {files.map((file) => (
            <li>
              <a {...{ name: file.name }}></a>
              <h3>{file.name}</h3>
              <section>
                <Markdown children={file.contents} />
              </section>
            </li>
          ))}
        </ol>
      </article>
    </main>
  </div>
);

export default Page;
