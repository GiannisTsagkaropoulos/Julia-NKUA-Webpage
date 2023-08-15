import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-20 flex items-center justify-between bg-julia-blue-dark px-10">
      <Logo />
      <nav className="hidden md:block">
        <ul className="list-none m-0 p-0 flex items-baseline">
          <li className="ml-12">
            <Link href="/download-guide">Download</Link>
          </li>
          <li className="ml-12">
            <Link href="/getting-started">Getting Started</Link>
          </li>
          <li className="ml-12">
            <Link href="/our-work">Our Work</Link>
          </li>
          <li className="ml-12">
            <button className="border border-white rounded-full font-bold px-8 py-2">
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-julia-blue-dark">
          <ul className="list-none m-0 p-0 py-4 text-center">
            <li>
              <Link href="/download-guide">Download</Link>
            </li>
            <li>
              <Link href="/getting-started">Getting Started</Link>
            </li>
            <li>
              <Link href="/our-work">Our Work</Link>
            </li>
            <li>
              <button className="block mx-auto border border-white rounded-full font-bold px-8 py-2 mt-4">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MainNavigation;
