import { FunctionComponent } from "react";

const NavLink: FunctionComponent<{ href: string }> = ({ href, children }) => (
  <a
    href={href}
    className="h-full px-4 flex justify-center items-center font-bold font-display hover:text-green-900 hover:bg-gray-50 tracking-wide"
  >
    {children}
  </a>
);

export const NavBar: FunctionComponent = () => (
  <nav className="bg-white shadow-sm text-center z-30 h-12 relative flex align-middle text-center mx-auto">
    <div className="mx-auto flex flex-row">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/issues">Issues</NavLink>
      <NavLink href="/music-catalog">Music Catalog</NavLink>
      <NavLink href="/composer-biographies">Composer Biographies</NavLink>
      <NavLink href="/about-us">About us</NavLink>
      <NavLink href="/faq">FAQ</NavLink>
    </div>
  </nav>
);
