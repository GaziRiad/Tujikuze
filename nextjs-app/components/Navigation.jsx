import Link from "next/link";
import Logo from "./Logo";

const Menu = [
  { name: "Our Offer", href: "#" },
  { name: "Impact", href: "/our-impact" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "#" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "#" },
];

function Navigation() {
  return (
    <header className="px-6 lg:block">
      {/* Logo with blending */}
      <div className="fixed left-4 top-6 z-50 mix-blend-difference lg:left-10 lg:top-4">
        {/* Fallback for light sections */}
        <div className="relative">
          {/* <div className="absolute inset-0 bg-black mix-blend-difference" /> */}
          <Logo className="relative" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed right-4 top-6 z-40 lg:right-10 lg:top-4">
        <div className="absolute inset-0 rounded bg-white opacity-60 backdrop-blur-xl"></div>
        <ul className="relative items-center gap-10 px-4 py-2 lg:flex lg:p-4">
          {Menu.map((item, index) => (
            <li key={index} className="hidden lg:block">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
          <li className="lg:hidden">Menu</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
