import Image from "next/image";

import Link from "next/link";

function Logo({ img }) {
  return (
    <Link href="/" className="">
      <Image
        width={600}
        height={600}
        src={img}
        alt="Tujikuze logo"
        className="max-h-8 max-w-44 object-cover"
      />
    </Link>
  );
}

export default Logo;
