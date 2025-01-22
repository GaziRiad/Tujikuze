import Link from "next/link";
import Logo from "./Logo";

const Menu = [
  { name: "Our Offer", href: "#" },
  { name: "Impact", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Resources", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
];

function Navigation() {
  return (
    <header className="px-6">
      {/* Logo with blending */}
      <div className="fixed left-10 top-4 mix-blend-difference">
        {/* Fallback for light sections */}
        <div className="relative">
          {/* <div className="absolute inset-0 bg-black mix-blend-difference" /> */}
          <Logo className="relative" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed right-10 top-4">
        <div className="absolute inset-0 rounded bg-white opacity-60 backdrop-blur-xl"></div>
        <ul className="relative flex items-center gap-10 p-4">
          {Menu.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
