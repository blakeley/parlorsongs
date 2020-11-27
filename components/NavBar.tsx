import Link from "next/link";
import { FunctionComponent } from "react";

const NavLink: FunctionComponent<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a className="h-full px-4 flex justify-center items-center font-bold font-display hover:text-green-900 hover:bg-gray-50 tracking-wide">
      {children}
    </a>
  </Link>
);

export const NavBar: FunctionComponent = () => (
  <nav className="bg-white shadow-sm z-30 h-12 relative flex align-middle text-center">
    <div className="mx-auto flex flex-row">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/issues">Issues</NavLink>
      <NavLink href="/music-catalog">Music Catalog</NavLink>
      <NavLink href="/biographies">Composer Biographies</NavLink>
      <NavLink href="/about-us">About us</NavLink>
      <NavLink href="/faq">FAQ</NavLink>
    </div>
  </nav>
);
