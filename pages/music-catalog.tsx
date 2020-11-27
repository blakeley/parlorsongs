import { FunctionComponent } from "react";
import { NavBar } from "../components/NavBar";
import { musicCatalogRows } from "../musicCatalogRows";

const Th: FunctionComponent = ({ children }) => (
  <th className="font-display px-6 py-2 bg-gray-100 font-medium text-gray-900 tracking-wider">
    {children}
  </th>
);

const Td: FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => <td className={`${className} overflow-hidden px-2`}>{children}</td>;

const Page: FunctionComponent = () => (
  <div>
    <NavBar />

    <h1 className="text-3xl text-green-900 font-display  tracking-tight text-center mt-8">
      Music Catalog
    </h1>

    <div className="max-w-screen-lg mx-auto my-8 text-center shadow overflow-hidden border-b border-gray-200 rounded">
      <table className="divide-y divide-gray-200 music-catalog">
        <thead className="mb-4">
          <tr className="font-display">
            <Th>Song Title</Th>
            <Th>Year</Th>
            <Th>Composer</Th>
            <Th>Lyricist</Th>
            <Th>Article</Th>
          </tr>
        </thead>
        <tbody className="max-w-full">
          {musicCatalogRows.map((row, index) => (
            <tr key={index} className="even:bg-gray-50">
              <Td>{row[0]}</Td>
              <Td>{row[1]}</Td>
              <Td>{row[2]}</Td>
              <Td>{row[3]}</Td>
              <Td>{row[4]}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Page;
