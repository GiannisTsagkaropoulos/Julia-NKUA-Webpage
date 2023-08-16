import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ContactButton from "../contact-button/ContactButton";

import classes from "../contact-button/Button.module.css";

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // bg-julia-blue-dark px-10">
  return (
    <header className="fixed w-full h-26 flex order-1 items-center justify-between bg-julia-blue-dark opacity-[98%] px-10 xl:px-32 z-50">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="hidden lg:block">
        <ul className="list-none m-0 p-0 flex items-baseline ">
          <li className="ml-12 text-white text-xl hover:scale-110 font-extrabold">
            <Link href="/getting-started">Getting Started</Link>
          </li>
          <li className="ml-12 text-white text-xl hover:scale-110 font-extrabold">
            <Link href="/download-guide">Download</Link>
          </li>
          <li className="ml-12 text-white text-xl hover:scale-110 font-extrabold">
            <Link href="/our-work">Our Work</Link>
          </li>
          <li className="ml-12">
            <ContactButton />
          </li>
        </ul>
      </nav>
      <div className="lg:hidden">
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
        <nav className="lg:hidden absolute top-[6.5rem] left-0 w-full bg-julia-blue-dark h-screen z-50">
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
              <ContactButton />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
export default MainNavigation;
