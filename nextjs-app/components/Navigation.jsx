"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Menu = [
  { name: "Our Offer", href: "/our-offer" },
  { name: "Impact", href: "/our-impact" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/ressources" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

function Navigation({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="relative z-50">
      <div className="fixed left-4 top-6 z-50 mix-blend-difference lg:left-10 lg:top-4">
        <div className="relative">
          <Logo img={data.logo?.url} className="relative" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed right-4 top-6 z-40 lg:right-10 lg:top-4">
        <div className="absolute inset-0 z-[-1] rounded bg-[rgba(255,255,255,0.7)] backdrop-blur-3xl"></div>
        <ul className="relative items-center gap-10 px-4 py-2 text-sm lg:flex lg:p-4">
          {data?.navItems.map((item, index) => (
            <li key={index} className="hidden lg:block">
              <Link href={item.linkUrl}>{item.label}</Link>
            </li>
          ))}
          <li
            className="cursor-pointer lg:hidden"
            onClick={() => setIsOpen((state) => !state)}
          >
            {isOpen ? "Close" : "Menu"}
          </li>
        </ul>
      </nav>
      <nav>
        <ul
          className={`${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } fixed inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-[rgba(255,255,255,0.7)] p-4 backdrop-blur-3xl transition-all duration-300 ease-in-out lg:hidden`}
        >
          {Menu.map((item, index) => (
            <li key={index}>
              <Link
                onClick={() => setIsOpen((state) => false)}
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
