import Image from "next/image";

function Logo({ img }) {
  return (
    <Image
      width={600}
      height={600}
      src={img || "/images/placeholder.jpg"}
      alt="Tujikuze logo"
      className="max-h-8 max-w-44 object-cover"
    />
  );
}

export default Logo;
