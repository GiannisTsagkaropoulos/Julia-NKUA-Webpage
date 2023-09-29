import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ContactButton from "../contact/contact-button-navbar/ContactButton";

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    function handleOrientationChange(event) {
      setIsFlipped(event.matches);
    }

    // Initial check
    const initialOrientation = window.matchMedia("(orientation: landscape)");
    handleOrientationChange(initialOrientation);

    // Listen for orientation changes
    const mediaQuery = window.matchMedia("(orientation: landscape)");
    mediaQuery.addListener(handleOrientationChange);

    // Clean up the media query listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleOrientationChange);
    };
  }, []);

  const toggleMenuItem = (event) => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuLogo = (event) => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header
      className="the-logo fixed w-full h-[4.7rem] 2xl:h-[5.1rem] flex order-1 items-center justify-between bg-julia-blue-dark backdrop-blur-md px-10 xl:px-32 z-50"
      onClick={toggleMenuLogo}
    >
      <Link href="/">
        <Logo />
      </Link>
      <nav className="hidden lg:block">
        <ul className="list-none m-0 p-0 flex items-baseline ">
          <li className="ml-12 text-white text-lg 2xl:text-xl hover:scale-110 font-extrabold">
            <Link href="/download-guide">Download</Link>
          </li>
          <li className="ml-12 text-white text-lg 2xl:text-xl hover:scale-110 font-extrabold">
            <Link href="/getting-started">Getting Started</Link>
          </li>
          <li className="ml-12 text-white text-lg 2xl:text-xl hover:scale-110 font-extrabold">
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
          onClick={toggleMenuItem}
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
        <nav className="lg:hidden absolute top-[4.5rem] 2xl:top-[4.8rem] left-0 w-full bg-julia-blue-dark h-screen z-50">
          <ul className="flex flex-col list-none m-0 p-0 text-center mt-[1.75rem]">
            <li
              onClick={toggleMenuItem}
              className="text-white text-3xl hover:scale-110 font-extrabold"
            >
              <Link href="/download-guide">Download</Link>
            </li>
            {isFlipped ? (
              <li
                onClick={toggleMenuItem}
                className="text-white text-3xl hover:scale-110 font-extrabold my-2"
              >
                <Link href="/getting-started">Getting Started</Link>
              </li>
            ) : (
              <li
                onClick={toggleMenuItem}
                className="text-white text-3xl hover:scale-110 font-extrabold my-12"
              >
                <Link href="/getting-started">Getting Started</Link>
              </li>
            )}

            <li
              onClick={toggleMenuItem}
              className="text-white text-3xl hover:scale-110 font-extrabold "
            >
              <Link href="/our-work">Our Work</Link>
            </li>
            {isFlipped ? (
              <li
                onClick={toggleMenuItem}
                className="text-white text-3xl hover:scale-110 font-extrabold mt-4"
              >
                <Link href="/contact">
                  <ContactButton />
                </Link>
              </li>
            ) : (
              <li
                onClick={toggleMenuItem}
                className="text-white text-3xl hover:scale-110 font-extrabold mt-16"
              >
                <Link href="/contact">
                  <ContactButton />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
export default MainNavigation;
