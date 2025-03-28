"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import Newsletter from "./Newsletter";

function Navigation({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="z-50">
      {/* Logo with blending */}
      <div className="fixed left-4 top-6 z-50 mix-blend-difference lg:left-10 lg:top-4">
        {/* Fallback for light sections */}
        <div className="relative">
          {/* <div className="absolute inset-0 bg-black mix-blend-difference" /> */}
          <Link href="/">
            <Logo className="relative" img={data.logo?.url} />
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed right-4 top-6 z-40 hidden lg:right-10 lg:top-4 lg:block">
        <div className="absolute inset-0 z-[-1] rounded bg-[rgba(255,255,255,0.7)] backdrop-blur-3xl"></div>
        <ul className="relative hidden items-center gap-10 px-4 py-2 text-sm lg:flex lg:p-4">
          {data?.navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.linkUrl}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed right-4 top-6 z-50`}>
        <button
          className="relative z-50 rounded bg-[rgba(255,255,255,0.7)] px-4 py-2 text-sm backdrop-blur-3xl lg:hidden"
          onClick={() => setIsOpen((state) => !state)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <div
          className={`fixed left-0 top-0 z-40 min-h-[50%] w-full bg-light-500 p-6 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <ul className="mb-8 text-lg">
            {data?.navItems.map((item, index) => (
              <li key={index} className="">
                <Link href={item.linkUrl} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mb-8 text-sm">
            {data?.navSocials?.map((item, index) => (
              <li key={index}>
                <Link href={item.linkUrl} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Newsletter data={data?.newsletter} type="navigation" />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
