import Image from "next/image";

import logo from "../public/images/Logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Tujikuze logo png" />
    </Link>
  );
}

export default Logo;
