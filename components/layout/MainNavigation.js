import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ContactButton from "../contact/contact-button-navbar/ContactButton";

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // bg-julia-blue-dark opacity-[98%]
  //
  return (
    <header className="fixed w-full h-28 flex order-1 items-center justify-between bg-julia-blue-dark bg-opacity-90 backdrop-blur-md px-10 xl:px-32 z-50">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="hidden lg:block">
        <ul className="list-none m-0 p-0 flex items-baseline ">
          <li className="ml-12 text-white text-xl hover:scale-110 font-extrabold">
            <Link href="/download-guide">Download</Link>
          </li>
          <li className="ml-12 text-white text-xl hover:scale-110 font-extrabold">
            <Link href="/getting-started">Getting Started</Link>
          </li>
          <li className="ml-12 text-white text-xl hover:scale-110 font-extrabold">
            <Link href="/our-work">Our Work</Link>
          </li>
          <li className="ml-12">
            <Link href="/contact">
              <ContactButton />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none animation-200"
        >
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
        <nav className="lg:hidden absolute top-[6.7rem] left-0 w-full bg-julia-blue-dark h-screen z-50">
          <ul className="flex flex-col list-none m-0 p-0 py-4 text-center mt-8">
            <li
              onClick={toggleMenu}
              className="text-white text-3xl hover:scale-110 font-extrabold"
            >
              <Link href="/download-guide">Download</Link>
            </li>
            <li
              onClick={toggleMenu}
              className="text-white text-3xl hover:scale-110 font-extrabold my-12"
            >
              <Link href="/getting-started">Getting Started</Link>
            </li>
            <li
              onClick={toggleMenu}
              className="text-white text-3xl hover:scale-110 font-extrabold "
            >
              <Link href="/our-work">Our Work</Link>
            </li>
            <li
              onClick={toggleMenu}
              className="text-white text-3xl hover:scale-110 font-extrabold mt-16"
            >
              <Link href="/contact">
                <ContactButton />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
export default MainNavigation;
